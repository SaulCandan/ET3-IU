 /**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFilaEspacio(fila) {

    let atributosFunciones = ["'" +
        fila.id_espacio + "'", "'" +
        fila.nombre_espacio + "'", "'" +
        fila.descripcion_espacio +

        "'"
    ];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleEspacio(' + atributosFunciones +
        ')"> <img src="/images/consult.png" width="20" height="20" alt="Consultar"/></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarEspacio(' + atributosFunciones +
        ')"> <img src="/images/edit.png" width="20" height="20" alt="Editar"/></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarEspacio(' + atributosFunciones +
        ')"> <img src="/images/delete.png" width="20" height="20" alt="Eliminar"/></a></div>';

    var filaTabla = '<tr> <td style="display: none">' + fila.id_espacio +
        '</td> <td>' + fila.nombre_espacio +
        '</td> <td>' + fila.descripcion_espacio +
        '</td> <td>' + celdaAccionesDetalle +
        '</td> <td>' + celdaAccionesEditar +
        '</td> <td>' + celdaAccionesEliminar +
        '</td> </tr>';

    return filaTabla;
}

/**Función crea el formulario con los campos de action y controlador*/
function
obtenerListadoEspacios() {

    crearformoculto('formEspacio', 'javascript:getLisEspacios()');

    addActionControler(document.formEspacio, "search", "espacio");
    eliminarcampo('ID_SESSION');
    document.formEspacio.submit();

}

/**Función que llama al show all de usuarios*/
function getLisEspacios() {

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');

    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {

        insertacampo(document.formEspacio, 'ID_SESSION', idSession);
        getFormEspacio()
            .then((response) => {
                if (response.ok == true) {
                    $("#datosEspacio").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var tr = construyeFilaEspacio(response.resource[i]);
                        $("#datosEspacio").append(tr);
                    }
                    setLang(idioma);
                } else {
                    respuestaKOAjax(response.code);
                }

                deleteActionController();
            });
    }
}

//*
// funcion addespacio, recibe los datos del formulario formgenericoespacio y los envia al back
//*
function addespacio() {
    var idSession = getCookie('idSession');
    insertacampo(document.formgenericoespacio, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoespacio, "add", "espacio");

    var idioma = getCookie('lang');
    generarIdEspacio()
        .then((id_espacio) => {
            insertacampo(document.formgenericoespacio, 'id_espacio', id_espacio);

            $.ajax({
                method: "POST",
                url: "http://193.147.87.202/ET3_IU/noRest.php",
                data: $("#formgenericoespacio").serialize(),
            }).done(function(response) {
                if (response.ok == true) {
                    $("#datosEspacio").html("");
                    respuestaOKAjax(response.code);
                    resetearformularioespacio();
                } else {
                    respuestaKOAjax(response.code);
                }

                setLang(idioma);

                obtenerListadoEspacios();


            });
        });
}

//
// Funcion para modificar un formulario generico para editar un espacio
//
function showInsertarEspacio() {

    // se resetea todo el formulario generico
    resetearformularioespacio();
    limpiarMensajeError();
    obtenerListadoEspacios();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoespacio").attr('onsubmit', 'javascript:return comprobarEspacio();');
    $("#formgenericoespacio").attr('action', 'javascript:addespacio()');

    // rellenamos los onblur de los input que se validan

    $("#txtnombreespacio").attr('onblur', 'checkName("txtnombreespacio","errnombreespacio")');
    $("#txtdescripcionespacio").attr('onblur', 'checkDescription("txtdescripcionespacio","errdescripcionespacio")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/add.png");

}

//
// funcion deleteEspacio, recibe los datos del formulario formdeletegenerico modificado para delete y los envia al back para borrarlo
//
function deleteEspacio() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericoespacio, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoespacio, "delete", "espacio");
    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoespacio").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosEspacio").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformularioespacio();

        obtenerListadoEspacios();

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para borrar un espacio
//
function showEliminarEspacio(id_espacio, nombre_espacio, descripcion_espacio, ) {

    // se resetea todo el formulario generico
    resetearformularioespacio();
    limpiarMensajeError();
    obtenerListadoEspacios();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoespacio").attr('action', 'javascript:deleteEspacio();');
    $("#formgenericoespacio").attr('onsubmit', '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoespacio, 'id_espacio', id_espacio);
    $("#txtnombreespacio").val(nombre_espacio);
    $("#txtdescripcionespacio").val(descripcion_espacio);

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombreespacio").attr('disabled', true);
    $("#txtdescripcionespacio").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/delete.png");

}

//
// funcion editespacio, recibe los datos del formulario formdeletegenerico modificado para edit y los envia al back para editarlo
//
function editEspacio() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericoespacio, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoespacio, "edit", "espacio");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoespacio").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosEspacio").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformularioespacio();
        obtenerListadoEspacios()

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para editar una persona
//
function showEditarEspacio(id_espacio, nombre_espacio, descripcion_espacio, ) {

    // se resetea todo el formulario generico
    resetearformularioespacio();
    limpiarMensajeError();
    obtenerListadoEspacios();

    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoespacio").attr('action', 'javascript:editEspacio();');
    $("#formgenericoespacio").attr('onsubmit', 'javascript: return comprobarEspacio()');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoespacio, 'id_espacio', id_espacio)
    $("#txtnombreespacio").val(nombre_espacio);
    $("#txtdescripcionespacio").val(descripcion_espacio);

    $("#txtnombreespacio").attr('onblur', 'checkName("txtnombreespacio","errnombreespacio",)');
    $("#txtdescripcionespacio").attr('onblur', 'checkDescription("txtdescripcionespacio","errdescripcionespacio")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/edit.png");

}

