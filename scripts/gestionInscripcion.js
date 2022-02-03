/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFilainscripcion(fila, usuario, nombre_actividad) {

    let atributosFunciones = ["'" +
        fila.id_inscripcion + "'", "'" +
        fila.id_actividad + "'", "'" +
        fila.id_usuario + "'", "'" +
        fila.fecha_solicitud_inscripcion + "'", "'" +
        fila.documento_pago + "'", "'" +
        fila.fecha_pago_inscripcion + "'", "'" +
        fila.fecha_aceptacion_inscripcion +
        "'"
    ];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleinscripcion(' + atributosFunciones +
        ')"> <img src="/images/consult.png" width="20" height="20" alt="Consultar"/></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarinscripcion(' + atributosFunciones +
        ')"> <img src="/images/edit.png" width="20" height="20" alt="Editar"/></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarinscripcion(' + atributosFunciones +
        ')"> <img src="/images/delete.png" width="20" height="20" alt="Eliminar"/></a></div>';

    var ruta = "http://193.147.87.202/ET3_IU/noRest.php";
    ruta = ruta.substring(29, 0);
    ruta = ruta + 'documentos/';

    var filaTabla = '<tr> <td>' + fila.id_inscripcion +
        '</td> <td>' + nombre_actividad +
        '</td> <td>' + usuario +
        '</td> <td>' + fila.fecha_solicitud_inscripcion +
        '</td> <td> <a href=\'' + ruta + fila.documento_pago + '\'>' + fila.documento_pago + '</a>' +
        '</td> <td>' + fila.fecha_pago_inscripcion +
        '</td> <td>' + fila.fecha_aceptacion_inscripcion +
        '</td> <td>' + celdaAccionesDetalle +
        '</td> <td>' + celdaAccionesEditar +
        '</td> <td>' + celdaAccionesEliminar +
        '</td> </tr>';

    return filaTabla;
}

/**Función crea el formulario con los campos de action y controlador*/
function obtenerListadoInscripciones() {

    crearformoculto('formInscripcion', 'javascript:getLisinscripciones()');


    document.formInscripcion.submit();

}

/**Función que llama al show all de usuarios*/
async function getLisinscripciones() {

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    addActionControler(document.formInscripcion, "search", "inscripcion");
    eliminarcampo('ID_SESSION');
    if (idSession == null) {
        errorAutenticado(idioma);
    } else {
        crearformoculto('formUsuario', '');
        crearformoculto('formActividad', '');
        addActionControler(document.formUsuario, "search", "usuario");
        addActionControler(document.formActividad, "search", "actividad");
        insertacampo(document.formInscripcion, 'ID_SESSION', idSession);
        insertacampo(document.formUsuario, 'ID_SESSION', idSession);
        insertacampo(document.formActividad, 'ID_SESSION', idSession);
        var usuario = getFormUsuario();
        var actividad = getFormActividad();
        var inscripcion = getFormInscripcion();
        Promise.all([inscripcion, usuario, actividad])
            .then(([response, usuarios, actividades]) => {
                if (response.ok == true) {
                    $("#datosinscripcion").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var nombreusuario;
                        var nombreactividad;
                        for (var j = 0; j < usuarios.resource.length; j++) {
                            if (response.resource[i].id_usuario == usuarios.resource[j].id) {
                                nombreusuario = usuarios.resource[j].usuario;
                            }
                        }
                        for (var k = 0; k < actividades.resource.length; k++) {
                            if (response.resource[i].id_actividad == actividades.resource[k].id_actividad) {
                                nombreactividad = actividades.resource[k].nombre_actividad;
                            }
                        }

                        var tr = construyeFilainscripcion(response.resource[i], nombreusuario, nombreactividad);
                        $("#datosinscripcion").append(tr);
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
// funcion addinscripcion, recibe los datos del formulario formgenericoInscripcion y los envia al back
//*
function addinscripcion() {
    var idSession = getCookie('idSession');
    insertacampo(document.formgenericoInscripcion, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoInscripcion, "add", "inscripcion");

    var idioma = getCookie('lang');
    generarIdinscripcion()
        .then((id_inscripcion) => {
            insertacampo(document.formgenericoInscripcion, 'id_inscripcion', id_inscripcion);
            var formdata = $("#formgenericoInscripcion").serialize();
            var file = $("#txtdocumentopago")[0].files[0];
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
                    $("#datosinscripcion").html("");
                    respuestaOKAjax(response.code);
                } else {
                    respuestaKOAjax(response.code);
                }

                setLang(idioma);

                obtenerListadoInscripciones();

                resetearformularioinscripcion();

            });
        });
}

//
// Funcion para modificar un formulario generico para editar un inscripcion
//
function showInsertarinscripcion() {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();
    limpiarMensajeError();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoInscripcion").attr('onsubmit', 'javascript:return comprobarinscripcion();');
    $("#formgenericoInscripcion").attr('action', 'javascript:addinscripcion()');

    // rellenamos los onblur de los input que se validan

    var opcionUsu = document.createElement("option");
    opcionUsu.value = "";
    opcionUsu.text = "---";
    document.getElementById("txtnombreusuario").add(opcionUsu);
    var opcionAct = document.createElement("option");
    opcionAct.value = "";
    opcionAct.text = "---";
    document.getElementById("txtnombreactividad").add(opcionAct);
    fillComboActividad("txtnombreactividad");
    fillComboUsuario("txtnombreusuario");

    $("#txtdocumentopago").attr('onblur', 'checkCurriculum("txtdocumentopago","errdocumentopago")');


    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/add.png");

}

//
// funcion deleteinscripcion, recibe los datos del formulario formdeletegenerico modificado para delete y los envia al back para borrarlo
//
function deleteinscripcion() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericoInscripcion, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoInscripcion, "delete", "inscripcion");
    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoInscripcion").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosinscripcion").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformularioinscripcion();

        obtenerListadoInscripciones();

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para borrar un inscripcion
//
function showEliminarinscripcion(id_inscripcion, id_actividad, id_usuario, fecha_solicitud_inscripcion,
    documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    //resetearformularioinscripcion();
    limpiarMensajeError();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoInscripcion").attr('action', 'javascript:deleteinscripcion();');
    $("#formgenericoInscripcion").attr('onsubmit', '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoInscripcion, 'id_inscripcion', id_inscripcion);
    fillComboActividad("txtnombreactividad", id_actividad);
    fillComboUsuario("txtnombreusuario", id_usuario);
    $("#txtfechasolicitudinscripcion").val(fecha_solicitud_inscripcion);
    $("#txtdocumentopago").attr('style', 'display:none')
    $("#labdocumentopago").attr('style', 'display:none')
    $("#txtfechapagoinscripcion").val(fecha_pago_inscripcion);
    $("#txtfechaaceptacioninscripcion").val(fecha_aceptacion_inscripcion);


    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombreactividad").attr('disabled', true);
    $("#txtnombreusuario").attr('disabled', true);
    $("#txtfechasolicitudinscripcion").attr('disabled', true);
    $("#txtdocumentopago").attr('disabled', true);
    $("#txtfechapagoinscripcion").attr('disabled', true);
    $("#txtcolornombreinscripcion").attr('disabled', true);
    $("#txtfechaaceptacioninscripcion").attr('disabled', true);


    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/delete.png");

}

//
// funcion editinscripcion, recibe los datos del formulario formdeletegenerico modificado para edit y los envia al back para editarlo
//
function editinscripcion() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericoInscripcion, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoInscripcion, "edit", "inscripcion");

    var idioma = getCookie('lang');
    var formdata = $("#formgenericoinscripcion").serialize();
    var file = $("#txtdocumentopago")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);
    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoInscripcion").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosinscripcion").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformularioinscripcion();
        obtenerListadoInscripciones()

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para editar una persona
//
function showEditarinscripcion(id_inscripcion, id_actividad, id_usuario, fecha_solicitud_inscripcion,
    documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();
    limpiarMensajeError();

    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoInscripcion").attr('action', 'javascript:editinscripcion();');
    $("#formgenericoInscripcion").attr('onsubmit', 'javascript: return comprobarinscripcion()');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoInscripcion, 'id_inscripcion', id_inscripcion)
    fillComboActividad("txtnombreactividad", id_actividad);
    fillComboUsuario("txtnombreusuario", id_usuario);

    $("#txtdocumentopago").attr('onblur', 'checkCurriculum("txtdocumentopago","errdocumentopago")');

    $("#txtfechasolicitudinscripcion").val(fecha_solicitud_inscripcion);
    $("#txtdocumentopago").val(documento_pago);
    $("#txtfechapagoinscripcion").val(fecha_pago_inscripcion);
    $("#txtfechaaceptacioninscripcion").val(fecha_aceptacion_inscripcion);

    $("#txtdocumentopago").attr('disabled', true);
    $("#txtdocumentopago").attr('style', 'display:none');
    $("#labdocumentopago").attr('style', 'display:none');


    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/edit.png");

}

