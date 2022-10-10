import express, { Response } from "express";
import { Types } from "mongoose";
import { ContentErrorModel } from "./../model/contentErrorModel";
import {
  ContentsModel,
  RequestAddWorkspaceContentType,
} from "./../model/contentModel";

const auth = require("../middleware/auth");

const addWorkspaceContent = express.Router();

/**
 * @method - POST
 * @param - /addWorkspaceContentContent
 * @description - Add Workspace Content
 */

addWorkspaceContent.post(
  "/addWorkspaceContent",
  auth,
  async (req: RequestAddWorkspaceContentType, res: Response) => {
    const { variant, userId, workspaceId } = req?.body || {};
    try {
      if (!workspaceId) {
        const error: ContentErrorModel[] = [
          {
            id: "addWorkspaceContent.noWorkspaceId",
            msg: "Workspace ID was not provided",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }
      if (!variant) {
        const error: ContentErrorModel[] = [
          {
            id: "addWorkspaceContent.noVariant",
            msg: "Variant was not provided",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      if (!userId) {
        const error: ContentErrorModel[] = [
          {
            id: "addWorkspaceContent.noUserId",
            msg: "Couldn't find user",
            status: 405,
          },
        ];
        return res.status(405).json({ error });
      }

      const content =
        (await ContentsModel.findOne({
          workspaceId,
        })) ||
        new ContentsModel({
          ...req.body,
        });

      switch (variant) {
        case "image":
          content.children.push({
            variant: "image",
            alt: "",
            src: "",
            _id: new Types.ObjectId(),
          });
          break;
        case "text":
          content.children.push({
            variant: "text",
            title: "",
            description: "",
            _id: new Types.ObjectId(),
          });

          break;
      }

      await content.save();
      res.status(200).send({ success: true, content });
    } catch (err: any) {
      console.log(err.message);
      const error: ContentErrorModel[] = [
        {
          id: "addWorkspaceContent.failedInSavingToDb",
          msg: "Error in Saving",
          status: 500,
        },
      ];
      res.status(500).send({ error });
    }
  }
);

export const AddWorkspaceContentRoute = addWorkspaceContent;
