import React from "react";
import styled from "styled-components";
import { getAuthLoggedIn } from "../../../redux/slices/authentication";
import { device } from "../../../styles/mediaQueries/mediaQueries";
import { Link } from "../../atoms/link";
import { AvatarBlob } from "../menu/avatar";
import { SignIn } from "../menu/signIn";

const Hdr = styled.header`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacings.md}${theme.units.spacings}`};
  @media ${device.tablet} {
    padding: ${({ theme }) =>
      `${theme.spacings.lg}${theme.units.spacings} ${theme.spacings.xl}${theme.units.spacings}`};
  }
  display: grid;
  grid-template-columns: 1fr auto;
`;

const HdrUl = styled.ul`
  display: flex;
`;

const HdrLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  :not(:last-of-type) {
    margin-right: ${({ theme }) =>
      `${theme.spacings.lg}${theme.units.spacings}`};
  }
`;

const Lnk = styled.a`
  color: ${({ theme }) => theme.colors.text.base};
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  &[aria-current] {
    opacity: 0.4;
    cursor: default;
  }
`;

type HeaderBarList = JSX.Element[];

type RenderBarItems = {
  list: HeaderBarList;
};

const renderBarItems = ({ list }: RenderBarItems) => (
  <HdrUl>
    {list.map((item, index) => (
      <HdrLi key={index}>{item}</HdrLi>
    ))}
  </HdrUl>
);

const loggedInBarList: HeaderBarList = [
  <Link href="/admin">
    <Lnk>Home</Lnk>
  </Link>,
  <Link href="/admin/workspace">
    <Lnk>Workspace</Lnk>
  </Link>,
  <Link href="/admin/numbers">
    <Lnk>Numbers</Lnk>
  </Link>,
];

export const Header = () => {
  const loggedIn = getAuthLoggedIn();

  const endBarList: HeaderBarList = [
    loggedIn === undefined ? (
      <SignIn />
    ) : loggedIn ? (
      <AvatarBlob />
    ) : (
      <SignIn />
    ),
  ];
  return (
    <Hdr>
      {renderBarItems({ list: loggedIn ? loggedInBarList : [] })}
      {renderBarItems({ list: endBarList })}
    </Hdr>
  );
};