//
// Funcion para volver de ver el detalle de un inscripcion
//
function detalleinscripcion() {

    var idioma = getCookie('lang');

    resetearformularioinscripcion();

    obtenerListadoInscripciones();

    setLang(idioma);
}

//
// Funcion para modificar un formulario generico para mostrar el detalle de un inscripcion
//
function showDetalleinscripcion(id_inscripcion, id_actividad, id_usuario, fecha_solicitud_inscripcion,
    documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();
    limpiarMensajeError();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoInscripcion").attr('action', 'javascript:detalleinscripcion();');
    $("#formgenericoInscripcion").attr('onsubmit', '');

    insertacampo(document.formgenericoInscripcion, 'id_inscripcion', id_inscripcion)
    fillComboActividad("txtnombreactividad", id_actividad);
    fillComboUsuario("txtnombreusuario", id_usuario);
    $("#txtfechasolicitudinscripcion").val(fecha_solicitud_inscripcion);
    $("#txtdocumentopago").attr('style', 'display:none')
    $("#labdocumentopago").attr('style', 'display:none')
    $("#txtfechapagoinscripcion").val(fecha_pago_inscripcion);
    $("#txtfechaaceptacioninscripcion").val(fecha_aceptacion_inscripcion);


    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombreactividad").attr('disabled', true);
    $("#txtnombreusuario").attr('disabled', true);
    $("#txtfechasolicitudinscripcion").attr('disabled', true);
    $("#txtdocumentopago").attr('disabled', true);
    $("#txtfechapagoinscripcion").attr('disabled', true);
    $("#txtcolornombreinscripcion").attr('disabled', true);
    $("#txtfechaaceptacioninscripcion").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/back.png");

}

