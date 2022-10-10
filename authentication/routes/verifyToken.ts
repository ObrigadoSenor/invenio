import express, { Response } from "express";
import { AuthenticationErrorModel } from "../model/errorModel";
import { RequestUserType } from "../model/userModel";

const verifyToken = express.Router();
const auth = require("../middleware/auth");
/**
 * @method - GET
 * @description - Verify token
 * @param - /verifyToken
 */

verifyToken.get(
  "/verifyToken",
  auth,
  async (req: RequestUserType, res: Response) => {
    try {
      const { id } = req?.user || {};
      if (!id) {
        const error: AuthenticationErrorModel[] = [
          {
            id: "user.invalidToken",
            msg: "Invalid token",
            status: 500,
          },
        ];
        res.status(500).send({ error, success: false });
      }
      res.status(200).send({ success: true });
    } catch (err: any) {
      console.log(err);

      const error: AuthenticationErrorModel[] = [
        {
          id: "user.authenticationError",
          msg: "Error in Authenticating Token",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const VerifyTokenRoute = verifyToken;
