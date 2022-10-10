import cors from "cors";
import express from "express";
import { InitiateMongoServer } from "./config/database";
import { DropUserRoute } from "./routes/dropUser";
import { GetUserFromTokenRoute } from "./routes/getUserFromToken";
import { SignInRoute } from "./routes/signIn";
import { SignUpRoute } from "./routes/signUp";
import { UpdateUserRoute } from "./routes/updateUserData";
import { VerifyTokenRoute } from "./routes/verifyToken";

InitiateMongoServer();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/auth", [
  SignUpRoute,
  SignInRoute,
  GetUserFromTokenRoute,
  VerifyTokenRoute,
  UpdateUserRoute,
  DropUserRoute,
]);

app.listen(PORT, () => {
  console.log(`Authentication Server Started at PORT ${PORT}`);
});
