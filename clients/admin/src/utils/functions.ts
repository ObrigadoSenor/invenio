import dayjs, { Dayjs } from "dayjs";
import { NextApiResponse } from "next";
import type { GetServerSideProps } from "next";

import { DocumentContext } from "next/document";
import { replace, toUpper } from "ramda";
import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import {
  getUserFromServerSide,
  verifyTokenFromServerSide,
} from "./fetch/fetch";

export const capitalize = replace(/^./, toUpper);

export const standardDateFormat = (date: Dayjs) =>
  dayjs(date).format("dddd, MMMM D, YYYY");

type ServerSideNavigation = {
  res: NextApiResponse<any> | DocumentContext["res"];
  Location: string;
  status?: number;
};

export const serverNavigation = ({
  res,
  Location,
  status = 301,
}: ServerSideNavigation) => {
  res?.writeHead(status, {
    Location,
  });
  res?.end();
};

type ServerSideVerificationAndCookieHandeling = {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
  res: ServerResponse;
};

export const serverSideVerificationAndCookieHandeling = async ({
  req,
  res,
}: ServerSideVerificationAndCookieHandeling) => {
  let user = null;
  const { cookies } = req || {};
  const { token } = cookies || {};
  const { success: verifiedToken } = await verifyTokenFromServerSide({ token });
  console.log("verifiedToken", verifiedToken);

  if (verifiedToken) {
    user = await getUserFromServerSide({ token });
  } else {
    serverNavigation({ res, Location: "/" });
  }

  return { ...cookies, verifiedToken, user };
};
