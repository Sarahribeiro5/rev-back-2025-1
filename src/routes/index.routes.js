import { Router } from "express";
import studentsRouter from "./students.routes.js";
import usersRouter from "./users.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).send({ message: "Vai Corinthians!" });
});

router.use("/students", studentsRouter);
router.use("/users", usersRouter)

export { router };