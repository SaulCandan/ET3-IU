/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFilapersona(fila) {

    let atributosFunciones = ["'" +
        fila.dni_persona + "'", "'" +
        fila.nombre_persona + "'", "'" +
        fila.apellidos_persona + "'", "'" +
        fila.fechaNacimiento_persona + "'", "'" +
        fila.direccion_persona + "'", "'" +
        fila.telefono_persona + "'", "'" +
        fila.email_persona + "'", "'" +
        fila.foto_persona + "'", "'" +
        fila.esCeliaco_persona + "'", "'" +
        fila.borrado_persona +
        "'"
    ];

    var celdaAccionesDetalle = '<div><a onclick="showDetallePersona(' + atributosFunciones +
        ')"> <img src="/images/consult.png" width="20" height="20" alt="Consultar"/></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarPersona(' + atributosFunciones +
        ')"> <img src="/images/edit.png" width="20" height="20" alt="Editar"/></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarPersona(' + atributosFunciones +
        ')"> <img src="/images/delete.png" width="20" height="20" alt="Eliminar"/></a></div>';;

    var rutauploadimages = "http://193.147.87.202/ET3_IU/noRest.php";
    rutauploadimages = rutauploadimages.substring(29, 0);
    rutauploadimages = rutauploadimages + 'images/';

    var filaTabla = '<tr> <td>' + fila.dni_persona +
        '</td> <td>' + fila.nombre_persona +
        '</td> <td>' + fila.apellidos_persona +
        '</td> <td>' + fila.email_persona +
        '</td> <td> <a href=\'' + rutauploadimages + fila.foto_persona + '\'>' + fila.foto_persona + '</a>' +
        '</td> <td>' + celdaAccionesDetalle +
        '</td> <td>' + celdaAccionesEditar +
        '</td> <td>' + celdaAccionesEliminar +
        '</td> </tr>';

    return filaTabla;
}

function getLisPersonas() {

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');

    crearformoculto("formulariolistarpersonas", "");

    insertacampo(document.formulariolistarpersonas, 'ID_SESSION', idSession);
    insertacampo(document.formulariolistarpersonas, 'controlador', 'persona');
    insertacampo(document.formulariolistarpersonas, 'action', 'buscar');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formulariolistarpersonas").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosPersonas").html("");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFilapersona(response.resource[i]);
                $("#datosPersonas").append(tr);
            }
            setLang(idioma);
        } else {
            respuestaKOAjax(response.code);
        }

        deleteActionController();
    });
}



function addpersona() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericopersona, 'ID_SESSION', idSession);
    addActionControler(document.formgenericopersona, "add", "persona");

    var idioma = getCookie('lang');

    var formdata = $("#formgenericopersona").serialize();
    var file = $("#txtsubefotopersona")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);
    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: datos,
        contentType: false,
        processData: false,
    }).done(function(response) {
        if (response.ok == true) {
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }
        setLang(idioma);

        resetearformulariopersona();

        getLisPersonas();

    });

}

//
// Funcion para modificar un formulario generico para editar un usuario
//
function showInsertarPersona() {

    // se resetea todo el formulario generico
    resetearformulariopersona();
    limpiarMensajeError();
    getLisPersonas()

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericopersona").attr('action', 'javascript:addpersona();');
    $("#formgenericopersona").attr('onsubmit' , 'return comprobarpersona();');

    // eliminar input no necesario
    $("#labeltxtfotopersona").attr('style', 'display:none');
    $("#txtfotopersona").attr('style', 'display:none');
    $("#txtfotopersona").attr('disabled', true);

    // rellenamos los onblur de los input que se validan

    $("#txtdnipersona").attr('onblur', 'checkDni("txtdnipersona" ,"errorFormatoDni")');
    $("#txtnombrepersona").attr('onblur', 'checkName("txtnombrepersona","errorFormatoName")');
    $("#txtapellidospersona").attr('onblur', 'checkSurname("txtapellidospersona" , "errorFormatoApell")');
    $("#txtfechanacimientopersona").attr('onblur', 'checkFechaNormal("txtfechanacimientopersona" ,"errFechaNacimiento")');
    $("#txtdireccionpersona").attr('onblur', 'checkDirre("txtdireccionpersona","errorFormatoDirr")');
    $("#txttelefonopersona").attr('onblur', 'checkPhone("txttelefonopersona","errorFormatoPhone")');
    $("#txtemailpersona").attr('onblur', 'checkEmail("txtemailpersona","errorFormatoEmail")');
    $("#txtsubefotopersona").attr('onblur', 'checkPhoto("txtsubefotopersona","errorFormatosubePhoto" )');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/add.png");

}

