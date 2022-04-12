import {
  Request,
  Response,
} from "express";
import {validateSchema} from "../../utils/data-validation";
import {schema} from "./users.model";
import {
  db,
} from "../../config/firebase";
import {debtToIncomeRatio} from "../../utils/math-stuff";

type UserType = {
  name: string,
  description: string,
}

const createUser = async (
    req: Request,
    res: Response
) => {
  try {
    const user = db.collection("users").doc();
    const userObject = {
      id: user.id,
      ...req.body,
    };

    const validationError = await validateSchema(schema, req.body);

    if (validationError) {
      return res.status(200).send(validationError);
    }

    user.set(userObject);

    return res.status(200).send({
      message: "Success!",
      data: userObject,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      error: error.code,
    });
  }
};

const readUser = async (
    req: Request,
    res: Response
) => {
  try {
    const allUsers: UserType[] = [];
    const querySnapshot = await db.collection("users").get();

    querySnapshot.forEach((doc: any) => {
      allUsers.push(doc.data());
    });

    res.status(200).send({
      message: "Success!",
      data: allUsers,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error.code,
    });
  }
};

const calculateDebtToIncomeRatio = async (
    req: Request,
    res: Response
) => {
  const {userId} = req.params;

  try {
    const user = (await db.collection("users").doc(userId).get()).data();
    const result = debtToIncomeRatio(user);

    return res.status(200).send({
      message: "Success!",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      error: error.code,
    });
  }
};

export {
  createUser,
  readUser,
  calculateDebtToIncomeRatio,
};