//
// Funcion para volver de ver el detalle de un espacio
//
function detalleEspacio() {

    var idioma = getCookie('lang');

    resetearformularioespacio();

    obtenerListadoEspacios();

    setLang(idioma);
}

//
// Funcion para modificar un formulario generico para mostrar el detalle de un espacio
//
function showDetalleEspacio(id_espacio, nombre_espacio, descripcion_espacio, ) {

    // se resetea todo el formulario generico
    resetearformularioespacio();
    limpiarMensajeError();
    obtenerListadoEspacios();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoespacio").attr('action', 'javascript:detalleEspacio();');
    $("#formgenericoespacio").attr('onsubmit', '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoespacio, 'id_espacio', id_espacio)
    $("#txtnombreespacio").val(nombre_espacio);
    $("#txtdescripcionespacio").val(descripcion_espacio);

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombreespacio").attr('disabled', true);
    $("#txtdescripcionespacio").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/back.png");

}

//*
// funcion searchpersona, recibe los datos del formulario formgenericoespacio y los envia al back
//*
function searchEspacio() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericoespacio, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoespacio, "search", "espacio");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoespacio").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosEspacio").html("");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFilaEspacio(response.resource[i]);
                $("#datosEspacio").append(tr);
            }
        } else {

            respuestaKOAjax(response.code);
        }

        setLang(idioma);


    });

}

//
// Funcion para modificar un formulario generico para buscar una persona
//
function showBuscarEspacio() {
    var idioma = getCookie('lang');
    // se resetea todo el formulario generico
    resetearformularioespacio();
    limpiarMensajeError();
    obtenerListadoEspacios();


    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoespacio").attr('action', 'javascript:searchEspacio();');
    //$("#formgenericoespacio").attr('onsubmit' , 'javascript:searchEspacio()');

    // rellenamos los onblur de los input que se validan

    $("#txtnombreespacio").attr('onblur', '');
    $("#txtdescripcionespacio").attr('onblur', '');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/search.png");

    setLang(idioma);

}



function resetearformularioespacio() {

    $("#formgenericoespacio").attr('action', '');
    $("#formgenericoespacio").attr('onsubmit', '');

    $("#txtnombreespacio").attr('style', '');
    $("#txtdescripcionespacio").attr('style', '');

    $("#txtnombreespacio").val('');
    $("#txtdescripcionespacio").val('');

    document.getElementById('errnombreespacio').textContent = '';
    document.getElementById('errdescripcionespacio').textContent = '';

    document.getElementById("errnombreespacio").classList = '';
    document.getElementById("errdescripcionespacio").classList = '';

    $("#txtnombreespacio").attr('disabled', false);
    $("#txtdescripcionespacio").attr('disabled', false);

    $("#txtnombreespacio").attr('onblur', '');
    $("#txtdescripcionespacio").attr('onblur', '');

    eliminarcampo("id_espacio");
    eliminarcampo("ID_SESSION");
    deleteActionController();

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "");

    $("#divformgenerico").attr('style', 'display: none');

}


function comprobarEspacio() {
    if (checkName("txtnombreespacio", "errnombreespacio") && checkDescription("txtdescripcionespacio", "errdescripcionespacio") &&
        checkFormat("txtnombreespacio", "errnombreespacio", "name") && checkFormat("txtdescripcionespacio", "errdescripcionespacio", "Descripcion")) {
        return true;
    } else {
        return false;
    }
}