const userlogin = require('../models/User');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

exports.autenticarUsuario = async (req,res) => {
    const errores= validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }
    const {name,password}=req.body;
    try {
        let usuario = await userlogin.findOne({name});
        if(!usuario){
            return res.status(400).json({msg: 'El usuario no existe'});
        }
        const passCorrecto = await bcryptjs.compare(password,usuario.password);
        if(!passCorrecto){
            return res.status(400).json({msg: 'Password incorrecto'});
        }
        
        //me falta enviar validacion: ok - not ok
        );
    } 
    catch (error) {
        console.log(error);    
    }
}