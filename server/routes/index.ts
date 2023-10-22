import { Router } from "express";
import authRoute from "./auth.route";
import todoRoute from "./todo.route";

const router = Router();

export default (): Router => {
  authRoute(router);
  todoRoute(router);
  return router;
};