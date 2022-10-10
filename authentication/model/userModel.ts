import { Request } from "express";
import { Schema, model } from "mongoose";
import { Dayjs } from "dayjs";

export interface UserModelTypes extends Schema {
  firstName: string;
  surName: string;
  email: string;
  password: string;
  createdAt: Dayjs;
  id?: string;
  _id?: string;
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export type RequestUserType = Request & {
  user?: UserModelTypes;
};

export const UserModel = model("user", UserSchema);
