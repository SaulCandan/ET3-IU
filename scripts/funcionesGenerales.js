/*Funcionoes Básicas de comprobación de inputs*/


/*Función para comprobar lel nombre de usuario*/
function checkUser(id, errid) {

    if (checkNotEmpty(id, errid, "usuarioLogin") && checkSize(id, 45, 3, errid, "usuarioLogin") && checkFormat(id, errid, "usuarioLogin")) {
        validacionOK(id, errid);
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}

/*FUnción para comprobar la contraseña*/
function checkPass(id, errid) {

    if (checkNotEmpty(id, errid, "passLogin") && checkSize(id, 45, 3, errid, "passLogin") && checkFormat(id, errid, "passLogin")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}

function checkPass2(idElement1, idElement2, idElementErr2) {
    var valorPass = document.getElementById(idElement1).value;
    var valorPass2 = document.getElementById(idElement2).value;
    var codigo = "";

    if (valorPass == valorPass2) {
        validacionOK(idElement2, idElementErr2);
        document.getElementById(idElementErr2).classList = '';
        return true;
    } else {
        validacionKO(idElement2, idElementErr2);
        document.getElementById(idElementErr2).classList = '';
        codigo = "02127";
        addCodeError(idElementErr2, codigo);
        return false;
    }

}
/*Función para comprobar el nombre*/
function checkName(id, errid) {

    if (checkNotEmpty(id, errid, "nombre") && checkSize(id, 45, 3, errid, "nombre") && checkFormat(id, errid, "name")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}
/*Función para comprobar el apellidos*/
function checkSurname(id, errid) {

    if (checkNotEmpty(id, errid, "nombre") && checkSize(id, 100, 3, errid, "surname") && checkFormat(id, errid, "surname")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}
/*Función para comprobar el dni*/
function checkDni(id, errid) {

    if (checkNotEmpty(id, errid, "dni") && checkSize(id, 9, 9, errid, "dni") && checkFormat(id, errid, "dni") && checkLetraDni(id, errid)) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}
/*Función para comprobar la direccion*/
function checkDirre(id, errid) {

    if (checkNotEmpty(id, errid, "direccion") && checkSize(id, 200, 3, errid, "direccion") && checkFormat(id, errid, "address")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}
/*Función para comprobar el telefóno*/
function checkPhone(id, errid) {

    if (checkNotEmpty(id, errid, "telefono") && checkSize(id, 9, 9, errid, "telefono") && checkFormat(id, errid, "phone")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}
/*Función para comprobar el email*/
function checkEmail(id, errid) {

    if (checkNotEmpty(id, errid, "email") && checkSize(id, 45, 11, errid, "email") && checkFormat(id, errid, "email")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}
/*FUnción para comprobar el campo de la foto de perfil*/
function checkPhoto(id, errid) {
    if (checkFileExtension(id, errid) && checkFileSize(id, errid, 209715200) && checkSize(id, 100, 5, errid, "photo")) { /*Máximo 20 MB pero puesto en B*/
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }


}
//Función que valida si el archivo enviado como curriculum es valido
function checkCurriculum(id, errid) {
    if (checkFileExtensionCurriculum(id, errid) && checkSize(id, 200, 5, errid, "Curriculum") /*&& checkFormat(id,errid, "Curriculum")*/ ) { /*NO ME SALE YA OSTIA TONTO JAVASCRIPT*/
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }


} //Función que valida el IBAN
function checkIban(id, errid) {
    if (checkNotEmpty(id, errid, "iban") && checkSize(id, 24, 24, errid, "iban") && checkFormat(id, errid, "iban")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}

function checkDescription(id, errid) {

    if (checkNotEmpty(id, errid, "descripcion") && checkSize(id, 200, 20, errid, "descripcion") && checkFormat(id, errid, "Descripcion")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }

}

function checkPrecio(id, errid) {
    if (checkNotEmpty(id, errid, "precio") && checkFormat(id, errid, "precio")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}

function checkNumPlazas(id, errid) {
    if (checkNotEmpty(id, errid, "plazas") && checkNumberRange(id, errid, 1, 40) && checkFormat(id, errid, "plazas")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}


function checkColor(id, errid) {
    if (checkNotEmpty(id, errid, "color") && checkSize(id, 7, 7, errid, "color") && checkFormat(id, errid, "color")) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}
function checkFechaNormal(id, errid) {
    if (checkFechaNosuperiorActual(id,errid)) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}
function checkFechaEspecial(id, errid, campo) {
    if (checkFechaNosuperiorActual(id,errid) && checkFechaNoAnteriorAOtra(id, errid,campo) ) {
        validacionOK(id, errid)
        return true;
    } else {
        validacionKO(id, errid);
        return false;
    }
}



/*FUncion que mira si el campo es vacío*/
function checkNotEmpty(idElement, idElementErr, campo) {

    var codigo = "";
    var valor = document.getElementById(idElement).value;
    var longitud = document.getElementById(idElement).value.length;

    if ((valor == null) || (longitud == 0)) {
        switch (campo) {
            case 'usuarioLogin':
                codigo = "02110";
                break;
            case 'passLogin':
                codigo = "02113"
                break;
            case 'nombre':
                codigo = "02110"
                break;
            case 'dni':
                codigo = "02129"
                break;
            case 'email':
                codigo = "02119"
                break;
            case 'direccion':
                codigo = "02131"
                break;
            case 'telefono':
                codigo = "02134"
                break;
            case 'iban':
                codigo = "02144"
                break;
            case 'descripcion':
                codigo = "02146"
                break;
            case 'precio':
                codigo = "02149"
                break;
            case 'plazas':
                codigo = "02150"
                break;
            case 'color':
                codigo = "02152"
                break;
        }
        document.getElementById(idElementErr).classList = '';
        addCodeError(idElementErr, codigo);
        return false;
    } else {
        document.getElementById(idElementErr).classList = '';
        return true;
    }
}

function addCodeError(idElementoError, codigo) {

    var idioma = getCookie('lang');

    $("#" + idElementoError).removeClass();
    $("#" + idElementoError).addClass(codigo);

    setLang(idioma);

}
/*FUnción para comprobar que el formato es correcto*/
function checkSize(idElement, sizeMax, sizeMin, idElementErr, campo) {

    var codigo = "";
    var longitud = document.getElementById(idElement).value.length;

    if (longitud > sizeMax) {
        switch (campo) {
            case 'usuarioLogin':
                codigo = "02111";
                break;
            case 'passLogin':
                codigo = "02114"
                break;
            case 'nombre':
                codigo = "02111"
                break;
            case 'surname':
                codigo = "02128"
                break;
            case 'dni':
                codigo = "02129"
                break;
            case 'direccion':
                codigo = "02132"
                break;
            case 'telefono':
                codigo = "02134"
                break;
            case 'email':
                codigo = "02120"
                break;
            case 'photo':
                codigo = "02139"
                break;
            case 'Curriculum':
                codigo = "02142"
                break;
            case 'iban':
                codigo = "02144"
                break;
            case 'descripcion':
                codigo = "02147"
                break;
            case 'color':
                codigo = "02152"
                break;
        }
        document.getElementById(idElementErr).classList = '';
        addCodeError(idElementErr, codigo);
        return false;
    } else if (longitud < sizeMin) {
        switch (campo) {
            case 'usuarioLogin':
                codigo = "02110";
                break;
            case 'passLogin':
                codigo = "02113"
                break;
            case 'nombre':
                codigo = "02110"
                break;
            case 'surname':
                codigo = "02116"
                break;
            case 'dni':
                codigo = "02129"
                break;
            case 'direccion':
                codigo = "02131"
                break;
            case 'telefono':
                codigo = "02134"
                break;
            case 'email':
                codigo = "02119"
                break;
            case 'photo':
                codigo = "02138"
                break;
            case 'Curriculum':
                codigo = "02141"
                break;
            case 'iban':
                codigo = "02144"
                break;
            case 'descripcion':
                codigo = "02146"
                break;
            case 'color':
                codigo = "02152"
                break;
        }
        document.getElementById(idElementErr).classList = '';
        addCodeError(idElementErr, codigo);
        return false;
    } else {
        document.getElementById(idElementErr).classList = '';
        return true;
    }
}

/*Función que compueba si el valor es un numero comprendido entre un rango dado*/
function checkNumberRange(idElement, idElementErr, minValue, maxValue) {
    var codigo = "";
    var valor = document.getElementById(idElement).value;
    if ((valor > maxValue) || (valor < minValue)) {
        codigo = "02151"
        document.getElementById(idElementErr).classList = '';
        addCodeError(idElementErr, codigo);
        return false;
    } else {
        document.getElementById(idElementErr).classList = '';
        return true;
    }
}

function checkFormat(idElement, idElementErr, campo) {

    var codigo = "";

    var exprUserPass = /^[a-zA-Z0-9\u00f1\u00d1]+$/;
    var exprTelf = /^[0-9]+$/;
    var exprNameSurname = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    var exprAddress = /^[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s]+$/;
    var exprEmail = /^\w+@\w+\.[a-z]+$/;
    var exprDni = /^[0-9]{8}[a-zA-Z]{1}/;
    var exprPrecio = /^(\d{1,4})\.*(\d{0,2})$/;
    var exprIBAN = /[A-Z]{2}[0-9]{22}$/;
    var exprColor = /^#([A-Fa-f0-9]{6})$/;
    var exprArchivo = /^[a-zA-Z0-9]+\.[a-z]+$/;
    var exprPlazas = /^[0-9]{1,2}$/;

    var valor = document.getElementById(idElement).value;
    var name = document.getElementById(idElement).name;

    if (campo == "usuarioLogin") {

        if (exprUserPass.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02112";
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "passLogin") {

        if (exprUserPass.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02115"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }

    } else if (campo == "phone") {

        if (exprTelf.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02135"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "plazas") {

        if (exprPlazas.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02151"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    }else if (campo == "name") {

        if (exprNameSurname.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02118"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }

    } else if (campo == "surname") {

        if (exprNameSurname.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02118"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "Descripcion") {

        if (exprNameSurname.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02148"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "email") {

        if (exprEmail.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02121"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "dni") {

        if (exprDni.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02130"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "address") {

        if (exprAddress.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02133"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "precio") {

        if (exprPrecio.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02149"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "iban") {

        if (exprIBAN.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02145"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "color") {

        if (exprColor.test(valor)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02153"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else if (campo == "Curriculum") {

        if (exprArchivo.test(name)) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            codigo = "02143"
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }
    } else {
        return false;
    }
}

function checkFileExtension(idElement, idElementErr) {
    var codigo = "";
    var name = document.getElementById(idElement).value;
    extensionOK = new Array(".jpg", ".png");
    var extension = (name.substring(name.lastIndexOf("."))).toLowerCase();

    for (var i = 0; i < extensionOK.length; i++) {
        if (extensionOK[i] == extension) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            continue;
        }
    }
    codigo = "02136";
    document.getElementById(idElementErr).classList = '';
    addCodeError(idElementErr, codigo);
    return false;
}

function checkFileExtensionCurriculum(idElement, idElementErr) {
    var codigo = "";
    var name = document.getElementById(idElement).value;
    extensionOK = new Array(".pdf");
    var extension = (name.substring(name.lastIndexOf("."))).toLowerCase();

    for (var i = 0; i < extensionOK.length; i++) {
        if (extensionOK[i] == extension) {
            document.getElementById(idElementErr).classList = '';
            return true;
        } else {
            continue;
        }
    }
    codigo = "02140";
    document.getElementById(idElementErr).classList = '';
    addCodeError(idElementErr, codigo);
    return false;
}

function checkFileSize(idElement, idElementErr, maxSize) {

    var input = document.getElementById(idElement);
    var file = input.files[0];
    var size = file.size;

    if (!input) {
        return true;
    } else if (!input.files) {
        return true;
    } else if (!input.files[0]) {
        return true;
    } else if (size > maxSize) {
        codigo = "02137";
        document.getElementById(idElementErr).classList = '';
        addCodeError(idElementErr, codigo);
        return false;
    } else {
        return true;
    }
}

function checkLetraDni(idElement, idElementErr) {

    var valor = document.getElementById(idElement).value;
    var numero = valor.substr(0, valor.length - 1);
    var letra = valor.substr(valor.length - 1, 1);
    var letrasArray = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var modulo = numero % 23;
    var letraCorrecta = letrasArray.substring(modulo, modulo + 1);

    if (letraCorrecta == letra.toUpperCase()) {
        document.getElementById(idElementErr).classList = '';
        return true;
    } else {
        codigo = "02130";
        document.getElementById(idElementErr).classList = '';
        addCodeError(idElementErr, codigo);
        return false;
    }

}

function checkFechaNosuperiorActual(idElement, idElementErr){

    var valor = document.getElementById(idElement).value;
    const dateArray = valor.split('/',3); 
    var fecha =  new Date(dateArray[2],dateArray[1]-1,dateArray[0]);
    if(fecha > new Date()){
        codigo = '02170';
        document.getElementById(idElementErr).classList = '';
        addCodeError(idElementErr, codigo);
        return false;
    }else{
        document.getElementById(idElementErr).classList = '';
        return true;
    }
}
function checkFechaNoAnteriorAOtra(idElement, idElementErr,campo){

    var valor = document.getElementById(idElement).value;
    var fechaSolicitudInscripcion = document.getElementById("txtfechasolicitudinscripcion").value;
    var fechaPagoInscripcion = document.getElementById("txtfechapagoinscripcion").value;
    if(campo == "fechaPago"){
        if(valor <= fechaSolicitudInscripcion){
            codigo = '02171';
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }else{
            document.getElementById(idElementErr).classList = '';
        return true;
        }
    }else if(campo == "fechaAceptacion"){
        if(valor <= fechaPagoInscripcion){
            codigo = '02172';
            document.getElementById(idElementErr).classList = '';
            addCodeError(idElementErr, codigo);
            return false;
        }else{
            document.getElementById(idElementErr).classList = '';
        return true;
        }
    }
}
/**Función que no muestra mensaje de error y colorea el borde del input del formulario de verde*/
function validacionOK(idElement, idElementError) {

    document.getElementById(idElementError).style.display = "none";
    document.getElementById(idElement).style.borderColor = "#00e600";
}

/**Función que muestra el mensaje de error y colorea el borde del input del formulario de rojo*/
function validacionKO(idElement, idElementError) {
    document.getElementById(idElement).style.borderColor = "#ff0000";
    document.getElementById(idElementError).setAttribute('style', "");

}

function includeMenuAdministrador() {

    $('#menuAdministrador').html('');

    var menu = '<div class="menuAdministrador">' +
        '<ul>' +
        '<li>' +
        '<a href="" id="usuario">  </a>' +
        '<a href="/web/Principal/principalAdministrador.html"><img id="home" width="30" height="30" src="/images/home.png"/></a>' +
        '<a href="/web/Principal/cambiarPassword.html"><img width="30" height="30" src="/images/cambiarcontrasena.png"/></a>' +
        '<a onclick="desconectar()"><img width="30" height="30" src="/images/cerrarsesion.png"/></a>' + 
        '<div id="opcionesMenu">' + 
        '<a onclick="setLang(\'ES\')" id="es"><img id="esFoto" src="/images/espanol.png"/></a>' +
        '<a onclick="setLang(\'EN\')" id="en"><img id="enFoto" src="/images/ingles.png"/></a>' +
        '<a onclick="setLang(\'GA\')" id="ga"><img id="gaFoto" src="/images/gallego.png"/></a>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>';
    $('#menuAdministrador').append(menu);
}



function includeFooter() {

    $('#Footer').html('');

    var pie = '<div class="Footer"> IU 2021-2022' +
        '</div>';

    $('#Footer').append(pie);
}

function validaAutenticado() {

    crearformoculto('formularioAutenticacion', 'javascript:estaAutenticado()');

    addActionControler(document.formularioAutenticacion, "auth", "AUTH");

    document.formularioAutenticacion.submit();

}


function estaAutenticado() {

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    if (idSession == null) {
        errorAutenticado(idioma);
    } else {

        insertacampo(document.formularioAutenticacion, 'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formularioAutenticacion").serialize(),
        }).done(function(response) {
            if (response.ok == true) {
                document.getElementById("usuario").innerHTML = response.resource[0].LOGIN_USUARIO;
            } else {
                console.log("mal");
                errorAutenticado(idioma);
            }

            deleteActionController();
        });
    }

}

/*Función que muestra el error de acceso por no estar autenticado**/
function errorAutenticado(idioma) {
    setLang(idioma);
    document.getElementById("acceso-denegado").style.display = "block";
}

function expulsar(){
    document.getElementById("acceso-denegado").style.display = "none";
    window.location.href = '/index.html';
}


function generarSessionId() {

    var ahora = new Date();
    var idSession = ahora.getTime();

    setCookie('idSession', idSession, 1);

    insertacampo(document.loginForm, 'ID_SESSION', idSession);
}

function encriptar(idElemento) {

    document.getElementById(idElemento).value = hex_md5(document.getElementById(idElemento).value);
    return true;

}

function desconectar() {

    crearformoculto('formularioDesconectar', 'javascript:desconecta()');

    addActionControler(document.formularioDesconectar, "disconect", "AUTH");
    
    document.formularioDesconectar.submit();

}

/**Función para realizar la petición para desconectar al usuario*/
function desconecta() {

        var idioma = getCookie('lang');
        var idSession = getCookie('idSession');

    if (idSession == null){
        errorAutenticado(idioma);
    } else {
    
            insertacampo(document.formularioDesconectar,'ID_SESSION', idSession);

            $.ajax({
                method: "POST",
                url: "http://193.147.87.202/ET3_IU/noRest.php",
                data: $("#formularioDesconectar").serialize(),  
            }).done(function( response ) {       
                if (response.ok == true) {
                    window.location.href = '/index.html';
               }             
            });
        }
    
}
