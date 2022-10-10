import bcrypt from "bcryptjs";
import express, { Response } from "express";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { dissoc, map } from "ramda";
import { RequestUserType, UserModel } from "../model/userModel";
import { AuthenticationErrorModel } from "./../model/errorModel";
const signUpRouter = express.Router();

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

signUpRouter.post(
  "/signup",
  [
    check("firstName", "Please enter a valid first name").not().isEmpty(),
    check("surName", "Please enter a valid sur name").not().isEmpty(),
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
            id: `signUp.${param}` as AuthenticationErrorModel["id"],
            msg,
            status: 400,
          } as AuthenticationErrorModel),
        errors.array()
      );
      return res.status(400).json({ error });
    }

    try {
      let user = await UserModel.findOne({
        email: req?.body?.email,
      });
      if (user) {
        const error: AuthenticationErrorModel[] = [
          {
            id: "signUp.userExists",
            msg: "User Already Exists",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      user = new UserModel({
        ...req.body,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req?.body?.password, salt);

      await user.save();

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
                id: "signUp.failedInSavingToDb",
                msg: "Error in Saving",
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
          id: "signUp.failedInSavingToDb",
          msg: "Error in Saving",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const SignUpRoute = signUpRouter;
