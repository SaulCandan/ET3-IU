function comprobarLogin() {

	if(checkUser("txtusuario","errusuario") && checkPass("txtpassword","errpassword")) {
        encriptar("txtpassword");
        generarSessionId();
        return true;
	} else {
		return false;
	}

}

function login() {
	addActionControler(document.loginForm, "login", "AUTH");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#loginForm").serialize(),  
	}).done(function( response ) {
		if (response.ok == true) {
			window.location.href = "/web/Principal/principalAdministrador.html";
		} else {
	    	let idElementoList = ["txtusuario", "txtpassword"];
	    	resetearFormulario("loginForm", idElementoList);
			respuestaKOAjax(response.code);
			setLang(idioma);
			
		}
		
		deleteActionController();
			
	});
}