// MODELO
const User = require('../models/User')

//INICIAR SESION
exports.getData =async (request,response) =>{
    
    try {
        const user = await User.findOne({username: request.params.username ,password: request.params.password });

        if(user){
            response.status(200).json(user) 

        }else{

            response.status(204)
            response.send({Message:`Usuario y/o contraseña incorrecta`})
        }
             

    } catch (error) {
        response.status(204).send({Message:`No se pudo iniciar sesion correctamente`})
    }    
}

//REGISTRAR USUARIO
exports.insertData = async (request,response) =>{
    
    try {
        const user = new User(request.body)
        await user.save()

        response.status(200).send({Message:`Usuario registrado correctamente`})      

    } catch (error) {
        response.status(204).send({Message:`No se pudo registrar usuario correctamente`})
    }
}

