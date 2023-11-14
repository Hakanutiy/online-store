import Router from 'express'
import PostController from "./ProductController.js";
const router = new Router

router.post('/products', PostController.create)
router.get('/products', PostController.getAll)
router.get('/products/:id', PostController.getOne)

router.delete('/products/:id', PostController.delete)
router.put('/products', PostController.update)

export default router