import { ObjectId } from "mongodb";
import express, { Response } from "express";
import { ContentErrorModel } from "./../model/contentErrorModel";
import {
  ContentsModel,
  RequestUpdateWorkspaceContentType,
} from "./../model/contentModel";

const updateWorkspaceContent = express.Router();

/**
 * @method - POST
 * @description - Update content data
 * @param - /updateWorkspaceContent
 */

updateWorkspaceContent.post(
  "/updateWorkspaceContent",
  async (req: RequestUpdateWorkspaceContentType, res: Response) => {
    try {
      const {
        _id,
        userId,
        workspaceId,
        variant,
        title,
        description,
        alt,
        src,
      } = req?.body || {};

      const filter = {
        userId,
        workspaceId,
        children: {
          $elemMatch: { _id: new ObjectId(_id) },
        },
      };
      let update = {};
      switch (variant) {
        case "text":
          update = {
            $set: {
              "children.$.title": title,
              "children.$.description": description,
            },
          };
          break;
        case "image":
          update = { $set: { "children.$.src": src, "children.$.alt": alt } };
          break;
        default:
          break;
      }

      const options = { new: true, safe: true, upsert: true };

      const content = await ContentsModel.findOneAndUpdate(
        filter,
        update,
        options
      );
      res.status(200).json({ success: true, content });
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

export const UpdateWorkspaceContentRoute = updateWorkspaceContent;
