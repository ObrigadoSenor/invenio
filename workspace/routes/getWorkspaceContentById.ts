import express, { Response } from "express";
import {
  ContentsModel,
  RequestGetWorkspaceContentByIdType,
} from "../model/contentModel";
import { WorkspaceErrorModel } from "../model/errorModel";

const auth = require("../middleware/auth");

const getWorkspaceContentById = express.Router();

/**
 * @method - GET
 * @param - /getWorkspaceContentById
 * @description - Get Workspace Content by ID
 */

getWorkspaceContentById.get(
  "/getWorkspaceContentById",
  auth,
  async (req: RequestGetWorkspaceContentByIdType, res: Response) => {
    const { workspaceId, userId } = req?.body || {};

    try {
      if (!workspaceId) {
        const error: WorkspaceErrorModel[] = [
          {
            id: "getWorkspaceContentById.noId",
            msg: "Couldn't find workspace",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      if (!userId) {
        const error: WorkspaceErrorModel[] = [
          {
            id: "getWorkspaceContentById.noUserId",
            msg: "Couldn't find user id",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }
      const workspaceContent = await ContentsModel.findOne({
        workspaceId,
        userId,
      });
      res.status(200).send({ success: true, workspaceContent });
    } catch (err: any) {
      console.log(err.message);
      const error: WorkspaceErrorModel[] = [
        {
          id: "getWorkspaceContentById.failedInSavingToDb",
          msg: "Error in Saving",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const GetWorkspaceContentByIdRoute = getWorkspaceContentById;
