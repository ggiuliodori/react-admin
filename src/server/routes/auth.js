//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');

//Autenticar usuario
//api/auth
router.post('/auth', 
    [
        check('name','Agregar un usuario').not().isEmpty(),
        check('password','Agregar una contraseña').not().isEmpty()
        //esos check en teoria se validan antes desde la ui..entonces nunca deberian ser true
    ],
    authController.autenticarUsuario
);
module.exports=router;