//
// funcion deletepersona, recibe los datos del formulario formdeletegenerico modificado para delete y los envia al back para borrarlo
//
function deletepersona() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericopersona, 'ID_SESSION', idSession);
    addActionControler(document.formgenericopersona, "delete", "persona");

    $("#txtdnipersona").attr("disabled", false);

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericopersona").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }


        resetearformulariopersona();

        getLisPersonas()

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para borrar un usuario
//
function showEliminarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {

    // se resetea todo el formulario generico
    resetearformulariopersona();
    limpiarMensajeError();
    getLisPersonas()
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericopersona").attr('action', 'javascript:deletepersona();');
    $("#formgenericopersona").attr('onsubmit', '');

    // rellenamos los value de los input 

    $("#txtdnipersona").val(dni_persona);
    $("#txtnombrepersona").val(nombre_persona);
    $("#txtapellidospersona").val(apellidos_persona);
    $("#txtfechanacimientopersona").val(fechaNacimiento_persona);
    $("#txtdireccionpersona").val(direccion_persona);
    $("#txttelefonopersona").val(telefono_persona);
    $("#txtemailpersona").val(email_persona);
    $("#txtfotopersona").val(foto_persona);

    $("#labeltxtsubefotopersona").attr('style', 'display:none');
    $("#txtsubefotopersona").attr('style', 'display:none');

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtdnipersona").attr('disabled', true);
    $("#txtnombrepersona").attr('disabled', true);
    $("#txtapellidospersona").attr('disabled', true);
    $("#txtfechanacimientopersona").attr('disabled', true);
    $("#txtdireccionpersona").attr('disabled', true);
    $("#txttelefonopersona").attr('disabled', true);
    $("#txtemailpersona").attr('disabled', true);
    $("#txtfotopersona").attr('disabled', true);
    $("#txtesceliacopersona").attr('disabled', true);
    $("#txtborradopersona").attr('disabled', true);

    // se rellena los select
    $("#txtesceliacopersona option[value='" + esCeliaco_persona + "'").attr("selected", true);
    $("#txtborradopersona option[value='" + borrado_persona + "'").attr("selected", true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/delete.png");

}

//
// funcion editpersona, recibe los datos del formulario formdeletegenerico modificado para edit y los envia al back para editarlo
//
function editpersona() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericopersona, 'ID_SESSION', idSession);
    addActionControler(document.formgenericopersona, "edit", "persona");

    $("#txtdnipersona").attr("disabled", false);
    $("#txtfotopersona").attr("disabled", false);

    var idioma = getCookie('lang');

    var formdata = $("#formgenericopersona").serialize();
    var file = $("#txtsubefotopersona")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);
    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: datos,
        contentType: false,
        processData: false,
    }).done(function(response) {
        if (response.ok == true) {
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformulariopersona();

        getLisPersonas()

        setLang(idioma);

    });

}


