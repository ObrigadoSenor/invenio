import express, { Response } from "express";
import { AuthenticationErrorModel } from "../model/errorModel";
import { RequestUserType, UserModel } from "../model/userModel";

const updateUser = express.Router();

/**
 * @method - POST
 * @description - Update user data
 * @param - /updateUser
 */

updateUser.post("/updateUser", async (req: RequestUserType, res: Response) => {
  try {
    const { firstName, surName, id } = req.body;

    const user = await UserModel.findById(id);
    user.firstName = firstName;
    user.surName = surName;

    user.save((err: any) => {
      if (err) console.log("error", err);
      else console.log("success");
    });
    res.status(200).json({ user });
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
});

export const UpdateUserRoute = updateUser;
