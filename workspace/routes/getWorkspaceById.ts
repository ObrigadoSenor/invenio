import { ObjectId } from "mongodb";
import express, { Response } from "express";
import { WorkspaceErrorModel } from "../model/errorModel";
import {
  RequestGetWorkspaceByIdType,
  WorkspaceModel,
  WorkspaceModelTypes,
} from "../model/workspaceModel";

const auth = require("../middleware/auth");

const getWorkspaceById = express.Router();

/**
 * @method - GET
 * @param - /getWorkspaceById
 * @description - Get Workspace by ID
 */

getWorkspaceById.get(
  "/getWorkspaceById",
  auth,
  async (req: RequestGetWorkspaceByIdType, res: Response) => {
    const { _id } = req?.body || {};

    try {
      if (!_id) {
        const error: WorkspaceErrorModel[] = [
          {
            id: "getWorkspaceById.noId",
            msg: "Couldn't find workspace",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      const workspace: WorkspaceModelTypes = await WorkspaceModel.findById({
        _id,
      });
      res.status(200).send({ success: true, workspace });
    } catch (err: any) {
      console.log(err.message);
      const error: WorkspaceErrorModel[] = [
        {
          id: "getWorkspaceById.failedInSavingToDb",
          msg: "Error in Saving",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const GetWorkspaceByIdRoute = getWorkspaceById;
