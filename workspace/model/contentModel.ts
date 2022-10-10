import { Request } from "express";
import { model, Schema } from "mongoose";

export interface ContentTextTypes {
  title: string;
  description: string;
  variant: string;
  _id: string;
}

export interface ContentModelTextTypes extends Schema, ContentTextTypes {}

export interface ContentImageTypes {
  alt: string;
  src: string;
  variant: string;
  _id: string;
}

export interface ContentModelImageTypes extends Schema, ContentImageTypes {}

export interface ContentModelTypes extends Schema {
  children: Array<ContentModelTextTypes | ContentModelImageTypes>;
  userId: string;
  workspaceId: string;
  variant: string;
  _id: string;
}

export const ContentsTextSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  variant: {
    type: String,
  },
});

export const ContentsImageSchema = new Schema({
  alt: {
    type: String,
  },
  src: {
    type: String,
  },
  variant: {
    type: String,
  },
});

const ContentSchema = new Schema({
  workspaceId: {
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
  children: [
    {
      type: Object,
    },
  ],
});

export type RequestAddWorkspaceContentType = Request & {
  variant: string;
  userId: string;
  token: string;
  workspaceId: string;
};

export type RequestUpdateWorkspaceContentType = Request & {
  _id: string;
  userId: string;
  token: string;
  workspaceId: string;
};

export type RequestUpdateWorkspaceContentOrderType = Request & {
  userId: string;
  token: string;
  workspaceId: string;
  content: ContentModelTypes["children"];
};

export type RequestGetWorkspaceContentByIdType = Request &
  Pick<ContentModelTypes, "userId" | "workspaceId">;

export type RequestDropWorkspaceContentByIdType = Request &
  Pick<ContentModelTypes, "userId" | "_id" | "workspaceId">;

export const ContentsModel = model("contents", ContentSchema);
