import { createProduct } from "./handlers/product";
import { Router } from "express";

const router = Router();

//Routing
router.post('/', createProduct)

export default router