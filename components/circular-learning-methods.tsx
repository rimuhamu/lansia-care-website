import React from 'react';

export function CircularLearningMethods() {
  const centerNode = {
    text: 'Metode Pembelajaran Lansia',
    x: 300,
    y: 300,
  };

  const nodes = [
    { text: 'Andragogi', angle: 270 },
    { text: 'Participative', angle: 315 },
    { text: 'Story Telling', angle: 0 },
    { text: 'Art', angle: 45 },
    { text: 'Game', angle: 90 },
    { text: 'Peer Learning', angle: 135 },
    { text: 'Holistic Method', angle: 180 },
    { text: 'Experiential', angle: 225 },
  ];

  const radius = 140;
  const positionedNodes = nodes.map((node) => {
    const angleRad = (node.angle * Math.PI) / 180;
    return {
      ...node,
      x: centerNode.x + radius * Math.cos(angleRad),
      y: centerNode.y + radius * Math.sin(angleRad),
    };
  });

  const connections = positionedNodes.map((node, index) => {
    const nextNode = positionedNodes[(index + 1) % positionedNodes.length];
    return { from: node, to: nextNode };
  });

  return (
    <div className='w-full flex items-center justify-center'>
      <svg
        width='600'
        height='600'
        viewBox='50 50 500 500'>
        {connections.map((connection, index) => (
          <line
            key={`connection-${index}`}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke='#CBD5E1'
            strokeWidth='6'
            opacity='0.6'
          />
        ))}

        <g>
          <circle
            cx={centerNode.x}
            cy={centerNode.y}
            r='80'
            fill='#4F83CC'
            className='drop-shadow-lg'
          />
          <foreignObject
            x={centerNode.x - 70}
            y={centerNode.y - 20}
            width='140'
            height='40'>
            <div className='text-white text-center font-semibold text-sm leading-tight'>
              {centerNode.text}
            </div>
          </foreignObject>
        </g>

        {positionedNodes.map((node, index) => (
          <g key={`node-${index}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r='50'
              fill='#5B8FCF'
              className='drop-shadow-md hover:drop-shadow-lg transition-all duration-200 cursor-pointer'
            />
            <foreignObject
              x={node.x - 45}
              y={node.y - 10}
              width='90'
              height='20'>
              <div className='text-white text-center font-medium text-xs'>
                {node.text}
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
}
