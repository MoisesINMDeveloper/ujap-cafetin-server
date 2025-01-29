import { Router } from "express";
import { createPaydateController } from "./controllers/createPaydate.controller";
import { deletePaydateController, getPaydateController, putPaydateController } from "./controllers";


const router = Router();

router.post('/', createPaydateController);
router.get('/', getPaydateController);
router.put('/:id', putPaydateController);
router.delete('/:id', deletePaydateController);
export default router;