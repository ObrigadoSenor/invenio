import express, { Response } from "express";
import { AuthenticationErrorModel } from "../model/errorModel";
import { RequestUserType, UserModel } from "../model/userModel";

const dropUser = express.Router();
const auth = require("../middleware/auth");

/**
 * @method - POST
 * @description - Drop user
 * @param - /dropUser
 */

dropUser.post(
  "/dropUser",
  auth,
  async (req: RequestUserType, res: Response) => {
    try {
      const { id } = req.body;
      await UserModel.findByIdAndRemove(id);
      res.status(200).json({ success: true });
    } catch (err: any) {
      console.log(err);
      const error: AuthenticationErrorModel[] = [
        {
          id: "user.failedToRemoveUser",
          msg: "Error in removing user",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const DropUserRoute = dropUser;
