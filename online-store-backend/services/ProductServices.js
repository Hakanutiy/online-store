import Product from "../models/Product.js";
import FileServices from "./fileServices.js";

class ProductServices{
    async create (product, picture){
        const fileName = FileServices.saveFile(picture)
            const createdProduct = await Product.create({...product, image: fileName});
            return createdProduct


    }
    async getAll(product){

            const products = await Product.find(product)
            return products


    }
    async getOne(id){


            if (!id){
                throw  new Error('Invalid id')
            }
            const product = await Product.findById(id)
            return product

    }
    async delete(id){


            if (!id){
                throw new Error('Invalid id')
            }
            const product = await Product.findByIdAndDelete(id)
            return product


    }
    async update(product){


            if (!product._id){
                throw new Error('Invalid id')

            }
            const updatedProduct = await Product.findById(product._id, product, {new: true})
            return updatedProduct


    }
}
export default new ProductServices()