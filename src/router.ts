import { createProduct, deleteProductByID, editProductByID, getProductByID, getProducts } from "./handlers/product";
import { handleInputErrors } from "./middleware";
import { body, param } from "express-validator";
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

router.get('/',
    getProducts
);

router.get('/:id',
    param('id').isNumeric().withMessage('El id debe ser numerico.'),
    handleInputErrors,
    getProductByID
);

router.put('/:id',
    param('id').isNumeric().withMessage('El id debe ser numerico.'),
    body('name').notEmpty().withMessage('El nombre del producto no puede ir vacio.'),
    body('price').isNumeric().withMessage('El precio debe ser numerico.'),
    body('price').notEmpty().withMessage('El producto debe tener un precio.'),
    body('price').custom(value => value >= 0).withMessage('El producto debe ser mayor o igual a cero.'),
    body('abailability').isBoolean().withMessage('La disponibilidad debe ser ingresada.'),
    handleInputErrors,
    editProductByID
);

router.delete('/:id', 
    param('id').isNumeric().withMessage('El id debe ser numerico.'),
    handleInputErrors,
    deleteProductByID
)

export default router