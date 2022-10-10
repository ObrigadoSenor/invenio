import bcrypt from "bcryptjs";
import express, { Response } from "express";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { map } from "ramda";
import { AuthenticationErrorModel } from "../model/errorModel";
import { RequestUserType, UserModel } from "../model/userModel";
import { UserModelTypes } from "./../model/userModel";
const signInRouter = express.Router();

/**
 * @method - POST
 * @param - /signIn
 * @description - User Signin
 */
signInRouter.post(
  "/signin",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req: RequestUserType, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = map(
        ({ msg, param }) =>
          ({
            id: `signIn.${param}` as AuthenticationErrorModel["id"],
            msg,
            status: 400,
          } as AuthenticationErrorModel),
        errors.array()
      );
      return res.status(400).json({ error });
    }

    const { email, password } = req.body;
    try {
      let user: UserModelTypes = await UserModel.findOne({
        email,
      });
      if (!user) {
        const error: AuthenticationErrorModel[] = [
          {
            id: "signIn.userNotExists",
            msg: "User Does Not Exists",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        const error: AuthenticationErrorModel[] = [
          {
            id: "signIn.password",
            msg: "Incorrect Password!",
            status: 400,
          },
        ];
        return res.status(400).json({ error });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 86400,
        },
        (err, token) => {
          if (err) {
            const error: AuthenticationErrorModel[] = [
              {
                id: "signIn.serverError",
                msg: "Server error",
                status: 500,
              },
            ];
            res.status(500).json({
              error,
            });
            throw err;
          }
          res.status(200).json({
            token,
          });
        }
      );
    } catch (err: any) {
      console.log(err.message);
      const error: AuthenticationErrorModel[] = [
        {
          id: "signIn.serverError",
          msg: "Server error",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const SignInRoute = signInRouter;
