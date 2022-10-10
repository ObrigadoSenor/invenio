import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthenticationErrorModel } from "./../model/errorModel";
import { RequestUserType } from "./../model/userModel";

module.exports = (req: RequestUserType, res: Response, next: NextFunction) => {
  const token = req.header("token") || req?.body?.headers?.token;
  if (!token) {
    const error: AuthenticationErrorModel[] = [
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
    req.user = decoded.user;
    next();
  } catch (err: any) {
    console.error(err);
    const error: AuthenticationErrorModel[] = [
      {
        id: "user.invalidToken",
        msg: "Invalid Token",
        status: 500,
      },
    ];
    res.status(500).send({ error });
  }
};
