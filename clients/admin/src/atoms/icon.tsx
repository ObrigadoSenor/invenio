import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faMoon,
  faSun,
  faSignInAlt,
  faSignOutAlt,
  faEnvelope,
  faCalendarDay,
  faTrashAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { Text } from "@invenio/core";
import { ThemeSize, ThemeVariant } from "@invenio/theme";
import styled, { css } from "styled-components";

library.add(
  faCoffee,
  faMoon,
  faSun,
  faSignInAlt,
  faSignOutAlt,
  faEnvelope,
  faCalendarDay,
  faTrashAlt,
  faPlus
);

const IcnWrapper = styled.button<Partial<IconType>>`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: ${({ direction = "column" }) => direction};
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
  margin: 0;
`;

const Icn = styled(FontAwesomeIcon)<Partial<IconType>>`
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  color: ${({ variant = "accent", theme }) => theme.colors[variant]};
  height: 1rem;
  width: 1rem;
`;

const Txt = styled(Text)<Partial<IconType>>`
  ${({ direction = "column" }) =>
    direction === "column"
      ? css`
          margin-top: ${({ theme }) =>
            `${theme.spacings.sm}${theme.units.spacings}`};
        `
      : css`
          margin-left: ${({ theme }) =>
            `${theme.spacings.sm}${theme.units.spacings}`};
        `}
  color: ${({ variant = "accent", theme }) => theme.colors[variant]};
  font-size: ${({ fontSize = "sm", theme }) =>
    `${theme.fontSize[fontSize]}${theme.units.fontSize}`};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

export type IconType = {
  variant?: ThemeVariant;
  onClick?: () => void;
  label?: string;
  direction?: "column" | "row";
  fontSize?: ThemeSize;
};

export const Icon = ({
  label,
  icon,
  onClick,
  variant = "accent",
  direction,
  fontSize,
  ...rest
}: IconType & FontAwesomeIconProps): JSX.Element => {
  return (
    <IcnWrapper
      as={onClick ? "button" : "span"}
      onClick={onClick}
      direction={direction}
    >
      <Icn icon={icon} onClick={onClick} {...rest} />
      {label ? (
        <Txt
          direction={direction}
          variant={variant}
          fontSize={fontSize}
          onClick={onClick}
        >
          {label}
        </Txt>
      ) : null}
    </IcnWrapper>
  );
};
