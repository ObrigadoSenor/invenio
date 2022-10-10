import { Dayjs } from "dayjs";
import { Request } from "express";
import { model, Schema } from "mongoose";

export interface WorkspaceModelTypes extends Schema {
  title: string;
  createdAt: Dayjs;
  userId: string;
  _id: string;
}

const WorkspaceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export type RequestAddWorkspaceType = Request &
  Pick<WorkspaceModelTypes, "userId" | "title"> & {};

export type RequestGetWorkspacesType = Request &
  Pick<WorkspaceModelTypes, "userId"> & {};

export type RequestDropWorkspaceType = Request &
  Pick<WorkspaceModelTypes, "_id"> & {};

export type RequestGetWorkspaceByIdType = Request &
  Pick<WorkspaceModelTypes, "_id"> & {};

export const WorkspaceModel = model("workspaces", WorkspaceSchema);
