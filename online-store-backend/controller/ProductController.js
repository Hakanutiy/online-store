import Product from "../models/Product.js";
import ProductServices from "../services/ProductServices.js";


class ProductController {
    async create (req, res){
        try {
            const product = await ProductServices.create(req.body, req.files.image)
            console.log(req.files)
            res.json(product)

        }
        catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }
    async getAll(req, res){
        try {
        const product = await ProductServices.getAll()
            return res.json(product)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res){
        try {

            const product = await ProductServices.getOne(req.params.id)
            return res.json(product)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res){
        try {

            const product = await ProductServices.delete(req.params.id)
            return res.json(product)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res){
        try {

            const updatedProduct = await ProductServices.update(req.body)
            return res.json(updatedProduct)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new ProductController()