//*
// funcion searchpersona, recibe los datos del formulario formgenericoInscripcion y los envia al back
//*
function searchinscripcion() {

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    addActionControler(document.formgenericoInscripcion, "search", "inscripcion");
    eliminarcampo('ID_SESSION');
    if (idSession == null) {
        errorAutenticado(idioma);
    } else {
        crearformoculto('formUsuario', '');
        crearformoculto('formActividad', '');
        addActionControler(document.formUsuario, "search", "usuario");
        addActionControler(document.formActividad, "search", "actividad");
        insertacampo(document.formgenericoInscripcion, 'ID_SESSION', idSession);
        insertacampo(document.formUsuario, 'ID_SESSION', idSession);
        insertacampo(document.formActividad, 'ID_SESSION', idSession);
        var usuario = getFormUsuario();
        var actividad = getFormActividad();
        var inscripcion = searchFormInscripcion();
        Promise.all([inscripcion, usuario, actividad])
            .then(([response, usuarios, actividades]) => {
                if (response.ok == true) {
                    $("#datosinscripcion").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var nombreusuario;
                        var nombreactividad;
                        for (var j = 0; j < usuarios.resource.length; j++) {
                            if (response.resource[i].id_usuario == usuarios.resource[j].id) {
                                nombreusuario = usuarios.resource[j].usuario;
                            }
                        }
                        for (var k = 0; k < actividades.resource.length; k++) {
                            if (response.resource[i].id_actividad == actividades.resource[k].id_actividad) {
                                nombreactividad = actividades.resource[k].nombre_actividad;
                            }
                        }

                        var tr = construyeFilainscripcion(response.resource[i], nombreusuario, nombreactividad);
                        $("#datosinscripcion").append(tr);
                    }
                    setLang(idioma);
                } else {
                    respuestaKOAjax(response.code);
                }

                deleteActionController();
            });
    }

}

