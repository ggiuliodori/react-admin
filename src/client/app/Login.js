import React,{useState} from 'react';
import {Link} from 'react-router-dom';



const Login = () => {

    const [usuario,setUsuario]=useState({
        name:'',
        password:''
    });

    const {name,password}=usuario;

    const onChange = e => {
        setUsuario({
            ...usuario, [e.target.name]:e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1 className='titulo-login'>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='name'>User</label>
                        <input
                            type='name'
                            id='name'
                            name='user'
                            value={name}
                            placeholder='Your user name'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Your password'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario'
                            value='Go sesion'
                        />
                    </div>
                </form>
                <Link to={'new-user'} className='enlace-cuenta'>
                    New user
                </Link>
            </div>
        </div>
    );
}
 
export default Login;