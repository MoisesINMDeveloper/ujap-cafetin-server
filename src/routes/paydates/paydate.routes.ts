import { Router } from "express";
import { createPaydateController } from "./controllers/createPaydate.controller";


const router = Router();

router.post('/', createPaydateController);
export default router;