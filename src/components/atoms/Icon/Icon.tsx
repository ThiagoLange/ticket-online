// src/components/atoms/Icon/Icon.tsx
import React from 'react';

interface IconProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ children, onClick, size = 24, color, style }) => {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size,
        color: color,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Icon;