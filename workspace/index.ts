import cors from "cors";
import express from "express";
import { InitiateMongoServer } from "./config/database";
import { AddWorkspaceRoute } from "./routes/addWorkspace";
import { GetWorkspacesRoute } from "./routes/getWorkspaces";
import { DropWorkspaceRoute } from "./routes/dropWorkspace";
import { GetWorkspaceByIdRoute } from "./routes/getWorkspaceById";

import { AddWorkspaceContentRoute } from "./routes/addWorkspaceContent";
import { GetWorkspaceContentByIdRoute } from "./routes/getWorkspaceContentById";
import { UpdateWorkspaceContentRoute } from "./routes/updateWorkspaceContent";
import { DropWorkspaceContentByIdRoute } from "./routes/dropWorkspaceContentById";
import { UpdateWorkspaceContentOrderRoute } from "./routes/updateWorkspaceContentOrder";

InitiateMongoServer();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const PORT = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/workspaces", [
  AddWorkspaceRoute,
  GetWorkspacesRoute,
  DropWorkspaceRoute,
  GetWorkspaceByIdRoute,
]);

app.use("/content", [
  AddWorkspaceContentRoute,
  GetWorkspaceContentByIdRoute,
  UpdateWorkspaceContentRoute,
  DropWorkspaceContentByIdRoute,
  UpdateWorkspaceContentOrderRoute,
]);

app.listen(PORT, () => {
  console.log(`Authentication Server Started at PORT ${PORT}`);
});
