import express, { Response } from "express";
import { AuthenticationErrorModel } from "../model/errorModel";
import { RequestUserType, UserModel, UserModelTypes } from "../model/userModel";

const getUserFromToken = express.Router();
const auth = require("../middleware/auth");
/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /getUserFromToken
 */

getUserFromToken.get(
  "/getUserFromToken",
  auth,
  async (req: RequestUserType, res: Response) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const { id } = req?.user || {};
      const userDB: UserModelTypes = await UserModel.findById(id);
      if (!userDB) {
        const error: AuthenticationErrorModel[] = [
          {
            id: "user.failedFetchUser",
            msg: "Error in Fetching user",
            status: 500,
          },
        ];

        res.status(500).send({ error });
      }
      const { _id, email, firstName, surName, createdAt } = userDB || {};
      const user = {
        id: _id,
        email,
        firstName,
        surName,
        createdAt,
      };

      res.status(200).json({
        user,
      });
    } catch (err: any) {
      console.log(err);

      const error: AuthenticationErrorModel[] = [
        {
          id: "user.failedFetchUser",
          msg: "Error in Fetching user",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const GetUserFromTokenRoute = getUserFromToken;
