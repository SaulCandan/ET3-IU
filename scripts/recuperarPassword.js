function comprobarCamposRecuperar(){

    if(checkUser("recuperarUser","errusuario") && checkEmail("recuperarEmail","errorFormatoEmail" )){
        addActionControler(document.recuperarForm, "recuperar_contrasena", "auth");
        eliminarcampo('ID_SESSION');
        document.recuperarForm.submit();
    }else{


    }

}
function recuperarContrasena(){

    var idioma = getCookie('lang');
    

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#recuperarForm").serialize(),  
        }).done(function( response ) { 

            if (response.ok == true) {
            
                
                respuestaOKAjax(response.code);

            } else { 
                
                respuestaKOAjax(response.code);
                
            }              
            
            deleteActionController(); 
        });
    }