//
// Funcion para modificar un formulario generico para buscar una persona
//
function showBuscarinscripcion() {
    var idioma = getCookie('lang');
    // se resetea todo el formulario generico
    resetearformularioinscripcion();
    obtenerListadoInscripciones();
    limpiarMensajeError();


    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoInscripcion").attr('action', 'javascript:searchinscripcion();');

    // rellenamos los onblur de los input que se validan
    insertacampo(document.formgenericoInscripcion, 'id_inscripcion', '')
    insertacampo(document.formgenericoInscripcion, 'documento_pago', '')
    $("#txtnombreinscripcion").attr('onblur', '');
    $("#txtdescripcioninscripcion").attr('onblur', '');
    $("#txtprecioinscripcion").attr('onblur', '');
    $("#txtnumplazasinscripcion").attr('onblur', '');
    $("#txtcolorinscripcion").attr('onblur', '');
    $("#txtcolornombreinscripcion").attr('onblur', '');
    $("#txtdocumentopago").attr('style', 'display:none');
    $("#labdocumentopago").attr('style', 'display:none');

    var opcionUsu = document.createElement("option");
    opcionUsu.value = "";
    opcionUsu.text = "---";
    document.getElementById("txtnombreusuario").add(opcionUsu);
    var opcionAct = document.createElement("option");
    opcionAct.value = "";
    opcionAct.text = "---";
    document.getElementById("txtnombreactividad").add(opcionAct);

    fillComboUsuario("txtnombreusuario");
    fillComboActividad("txtnombreactividad");


    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/search.png");

    setLang(idioma);

}



function resetearformularioinscripcion() {

    $("#formgenericoInscripcion").attr('action', '');
    $("#formgenericoInscripcion").attr('onsubmit', '');

    $("#txtfechasolicitudinscripcion").attr('style', '');
    $("#txtdocumentopago").attr('style', '');
    $("#txtfechapagoinscripcion").attr('style', '');
    $("#txtfechaaceptacioninscripcion").attr('style', '');
    $("#labdocumentopago").attr('style', '');

    $("#txtfechasolicitudinscripcion").val('');
    $("#txtdocumentopago").val('');
    $("#txtfechapagoinscripcion").val('');
    $("#txtfechaaceptacioninscripcion").val('');
    deleteoptionsSelect("txtnombreusuario");
    deleteoptionsSelect("txtnombreactividad");



    document.getElementById('errfechasolicitudinscripcion').classList = 'tcal';
    document.getElementById('errdocumentopago').classList = '';
    document.getElementById("errfechapagoinscripcion").classList = 'tcal';
    document.getElementById("errfechaaceptacioninscripcion").classList = 'tcal';

    $("#txtnombreactividad").attr('disabled', false);
    $("#txtnombreusuario").attr('disabled', false);
    $("#txtfechaaceptacioninscripcion").attr('disabled', true);
    $("#txtfechasolicitudinscripcion").attr('disabled', false);
    $("#txtdocumentopago").attr('disabled', false);
    $("#txtfechapagoinscripcion").attr('disabled', false);
    $("#txtfechaaceptacioninscripcion").attr('disabled', false);

    $("#txtfechasolicitudinscripcion").attr('onblur', '');
    $("#txtdocumentopago").attr('onblur', '');
    $("#txtfechapagoinscripcion").attr('onblur', );
    $("#txtfechaaceptacioninscripcion").attr('onblur', );


    eliminarcampo("ID_SESSION");
    deleteActionController();
    //cambiar icono submit
    $("#iconoAcciones").attr('src', "");

    $("#divformgenerico").attr('style', 'display: none');

}

function comprobarinscripcion() {
    if (checkCurriculum("txtdocumentopago","errdocumentopago")) {
        return true;
    } else {
        return false;
    }
}