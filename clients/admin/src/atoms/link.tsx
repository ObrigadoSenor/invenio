import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

// const Lnk = styled.a`
//   color: ${({ theme }) => theme.colors.text.base};
//   cursor: pointer;
//   :hover {
//     opacity: 0.5;
//   }
//   &[aria-current] {
//     color: ${({ theme }) => theme.colors.text.optional};
//     opacity: 0.3;
//     cursor: default;
//   }
// `;

type LinkType = {
  children: any;
  href: string;
};

export const Link = ({ children, href }: LinkType) => {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <NextLink href={href}>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href ? "page" : null,
      })}
    </NextLink>
  );
};
