"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDebtToIncomeRatio = exports.readUser = exports.createUser = void 0;
const data_validation_1 = require("../../utils/data-validation");
const users_model_1 = require("./users.model");
const firebase_1 = require("../../config/firebase");
const math_stuff_1 = require("../../utils/math-stuff");
const createUser = async (req, res) => {
    try {
        const user = firebase_1.db.collection("users").doc();
        const userObject = Object.assign({ id: user.id }, req.body);
        const validationError = await (0, data_validation_1.validateSchema)(users_model_1.schema, req.body);
        if (validationError) {
            return res.status(200).send(validationError);
        }
        user.set(userObject);
        return res.status(200).send({
            message: "Success!",
            data: userObject,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
            error: error.code,
        });
    }
};
exports.createUser = createUser;
const readUser = async (req, res) => {
    try {
        const allUsers = [];
        const querySnapshot = await firebase_1.db.collection("users").get();
        querySnapshot.forEach((doc) => {
            allUsers.push(doc.data());
        });
        res.status(200).send({
            message: "Success!",
            data: allUsers,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            error: error.code,
        });
    }
};
exports.readUser = readUser;
const calculateDebtToIncomeRatio = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = (await firebase_1.db.collection("users").doc(userId).get()).data();
        const result = (0, math_stuff_1.debtToIncomeRatio)(user);
        return res.status(200).send({
            message: "Success!",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
            error: error.code,
        });
    }
};
exports.calculateDebtToIncomeRatio = calculateDebtToIncomeRatio;
//# sourceMappingURL=users.controller.js.map