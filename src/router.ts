import { body } from "express-validator";
import { createProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";
import { Router } from "express";

const router = Router();

//Routing
router.post('/',
    body('name').notEmpty().withMessage('El nombre del producto no puede ir vacio.'),
    body('price').isNumeric().withMessage('El precio debe ser numerico.'),
    body('price').notEmpty().withMessage('El producto debe tener un precio.'),
    body('price').custom(value => value >= 0).withMessage('El producto debe ser mayor o igual a cero.'),
    handleInputErrors, 
    createProduct
)

export default router