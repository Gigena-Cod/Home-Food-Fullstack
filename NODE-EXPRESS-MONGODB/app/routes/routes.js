const express = require('express');
const router = express.Router();
const cors = require("cors");

// CORS 
router.use(cors());

// CREATE APPLICATION/X-WWW-FORM-URLENCODED PARSER
router.use(express.json())
router.use(express.urlencoded({extended:false}))


// CONTROLLERS 
const UserController = require('../controllers/user')
const ProductController = require('../controllers/product')


// USUARIOS 

//OBTENER UN USUARIO POR USERNAME Y PASSWORD
router.get('/login/:username/:password',UserController.getData)

// REGISTRAR USUARIO
router.post('/register',UserController.insertData)

// PRODUCTOS

//OBTENER PRODUCTOS
router.get('/productos',ProductController.getAllProduct)

//OBTENER UN PRODUCTO POR ID
router.get('/producto/:id',ProductController.getProduct)

//OBTENER UN PRODUCTOS POR LOCAL
router.get('/productos/:local',ProductController.getProductLocal)

// REGISTRAR PRODUCTO
router.post('/new-product',ProductController.createProduct)

// ELIMINAR PRODUCTO
router.delete('/delete/:id',ProductController.deleteProduct)

// ACTUALIZAR PRODUCTO
router.put('/updated/:id',ProductController.updateProduct)


module.exports = router;