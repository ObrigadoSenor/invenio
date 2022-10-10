import styled from "styled-components";
import { device } from "../../../styles/mediaQueries/mediaQueries";

export const Wrapper = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  & > li {
    list-style: none;
    width: 100%;
    margin-bottom: ${({ theme }) =>
      `${theme.spacings.md}${theme.units.spacings}`};
  }
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 25%;
  }
`;
