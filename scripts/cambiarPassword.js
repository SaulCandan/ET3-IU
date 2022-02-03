function comprobarFormularioCambiarPassword(){
   
    if(checkUser("txtUsuarioCP" , "errorFormatoUser" ) && checkPass("txtContrasenaAntiguaCP" , "errorFormatoPass") && checkPass("txtContrasenaNuevaCP" , "errorFormatoPass2")){
        encriptar("txtContrasenaAntiguaCP");
        encriptar("txtContrasenaNuevaCP");
        contrasenaAntiguaCorrecta();
    }
}

function contrasenaAntiguaCorrecta(){
    crearformoculto('formContrasena', 'javascript:obtenerUsuario()');

    addActionControler(document.formContrasena, "search", "usuario");
    insertacampo(document.formContrasena, 'usuario', document.getElementById("txtUsuarioCP").value);
    eliminarcampo('ID_SESSION');
    document.formContrasena.submit();
}

function obtenerUsuario(){

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');

    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {

        insertacampo(document.formContrasena, 'ID_SESSION', idSession);
        
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formContrasena").serialize(),  
        }).done(function( response ) { 
            
            if (response.ok == true) {
                
                    crearformoculto('formCambioContrasena', '');
                    addActionControler(document.formCambioContrasena, "cambiar_contrasena", "usuario");
                    insertacampo(document.formCambioContrasena, 'usuario', document.getElementById("txtUsuarioCP").value);
                    insertacampo(document.formCambioContrasena, 'contrasena', document.getElementById("txtContrasenaAntiguaCP").value);
                    insertacampo(document.formCambioContrasena, 'contrasenanueva', document.getElementById("txtContrasenaNuevaCP").value);
                    insertacampo(document.formCambioContrasena, 'id',response.resource[0].id);
                    insertacampo(document.formCambioContrasena, 'dni_usuario',response.resource[0].dni_usuario);
                    insertacampo(document.formCambioContrasena, 'id_grupo',response.resource[0].id_grupo);
                    insertacampo(document.formCambioContrasena, 'borrado_usuario',response.resource[0].borrado_usuario);
                    eliminarcampo('ID_SESSION');

                    var idioma = getCookie('lang');
                    var idSession = getCookie('idSession');

                    if (idSession == null) {
                        errorAutenticado("02109", idioma);
                    } else {

                        insertacampo(document.formCambioContrasena, 'ID_SESSION', idSession);
                        
                        $.ajax({
                            method: "POST",
                            url: "http://193.147.87.202/ET3_IU/noRest.php",
                            data: $("#formCambioContrasena").serialize(),  
                        }).done(function( response ) { 

                            if (response.ok == true) {
                                respuestaOKAjax(response.code);
                            } else { 
                                
                                respuestaKOAjax(response.code);
                                
                            }              
                            
                            deleteActionController();
                        });
                    }

                setLang(idioma);
            } else { 
                respuestaKOAjax(response.code);
            }              
            
            deleteActionController();
        });
    }


}