//
// Funcion para modificar un formulario generico para editar una persona
//
function showEditarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {

    // se resetea todo el formulario generico
    resetearformulariopersona();
    limpiarMensajeError();
    getLisPersonas()
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericopersona").attr('action', 'javascript:editpersona();');
    $("#formgenericopersona").attr('onsubmit', 'return comprobarpersona()');

    // rellenamos los value de los input 

    $("#txtdnipersona").attr('onblur', 'checkDni("txtdnipersona" ,"errorFormatoDni")');
    $("#txtnombrepersona").attr('onblur', 'checkName("txtnombrepersona","errorFormatoName")');
    $("#txtapellidospersona").attr('onblur', 'checkSurname("txtapellidospersona" , "errorFormatoApell")');
    $("#txtfechanacimientopersona").attr('onblur', 'checkFechaNormal("txtfechanacimientopersona" ,"errFechaNacimiento")');
    $("#txtdireccionpersona").attr('onblur', 'checkDirre("txtdireccionpersona","errorFormatoDirr")');
    $("#txttelefonopersona").attr('onblur', 'checkPhone("txttelefonopersona","errorFormatoPhone")');
    $("#txtemailpersona").attr('onblur', 'checkEmail("txtemailpersona","errorFormatoEmail")');
    $("#txtsubefotopersona").attr('onblur', 'checkPhoto("txtsubefotopersona","errorFormatosubePhoto" )');

    $("#txtdnipersona").val(dni_persona);
    $("#txtnombrepersona").val(nombre_persona);
    $("#txtapellidospersona").val(apellidos_persona);
    $("#txtfechanacimientopersona").val(fechaNacimiento_persona);
    $("#txtdireccionpersona").val(direccion_persona);
    $("#txttelefonopersona").val(telefono_persona);
    $("#txtemailpersona").val(email_persona);
    $("#txtfotopersona").val(foto_persona);

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtdnipersona").attr('disabled', true);
    $("#txtfotopersona").attr('disabled', true);

    // se rellena los select
    $("#txtesceliacopersona option[value='" + esCeliaco_persona + "'").attr("selected", true);
    $("#txtborradopersona option[value='" + borrado_persona + "'").attr("selected", true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/edit.png");

}

//
// Funcion para volver de ver el detalle de una persona
//
function detallepersona() {

    var idioma = getCookie('lang');

    resetearformulariopersona();

    getLisPersonas();

    setLang(idioma);
}

//
// Funcion para modificar un formulario generico para mostrar el detalle de una persona
//
function showDetallePersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {

    // se resetea todo el formulario generico
    resetearformulariopersona();
    limpiarMensajeError();
    getLisPersonas()
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericopersona").attr('action', 'javascript:detallepersona();');
    $("#formgenericopersona").attr('onsubmit', '');

    // rellenamos los value de los input 

    $("#txtdnipersona").val(dni_persona);
    $("#txtnombrepersona").val(nombre_persona);
    $("#txtapellidospersona").val(apellidos_persona);
    $("#txtfechanacimientopersona").val(fechaNacimiento_persona);
    $("#txtdireccionpersona").val(direccion_persona);
    $("#txttelefonopersona").val(telefono_persona);
    $("#txtemailpersona").val(email_persona);
    $("#txtfotopersona").val(foto_persona);

    $("#labeltxtsubefotopersona").attr('style', 'display:none');
    $("#txtsubefotopersona").attr('style', 'display:none');

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtdnipersona").attr('disabled', true);
    $("#txtnombrepersona").attr('disabled', true);
    $("#txtapellidospersona").attr('disabled', true);
    $("#txtfechanacimientopersona").attr('disabled', true);
    $("#txtdireccionpersona").attr('disabled', true);
    $("#txttelefonopersona").attr('disabled', true);
    $("#txtemailpersona").attr('disabled', true);
    $("#txtfotopersona").attr('disabled', true);
    $("#txtesceliacopersona").attr('disabled', true);
    $("#txtborradopersona").attr('disabled', true);

    // se rellena los select
    $("#txtesceliacopersona option[value='" + esCeliaco_persona + "'").attr("selected", true);
    $("#txtborradopersona option[value='" + borrado_persona + "'").attr("selected", true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/back.png");


}

//*
// funcion searchpersona, recibe los datos del formulario formgenericopersona y los envia al back
//*
function searchpersona() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericopersona, 'ID_SESSION', idSession);
    addActionControler(document.formgenericopersona, "search", "persona");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericopersona").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosPersonas").html("");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFilapersona(response.resource[i]);
                $("#datosPersonas").append(tr);
            }
            respuestaOKAjax(response.code);
            setLang(idioma);
        } else {
            respuestaKOAjax(response.code);
        }

        setLang(idioma);

        resetearformulariopersona();
        


    });

}

