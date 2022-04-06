const  mongoose= require("mongoose")
const { Schema } = mongoose;

const User = new Schema({    
    nombre: String,        
    apellido: String,
    username: String,        
    password: String,
    rol: String
})

module.exports = mongoose.model('User',User);