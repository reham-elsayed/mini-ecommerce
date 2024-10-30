import React from 'react';

const Skeleton: React.FC<{ width?: string; height?: string; className?:string }> = ({ width = '100%', height = '20px', className }) => {
  return (
    <div
    className={className}
      style={{
        width,
        height,
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        animation: 'pulse 1.5s infinite',
        display: 'inline-block',
      }}
    />
  );
};

export default Skeleton;