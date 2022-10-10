import express, { Response } from "express";
import { ObjectId } from "mongodb";
import { map } from "ramda";
import { ContentErrorModel } from "../model/contentErrorModel";
import {
  ContentsModel,
  RequestUpdateWorkspaceContentOrderType,
} from "../model/contentModel";

const updateWorkspaceContentOrder = express.Router();

/**
 * @method - POST
 * @description - Update content data order
 * @param - /updateWorkspaceContentOrder
 */

updateWorkspaceContentOrder.post(
  "/updateWorkspaceContentOrder",
  async (req: RequestUpdateWorkspaceContentOrderType, res: Response) => {
    try {
      const { userId, workspaceId, content } = req?.body || {};

      const contentWithObjectId = map(
        ({ ...rest }): any => ({ ...rest, _id: new ObjectId(rest._id) }),
        content
      );

      const filter = {
        userId,
        workspaceId,
      };

      const update = {
        $set: {
          children: contentWithObjectId,
        },
      };

      const options = { new: true, safe: true, upsert: true };

      const dbContent = await ContentsModel.findOneAndUpdate(
        filter,
        update,
        options
      );

      await dbContent.save();
      res.status(200).json({ success: true, content: dbContent });
    } catch (err: any) {
      console.log(err);

      const error: ContentErrorModel[] = [
        {
          id: "addWorkspaceContent.failedInSavingToDb",
          msg: "Failed to update content",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const UpdateWorkspaceContentOrderRoute = updateWorkspaceContentOrder;
