import { ObjectId } from "mongodb";
import express, { Response } from "express";
import { WorkspaceErrorModel } from "../model/errorModel";
import {
  WorkspaceModelTypes,
  RequestGetWorkspacesType,
  WorkspaceModel,
} from "../model/workspaceModel";

const auth = require("../middleware/auth");

const getWorkspaces = express.Router();

/**
 * @method - GET
 * @param - /getWorkspaces
 * @description - Get Workspaces
 */

getWorkspaces.get(
  "/getWorkspaces",
  auth,
  async (req: RequestGetWorkspacesType, res: Response) => {
    const { userId } = req?.body || {};

    try {
      if (!userId) {
        const error: WorkspaceErrorModel[] = [
          {
            id: "getWorkspaces.noUserId",
            msg: "Couldn't find user",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      const workspaces: WorkspaceModelTypes[] = await WorkspaceModel.find({
        userId,
      });
      res.status(200).send({ success: true, workspaces });
    } catch (err: any) {
      console.log(err.message);
      const error: WorkspaceErrorModel[] = [
        {
          id: "getWorkspaces.failedInSavingToDb",
          msg: "Error in Saving",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const GetWorkspacesRoute = getWorkspaces;
