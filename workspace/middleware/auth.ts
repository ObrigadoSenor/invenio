import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { WorkspaceErrorModel } from "./../model/errorModel";
import { RequestAddWorkspaceType } from "./../model/workspaceModel";

module.exports = (
  req: RequestAddWorkspaceType,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("token") || req?.body?.headers?.token;
  if (!token) {
    const error: WorkspaceErrorModel[] = [
      {
        id: "user.authenticationError",
        msg: "Authentication Error",
        status: 401,
      },
    ];
    return res.status(401).json({ error });
  }

  try {
    const decoded = jwt.verify(token, "randomString") as JwtPayload;
    if (decoded?.user?.id) {
      next();
    }
  } catch (err: any) {
    console.error(err);
    const error: WorkspaceErrorModel[] = [
      {
        id: "user.invalidToken",
        msg: "Invalid Token",
        status: 500,
      },
    ];
    res.status(500).send({ error });
  }
};
