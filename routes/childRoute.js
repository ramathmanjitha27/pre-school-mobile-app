import express from "express";

import {
  registerChild,
  getAllChilds,
  getChildById,
  deleteChildById,
  editChildById,
} from "../controllers/childController.js";

let childRouter = express.Router();

childRouter.post("/save", registerChild);
childRouter.get("/", getAllChilds);
childRouter.get("/:childId", getChildById);
childRouter.delete("/:childId", deleteChildById);
childRouter.put("/childId", editChildById);

export default childRouter;
