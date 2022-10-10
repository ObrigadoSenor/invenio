import express, { Response } from "express";
import { WorkspaceErrorModel } from "../model/errorModel";
import {
  RequestAddWorkspaceType,
  WorkspaceModel,
} from "./../model/workspaceModel";

const auth = require("../middleware/auth");

const addWorkspace = express.Router();

/**
 * @method - POST
 * @param - /addWorkspace
 * @description - Add Workspace
 */
addWorkspace.post(
  "/addWorkspace",
  auth,
  async (req: RequestAddWorkspaceType, res: Response) => {
    const { title, userId } = req?.body || {};
    try {
      if (!title) {
        const error: WorkspaceErrorModel[] = [
          {
            id: "addWorkspace.noTitle",
            msg: "Title need to be filled in",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      if (!userId) {
        const error: WorkspaceErrorModel[] = [
          {
            id: "addWorkspace.noUserId",
            msg: "Couldn't find user",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      const workspace = new WorkspaceModel({
        ...req.body,
      });

      await workspace.save();
      res.status(200).send({ success: true, workspace });
    } catch (err: any) {
      console.log(err.message);
      const error: WorkspaceErrorModel[] = [
        {
          id: "addWorkspace.failedInSavingToDb",
          msg: "Error in Saving",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const AddWorkspaceRoute = addWorkspace;
