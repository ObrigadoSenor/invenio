import React, { useEffect, useRef } from 'react';
import { IIconProps } from '../../models';
import './iconStyle.css';

export const Icon: React.FC<IIconProps> = ({ icon, size = 'm', color, disabled }) => {
  const iconRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (color) {
      iconRef?.current?.querySelector('path')?.setAttribute('fill', color);
    }
  }, [iconRef]);

  return (
    <span data-testid="icon" ref={iconRef} className={`icon icon-${size} ${disabled && 'disabled'}`}>
      {icon}
    </span>
  );
};
