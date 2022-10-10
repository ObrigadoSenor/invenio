import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../../../styles/mediaQueries/mediaQueries";
import { Text } from "@invenio/core";

const SwitchAuthenticationViewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${({ theme }) => `${theme.spacings.md}${theme.units.spacings}`};
  @media ${device.tablet} {
    margin-top: ${({ theme }) => `${theme.spacings.lg}${theme.units.spacings}`};
  }
`;

const Lnk = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  &[aria-current] {
    opacity: 0.4;
    cursor: default;
  }
`;

export type SwitchAuthenticationViewProps = {
  query: "signIn" | "signUp";
};

export const SwitchAuthenticationView = ({
  query,
}: SwitchAuthenticationViewProps) => {
  return (
    <SwitchAuthenticationViewWrapper>
      <Text>{`${
        query === "signUp"
          ? "Don't have an account yet?"
          : "Already have an account?"
      }`}</Text>
      <Link href={`/auth?${query}=true`}>
        <Lnk>{`${query === "signUp" ? "Sign up" : "Sign in"}`}</Lnk>
      </Link>
    </SwitchAuthenticationViewWrapper>
  );
};
