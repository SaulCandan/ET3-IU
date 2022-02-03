function Registrar(){
    if(ComprobarRegistro()){
        encriptar("txtPassword");
        encriptar("txtPassword2");
        RegistroBack();
    }
}

function ComprobarRegistro(){
    var formRegistro;
    var formAcceso;
    if(checkName("txtNombre","errorFormatoName") && checkSurname("txtApellidos","errorFormatoApell") && checkDni("txtDni","errorFormatoDni") && 
        checkFechaNormal("txtFechaNac","errFechaNacimiento") && checkDirre("txtDireccion","errorFormatoDirr") && checkPhone("txtTelefono","errorFormatoPhone") &&
         checkEmail("txtEmail","errorFormatoEmail") && checkPhoto("fotoPersona","errorFormatoPhoto")){
        var formRegistro=true;
    }
    if(checkUser("txtUsuario","errorFormatoUser") && checkPass("txtPassword","errorFormatoPass") && checkPass2('txtPassword','txtPassword2',"errorFormatoPass2")){
        var formAcceso=true;
    }
    return formRegistro && formAcceso;
}

function RegistroBack(){
    addActionControler(document.RegistroForm, "registrar", "auth");
	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#RegistroForm").serialize(),  
        
	}).done(function( response ) {
		if (response.ok == true) {
			window.location.href = "/index.html";
		} else {
            respuestaKOAjax(response.code);
		}
		
		deleteActionController();
			
	});

}

