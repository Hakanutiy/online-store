import Product from "../models/Product.js";
import { fileURLToPath } from 'url';
import * as path from "path";
import * as fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class ProductServices{


    async create(product, picture) {
        const uploadDir = 'uploads'; // Без __dirname, чтобы путь был относительный
        const filePath = path.join(uploadDir, picture.name); // "uploads/файл.jpg"

// Проверяем, есть ли папка, если нет — создаем
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

// Перемещаем файл
        await picture.mv(filePath);

// В БД сохраняем ТОЛЬКО относительный путь
        const createdProduct = await Product.create({ ...product, image: filePath });

        return createdProduct;

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