import React from 'react';
import './RegistrationForm.css';

function RegistrationFrom () {
    return (
        <div id="signupbox">
             <div id="encabezado">
                <img src="assets/getalent_logo.png" alt="getalent_logo" width="100px" height="100px"/>
                <h1>GET TALENT</h1>
                <h3>Crea una cuenta</h3>
             </div>
            <form action="" class="form_registro" id="form_registro">
                <input type="email" name="email" id="email" placeholder="Correo electronico" class="controls" required/> 
                <br/>
                <input type="password" name="password" id="password" placeholder="Contraseña" class="controls" required/> 
                <ul hidden c lass="criterios_password"> 
                    <li>Mínimo 6 máximo 20 caracteres alfanuméricos</li>
                     <li>Mínimo una mayúscula</li>
                    <li>Mínimo un caracter númerico</li>
                    <li>Mínimo un caracter especial (.-!?!)</li>
                    </ul>
                    <br/>
                    <input type="password" name="confirm_password id "confirm_password placeholder="Confirmacion de contraseña" class="controls" required/>
                    <br/>
                    <select name="user_type" id="user_type" class="controls"> 
                         <option value="solicitante">Solicitante</option>
                         <option value="empleador">Empleador</option>
                    </select>
                    <br/>

                    <input type="submit" name="submit" id="submit" value="Registrarme"/>
     
            </form>
        </div>







    );
}
export default RegistrationFrom; 