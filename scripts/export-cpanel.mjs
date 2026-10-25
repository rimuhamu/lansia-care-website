import { spawn } from 'node:child_process'
import { cp, mkdir, rm, symlink } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const shadow = path.join(root, '..', '.lansia-care-cpanel-build')
const zipPath = path.join(root, 'lansia-care-cpanel.zip')

const skippedTops = new Set([
  'node_modules',
  '.next',
  '.next-export',
  '.git',
  'out',
  'dist',
  'media',
  '.vercel',
])

function run(command, args, { cwd, extraEnv = {} } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      env: { ...process.env, ...extraEnv },
      stdio: 'inherit',
      shell: false,
    })
    child.on('error', reject)
    child.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${command} exited with code ${code}`))
    })
  })
}

function shouldCopy(src) {
  const rel = path.relative(root, src)
  if (!rel) return true
  const parts = rel.split(path.sep)
  if (skippedTops.has(parts[0])) return false
  if (parts[0].startsWith('.env')) return false
  if (parts[0] === 'lansia-care-cpanel.zip') return false
  return true
}

await rm(shadow, { recursive: true, force: true })
await mkdir(shadow, { recursive: true })
await cp(root, shadow, { recursive: true, filter: shouldCopy })
await symlink(path.join(root, 'node_modules'), path.join(shadow, 'node_modules'), 'junction')

try {
  const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next')
  await run(process.execPath, [nextBin, 'build'], {
    cwd: shadow,
    extraEnv: { STATIC_EXPORT: '1' },
  })
  const exported = path.join(shadow, 'out')
  const localOut = path.join(root, 'out')
  await rm(localOut, { recursive: true, force: true })
  await cp(exported, localOut, { recursive: true })
  await rm(zipPath, { force: true })
  await run('tar', ['-a', '-c', '-f', zipPath, '-C', localOut, '.'], {
    cwd: root,
  })
  console.log(`Created ${zipPath}`)
} finally {
  await rm(shadow, { recursive: true, force: true })
}
