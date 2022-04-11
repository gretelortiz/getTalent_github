import React from 'react'; 
import './LoginForm.css';

function LoginForm () {
return (

<div id="loginbox">
        <div id="encabezado">
            <img src="assets/getalent_logo.png" alt="getalent_logo" width="100px" height="100px"/>
            <h1>GET TALENT</h1>
            <h3>Inicia Sesión</h3>
        </div>
        <form action="" id="loginform">
            <input type="email" name="email" id="email" placeholder="Correo electronico" required/>
            <br/>
            <input type="password" name="password" id="password" placeholder="Contraseña" required/>
            <p><a href="forgotpassword">¿Olvidaste tu contraseña?</a></p>
            <br/>
            <input type="submit" name="login" id="login"/>
        </form>
        <p><a href="register">¿No tienes una cuenta?</a></p>
    </div>










    );
}

export default LoginForm;