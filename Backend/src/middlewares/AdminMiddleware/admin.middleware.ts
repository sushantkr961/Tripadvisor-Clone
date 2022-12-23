import { NextFunction, Request, Response } from "express";
import UserModel from "../../modules/User/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AdminController {
  static adminLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body;
      // Checking both if email & password are present
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          // Checking Both email and password are correct or not
          if (user.email === email && isMatch && user.role === "admin") {
            let token = jwt.sign(
              { userID: user?._id },
              process.env.JWT_SECRET_KEY || "",
              { expiresIn: "5d" }
            );
            res.status(200).send({
              Status: "Success",
              Message: "Admin Login Successfully",
              Token: token,
            });
          }
          // Checking either email or password is incorrect
          else {
            res.status(401).send({
              Status: "Failed",
              Message: "Not Allowed",
            });
          }
        }
        // Checking if user not registered,
        else {
          res
            .status(405)
            .send({ Status: "Failed", Message: "Admin not registered" });
        }
      }
      // Checking all fields are there in input
      else {
        res
          .status(406)
          .send({ Status: "Failed", Message: "All fields are required" });
      }
    } catch (err) {
      console.log(err);
      res.status(408).send({ Message: "Unable to Login" });
    }
  };
  static getAllUsers = async (req: Request, res: Response) => {
    const allUsers = await UserModel.find();
    try {
      res.status(200).send({ users: allUsers });
    } catch (err) {
      console.error;
      res.send("Some Error Occured");
    }
  };
  static getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.send(user);
  };
}

export default AdminController;
