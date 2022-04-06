// MODELOS 
const Product = require('../models/Product')

// PRODUCTOS
exports.getAllProduct =async (request,response) =>{

    try {
        const products = await Product.find();

        response.status(200).json(products)


    } catch (error) {
        response.status(204).send({Message:`No se pudo obtener los productos correctamente.`})
    }

    
}

// PRODUCTO POR ID
exports.getProduct =async (request,response) =>{

    try {
        
        const product = await Product.findOne({_id: request.params.id , });
        

        if(product){
            response.status(200).json(product)
        }
        else{
            
            response.status(204).send({Message:`El producto id ${request.params.id } es inexistente.`})
        }

    } catch (error) {
        response.status(200).send({Message:`No se pudo obtener el producto id ${request.params.id }.`})
    }
}

// PRODUCTO POR LOCAL
exports.getProductLocal =async (request,response) =>{

    try {
        const products = await Product.find({local: request.params.local });


        if(products){
            response.status(200).json(products)
        }
        else{
            
            response.status(200).send({Message:`No existen productos cargados del comercio ${request.params.local}.`})
        }



    } catch (error) {
        response.status(200).send({Message:`No se pudo obtener los productos de ${request.params.local} correctamente.`})
    }

}

// ACTUALIZAR PRODUCTO
exports.updateProduct =async (request,response) =>{
      
     try {
        console.log('request.params.id')
        console.log(request.params.id)
        console.log('request.body')
        console.log(request.body)

        await Product.findByIdAndUpdate(request.params.id, request.body);
        console.log('Actualizado')
        response.status(200).send({Message:`Producto actualizado correctamente`})      

    } catch (error) {
        console.log('Error')
         response.status(204).send({Message:`No se pudo actualizar el producto correctamente.`})
    }
    
}

// CREAR PRODUCTO
exports.createProduct= async (request,response) =>{
        
    try {
        
        const product = new Product(request.body)
        await product.save()
        
        response.status(200).send({Message:`Producto  registrado correctamente correctamente`})      

    } catch (error) {
        console.log('Error al guardar')
        response.status(204).send({Message:`No se pudo registrar el producto correctamente.`})
    }
}

// ELIMINAR PRODUCTO 
exports.deleteProduct =async (request,response) =>{   

    try {
        await Product.findByIdAndRemove(request.params.id);

        response.status(200).send({Message:`Producto eliminado correctamente correctamente`})      

    } catch (error) {
        response.status(204).send({Message:`No se pudo eliminado el producto correctamente.`})
    }
}






