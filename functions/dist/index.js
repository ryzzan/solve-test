"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const functions = require("firebase-functions");
const express = require("express");
const users_controller_1 = require("./features/users/users.controller");
const app = express();
exports.app = app;
app.post("/users", users_controller_1.createUser);
app.get("/users", users_controller_1.readUser);
app.get("/users/debtToIncomeRatio/:userId", users_controller_1.calculateDebtToIncomeRatio);
exports.app = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map