import { log } from "console";
import express, { Response } from "express";
import { ObjectId } from "mongodb";
import { WorkspaceModel } from "../model/workspaceModel";
import { ContentErrorModel } from "./../model/contentErrorModel";
import {
  ContentsModel,
  RequestDropWorkspaceContentByIdType,
} from "./../model/contentModel";

const auth = require("../middleware/auth");

const dropWorkspaceContentById = express.Router();

/**
 * @method - POST
 * @param - /dropWorkspaceContentById
 * @description - Drop Workspace Content by ID
 */
dropWorkspaceContentById.post(
  "/dropWorkspaceContentById",
  auth,
  async (req: RequestDropWorkspaceContentByIdType, res: Response) => {
    const { _id, userId, workspaceId } = req?.body || {};

    try {
      if (!_id) {
        const error: ContentErrorModel[] = [
          {
            id: "dropWorkspaceContent.noId",
            msg: "Couldn't find content with id",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      if (!userId) {
        const error: ContentErrorModel[] = [
          {
            id: "dropWorkspaceContent.noUserId",
            msg: "Couldn't find user id",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      if (!workspaceId) {
        const error: ContentErrorModel[] = [
          {
            id: "dropWorkspaceContent.noWorkspaceId",
            msg: "Couldn't find workspace id",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      const filter = {
        userId,
        workspaceId,
      };

      const update = {
        $pull: {
          children: {
            _id: new ObjectId(_id),
          },
        },
      };

      const options = { new: true, safe: true, upsert: true };

      const content = await ContentsModel.findOneAndUpdate(
        filter,
        update,
        options
      );
      res.status(200).json({ success: true, droppedId: _id, content });
    } catch (err: any) {
      console.log(err.message);
      const error: ContentErrorModel[] = [
        {
          id: "dropWorkspaceContent.failedInSavingToDb",
          msg: "Error in Saving",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const DropWorkspaceContentByIdRoute = dropWorkspaceContentById;
