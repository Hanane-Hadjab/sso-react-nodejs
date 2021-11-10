import { NextFunction, Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "../types/user"


module.exports.isUserAuthenticated = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    if (req.user) {
      next();
    } else {
      res.status(401).send("You must login first!");
    }
  };
