import * as functions from "firebase-functions";
import * as express from "express";
import {
  createUser,
  readUser,
  calculateDebtToIncomeRatio,
} from "./features/users/users.controller";

const app = express();

app.post("/users", createUser);
app.get("/users", readUser);
app.get("/users/debtToIncomeRatio/:userId", calculateDebtToIncomeRatio);

exports.app = functions.https.onRequest(app);

export {app};
