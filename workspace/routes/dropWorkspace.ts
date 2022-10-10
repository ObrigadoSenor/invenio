import express, { Response } from "express";
import { WorkspaceErrorModel } from "../model/errorModel";
import {
  RequestDropWorkspaceType,
  WorkspaceModel,
} from "../model/workspaceModel";

const auth = require("../middleware/auth");

const dropWorkspace = express.Router();

/**
 * @method - POST
 * @param - /dropWorkspace
 * @description - Drop Workspace
 */
dropWorkspace.post(
  "/dropWorkspace",
  auth,
  async (req: RequestDropWorkspaceType, res: Response) => {
    const { _id } = req?.body || {};
    try {
      if (!_id) {
        const error: WorkspaceErrorModel[] = [
          {
            id: "dropWorkspace.noId",
            msg: "Couldn't find workspace to drop",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      await WorkspaceModel.findByIdAndRemove(_id);

      res.status(200).json({ success: true, droppedId: _id });
    } catch (err: any) {
      console.log(err.message);
      const error: WorkspaceErrorModel[] = [
        {
          id: "dropWorkspace.failedInSavingToDb",
          msg: "Error in Saving",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const DropWorkspaceRoute = dropWorkspace;
