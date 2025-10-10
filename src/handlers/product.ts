import Product from '../models/Product.model';
import { Request, Response} from 'express';

export const createProduct = async (req : Request, res : Response) => {
    try{
        const product = await Product.create(req.body)
        res.json({data: product})
    } catch(error){
        console.log(error)
    }  
}

export const getProducts = async (req: Request, res: Response) => {
    try{
        const products = await Product.findAll({
            order: [['id', 'ASC']]
        })
        res.json({data: products})
    } catch(error) {
        console.log(error)
    }
}

export const getProductByID = async (req: Request, res: Response) => {
    try{
        const product = await Product.findByPk(req.params.id)

        if(!product) {
            return res.status(404).json({error: 'El producto no existe.'})
        }

        res.json({data: product})
    } catch(error){
        console.log(error)
    }
}

export const editProductByID = async (req: Request, res: Response) => {
    try{

        const productByID = await Product.findByPk(req.params.id)

        if(!productByID) {
            return res.status(404).json({error: 'El producto no existe.'})
        }

        const product = await Product.update(
            req.body, 
            {
                where: {id: req.params.id}
            }
        )

        res.json({data: 'El producto se ha editado correctamente.'})

    } catch(error){
        console.log(error)
    }
}

export const deleteProductByID = async (req: Request, res: Response) => {
    try{
        const productByID = await Product.findByPk(req.params.id)

        if(!productByID) {
            return res.status(404).json({error: 'El producto no existe.'})
        }

        await Product.destroy({
            where: {id: req.params.id}
        })

        res.json({data: 'El producto se ha eliminado correctamente.'})
    } catch(error){
        console.log(error)
    }
}               