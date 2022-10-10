import React from 'react';
import styled from 'styled-components';

import { ImageProps } from '../../models/components/image';
import './imageStyle.css';
import { useProgressiveImg } from './useProgressiveImg';

const ImgWrapper = styled.div<Partial<ImageProps>>`
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: ${({ borderRadius = 'md', theme }) => `${theme.borderRadius[borderRadius]}${theme.units.border}`};
  padding-bottom: ${({ aspectRatio = '21-9', theme }) => `${theme.images.aspectRatio[aspectRatio]}%`};
`;

const Img = styled.img<Partial<ImageProps> & { blur: boolean }>`
  width: 100%;
  display: flex;
  position: absolute;
  filter: ${({ blur }) => (blur ? 'blur(10px)' : 'none')};
  transition: ${({ blur, transitionSpeedMultiplierS = 1 }) =>
    blur ? 'filter 0s' : `filter ${transitionSpeedMultiplierS * 1000}ms ease-out`}; ;
`;

export const Image: React.FC<ImageProps> = ({ src, lowResSrc, alt, ...rest }) => {
  const { newSrc, blur } = useProgressiveImg({ lowQualitySrc: lowResSrc, highQualitySrc: src });

  return (
    <ImgWrapper data-testid="image-wrapper" {...rest}>
      <Img data-testid="image" src={newSrc} alt={alt} blur={blur} {...rest} />
    </ImgWrapper>
  );
};
