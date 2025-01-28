import { Router } from "express";
import { createPaydateController, deletePaydateController, getPaydateController, putPaydateController } from "./controllers";
import { authenticatedReq } from "../../middleware/auth.middleware";

const router = Router();

router.post('/', authenticatedReq, createPaydateController);
router.get('/', getPaydateController);
router.put('/:id',authenticatedReq, putPaydateController, );
router.delete('/:id',authenticatedReq,deletePaydateController);
export default router;