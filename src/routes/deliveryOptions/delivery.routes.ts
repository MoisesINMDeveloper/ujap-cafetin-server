import { Router } from "express";
import { authenticatedReq } from "../../middleware/auth.middleware";
import { createDeliveryOptionController, deleteDeliveryController, getDeliveryOptionsController, putDeliveryController } from "./controllers";


const router = Router();

router.post('/', authenticatedReq, createDeliveryOptionController);
router.get('/', getDeliveryOptionsController);
router.put('/:id', authenticatedReq, putDeliveryController);
router.delete('/:id', authenticatedReq, deleteDeliveryController);
export default router;