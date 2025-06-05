// src/components/atoms/Image/Image.tsx
import React from 'react';
import styles from './Image.module.css';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${styles.image} ${className || ''}`}
      {...props}
    />
  );
};

export default Image;