import { NextApiRequest, NextApiResponse } from "next";

export type GetInitialProps = {
  req: NextApiRequest;
  res: NextApiResponse;
  pathname: string;
  err: any;
};

export type GetInitialPropsContext = {
  ctx: GetInitialProps;
};
