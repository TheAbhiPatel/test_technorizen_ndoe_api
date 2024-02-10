import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  try {
    console.log("---------> Gobal catched error Start <---------");
    console.log("Gobal catched error :: ", err);
    console.log("---------> Gobal catched error End !! <---------");
    res.status(500).json({ success: false, message: "Something went wrong." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