//
// Funcion para modificar un formulario generico para buscar una persona
//
function showBuscarPersona() {

    // se resetea todo el formulario generico
    resetearformulariopersona();
    limpiarMensajeError();
    getLisPersonas()
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericopersona").attr('action', 'javascript:searchpersona();');

    // eliminar input no necesario
    $("#labeltxtsubefotopersona").attr('style', 'display:none');
    $("#txtsubefotopersona").attr('style', 'display:none');
    $("#txtsubefotopersona").attr('disabled', true);

    //dar valores neutros a los desplegables
    var opcion = document.createElement("option");
    opcion.value = '';
    opcion.text = '---';
    document.getElementById('txtesceliacopersona').add(opcion);
    $("#txtesceliacopersona option[value='']").attr("selected", true);

    var opcion = document.createElement("option");
    opcion.value = '';
    opcion.text = '---';
    document.getElementById('txtborradopersona').add(opcion);
    $("#txtborradopersona option[value='']").attr("selected", true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/search.png");

}


function resetearformulariopersona() {

    $("#formgenericopersona").attr('action', '');
    $("#formgenericopersona").attr('onsubmit', '');

    $("#txtdnipersona").val('');
    $("#txtnombrepersona").val('');
    $("#txtapellidospersona").val('');
    $("#txtfechanacimientopersona").val('');
    $("#txtdireccionpersona").val('');
    $("#txttelefonopersona").val('');
    $("#txtemailpersona").val('');
    $("#txtfotopersona").val('');
    $("#txtesceliacopersona").val('0');
    $("#txtborradopersona").val('0');

    $("#txtdnipersona").attr('disabled', false);
    $("#txtnombrepersona").attr('disabled', false);
    $("#txtapellidospersona").attr('disabled', false);
    $("#txtfechanacimientopersona").attr('disabled', false);
    $("#txtdireccionpersona").attr('disabled', false);
    $("#txttelefonopersona").attr('disabled', false);
    $("#txtemailpersona").attr('disabled', false);
    $("#txtfotopersona").attr('disabled', false);
    $("#txtsubefotopersona").attr('disabled', false);
    $("#txtesceliacopersona").attr('disabled', false);
    $("#txtborradopersona").attr('disabled', false);

    $("#txtdnipersona").attr('onblur', '');
    $("#txtnombrepersona").attr('onblur', '');
    $("#txtapellidospersona").attr('onblur', '');
    $("#txtfechanacimientopersona").attr('onblur', '');
    $("#txtdireccionpersona").attr('onblur', '');
    $("#txttelefonopersona").attr('onblur', '');
    $("#txtemailpersona").attr('onblur', '');
    $("#txtfotopersona").attr('onblur', '');
    $("#txtsubefotopersona").attr('onblur', '');

    $("#txtdnipersona").attr('style', '');
    $("#txtnombrepersona").attr('style', '');
    $("#txtapellidospersona").attr('style', '');
    $("#txtfechanacimientopersona").attr('style', '');
    $("#txtdireccionpersona").attr('style', '');
    $("#txttelefonopersona").attr('style', '');
    $("#txtemailpersona").attr('style', '');
    $("#txtfotopersona").attr('style', '');
    $("#txtsubefotopersona").attr('style', '');

    $("#errorFormatoDni").attr('style', '');
    $("#errorFormatoName").attr('style', '');
    $("#errorFormatoApell").attr('style', '');
    $("#errFechaNacimiento").attr('style', '');
    $("#errorFormatoDirr").attr('style', '');
    $("#errorFormatoPhone").attr('style', '');
    $("#errorFormatoEmail").attr('style', '');
    $("#errorFormatoPhoto").attr('style', '');
    $("#errorFormatosubePhoto").attr('style', '');


    document.getElementById("errorFormatoDni").classList = '';
    document.getElementById("errorFormatoName").classList = '';
    document.getElementById("errorFormatoApell").classList = '';
    document.getElementById("errFechaNacimiento").classList = '';
    document.getElementById("errorFormatoDirr").classList = '';
    document.getElementById("errorFormatoPhone").classList = '';
    document.getElementById("errorFormatoEmail").classList = '';
    document.getElementById("errorFormatoPhoto").classList = '';
    document.getElementById("errorFormatosubePhoto").classList = '';


    document.getElementById('errorFormatoDni').textContent = '';
    document.getElementById('errorFormatoName').textContent = '';
    document.getElementById("errorFormatoApell").textContent = '';
    document.getElementById("errFechaNacimiento").textContent = '';
    document.getElementById("errorFormatoDirr").textContent = '';
    document.getElementById("errorFormatoPhone").textContent = '';
    document.getElementById("errorFormatoEmail").textContent = '';
    document.getElementById("errorFormatoPhoto").textContent = '';
    document.getElementById("errorFormatosubePhoto").textContent = '';

    $("#errorFormatoDni").val('');
    $("#errorFormatoName").val('');
    $("#errorFormatoApell").val('');
    $("#errFechaNacimiento").val('');
    $("#errorFormatoDirr").val('');
    $("#errorFormatoPhone").val('');
    $("#errorFormatoEmail").val('');
    $("#errorFormatoPhoto").val('');
    $("#errorFormatosubePhoto").val('');

    $("#labeltxtfotopersona").attr('style', 'display:block');
    $("#txtfotopersona").attr('style', 'display:block');
    $("#labeltxtsubefotopersona").attr('style', 'display:block');
    $("#txtsubefotopersona").attr('style', 'display:block');

    session = document.getElementById('ID_SESSION');
    if (session != null) { session.remove(); }
    controlador = document.getElementById('controlador');
    if (controlador != null) { controlador.remove(); }
    action = document.getElementById('action');
    if (action != null) { action.remove(); }

    // borrar options por defecto para las busquedas
    document.getElementById('txtesceliacopersona').remove(2);
    document.getElementById('txtborradopersona').remove(2);


    //cambiar icono submit
    $("#iconoAcciones").attr('src', "");

    $("#divformgenerico").attr('style', 'display: none');

}

function comprobarpersona(){
    if(checkDni("txtdnipersona" ,"errorFormatoDni") && checkName("txtnombrepersona","errorFormatoName") && 
        checkSurname("txtapellidospersona" , "errorFormatoApell") && checkFechaNormal("txtfechanacimientopersona" ,"errFechaNacimiento") && 
                checkDirre("txtdireccionpersona","errorFormatoDirr") && checkPhone("txttelefonopersona","errorFormatoPhone") && 
                    checkEmail("txtemailpersona","errorFormatoEmail") && checkPhoto("txtsubefotopersona","errorFormatosubePhoto" )){
        return true;
    }else{
        return false;
    }
}