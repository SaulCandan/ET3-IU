/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFilaactividad(fila, nombre_espacio, nombre_categoria) {

    let atributosFunciones = ["'" +
        fila.id_actividad + "'", "'" +
        fila.nombre_actividad + "'", "'" +
        fila.descripcion_actividad + "'", "'" +
        fila.precio_actividad + "'", "'" +
        fila.numPlazas_actividad + "'", "'" +
        fila.color_actividad + "'", "'" +
        fila.color_nombre_actividad + "'", "'" +
        fila.id_espacio + "'", "'" +
        fila.id_categoria +
        "'"
    ];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleactividad(' + atributosFunciones +
        ')"> <img src="/images/consult.png" width="20" height="20" alt="Consultar"/></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditaractividad(' + atributosFunciones +
        ')"> <img src="/images/edit.png" width="20" height="20" alt="Editar"/></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminaractividad(' + atributosFunciones +
        ')"> <img src="/images/delete.png" width="20" height="20" alt="Eliminar"/></a></div>';

    var filaTabla = '<tr> <td style="display: none">' + fila.id_actividad +
        '</td> <td>' + fila.nombre_actividad +
        '</td> <td>' + fila.descripcion_actividad +
        '</td> <td>' + fila.precio_actividad +
        '</td> <td>' + fila.numPlazas_actividad +
        '</td> <td> <div style="background-color : ' + fila.color_actividad + ';color: ' + fila.color_actividad + ' ">' + fila.color_actividad + '</div>' +
        '</td> <td> <div style="background-color : ' + fila.color_nombre_actividad + ';color: ' + fila.color_nombre_actividad + ' ">' + fila.color_nombre_actividad + '</div>' +
        '</td> <td>' + nombre_espacio +
        '</td> <td>' + nombre_categoria +
        '</td> <td>' + celdaAccionesDetalle +
        '</td> <td>' + celdaAccionesEditar +
        '</td> <td>' + celdaAccionesEliminar +
        '</td> </tr>';

    return filaTabla;
}

/**Función crea el formulario con los campos de action y controlador*/
function obtenerListadoactividades() {
    crearformoculto('formActividad', 'javascript:getLisactividades()');


    document.formActividad.submit();

}

/**Función que llama al show all de usuarios*/
async function getLisactividades() {

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    addActionControler(document.formActividad, "search", "actividad");
    eliminarcampo('ID_SESSION');

    if (idSession == null) {
        errorAutenticado(idioma);
    } else {
        crearformoculto('formEspacio', '');
        crearformoculto('formCategoria', '');
        addActionControler(document.formEspacio, "search", "espacio");
        addActionControler(document.formCategoria, "search", "categoria");
        insertacampo(document.formActividad, 'ID_SESSION', idSession);
        insertacampo(document.formEspacio, 'ID_SESSION', idSession);
        insertacampo(document.formCategoria, 'ID_SESSION', idSession);
        var actividad = getFormActividad();
        var espacio = getFormEspacio();
        var categoria = getFormCategoria();
        Promise.all([actividad, espacio, categoria])
            .then(([response, espacios, categorias]) => {
                if (response.ok == true) {
                    $("#datosactividad").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var nombreespacio;
                        var nombrecategoria;
                        for (var j = 0; j < espacios.resource.length; j++) {
                            if (response.resource[i].id_espacio == espacios.resource[j].id_espacio) {
                                nombreespacio = espacios.resource[j].nombre_espacio;
                            }
                        }
                        for (var k = 0; k < categorias.resource.length; k++) {
                            if (response.resource[i].id_categoria == categorias.resource[k].id_categoria) {
                                nombrecategoria = categorias.resource[k].nombre_categoria;
                            }
                        }

                        var tr = construyeFilaactividad(response.resource[i], nombreespacio, nombrecategoria);
                        $("#datosactividad").append(tr);
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
// funcion addactividad, recibe los datos del formulario formgenericoactividad y los envia al back
//*
function addactividad() {
    var idSession = getCookie('idSession');
    insertacampo(document.formgenericoactividad, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoactividad, "add", "actividad");

    var idioma = getCookie('lang');
    generarIdactividad()
        .then((id_actividad) => {
            insertacampo(document.formgenericoactividad, 'id_actividad', id_actividad);
            $.ajax({
                method: "POST",
                url: "http://193.147.87.202/ET3_IU/noRest.php",
                data: $("#formgenericoactividad").serialize(),
            }).done(function(response) {
                if (response.ok == true) {
                    $("#datosactividad").html("");
                    respuestaOKAjax(response.code);
                    resetearformularioactividad();
                } else {
                    respuestaKOAjax(response.code);
                }

                setLang(idioma);

                obtenerListadoactividades();


            });
        });
}

//
// Funcion para modificar un formulario generico para editar un actividad
//
function showInsertaractividad() {

    // se resetea todo el formulario generico
    resetearformularioactividad();
    limpiarMensajeError();
    obtenerListadoactividades();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoactividad").attr('onsubmit', 'javascript:return comprobaractividad();');
    $("#formgenericoactividad").attr('action', 'javascript:addactividad()');

    // rellenamos los onblur de los input que se validan

    $("#txtnombreactividad").attr('onblur', 'checkName("txtnombreactividad","errnombreactividad")');
    $("#txtdescripcionactividad").attr('onblur', 'checkDescription("txtdescripcionactividad","errdescripcionactividad")');
    $("#txtprecioactividad").attr('onblur', 'checkPrecio("txtprecioactividad","errprecioactividad")');
    $("#txtnumplazasactividad").attr('onblur', 'checkNumPlazas("txtnumplazasactividad","errnumplazasactividad")');

    var opcione = document.createElement("option");
    opcione.value = "";
    opcione.text = "---";
    document.getElementById("txtnombreespacio").add(opcione);

    var opcionc = document.createElement("option");
    opcionc.value = "";
    opcionc.text = "---";
    document.getElementById("txtnombrecategoria").add(opcionc);
    fillComboEspacio("txtnombreespacio");
    fillComboCategoria("txtnombrecategoria");

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/add.png");

}

//
// funcion deleteactividad, recibe los datos del formulario formdeletegenerico modificado para delete y los envia al back para borrarlo
//
function deleteactividad() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericoactividad, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoactividad, "delete", "actividad");
    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoactividad").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosactividad").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformularioactividad();

        obtenerListadoactividades();

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para borrar un actividad
//
function showEliminaractividad(id_actividad, nombre_actividad, descripcion_actividad, precioactividad, numplazasactividad, coloractividad,
    colornombreactividad, id_espacio, id_categoria) {

    // se resetea todo el formulario generico
    resetearformularioactividad();
    limpiarMensajeError();
    obtenerListadoactividades();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoactividad").attr('action', 'javascript:deleteactividad();');
    $("#formgenericoactividad").attr('onsubmit', '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoactividad, 'id_actividad', id_actividad)
    $("#txtnombreactividad").val(nombre_actividad);
    $("#txtdescripcionactividad").val(descripcion_actividad);
    $("#txtprecioactividad").val(precioactividad);
    $("#txtnumplazasactividad").val(numplazasactividad);
    $("#txtcoloractividad").val(coloractividad);
    $("#coloractividad").val(coloractividad);
    $("#txtcolornombreactividad").val(colornombreactividad);
    $("#colornombreactividad").val(colornombreactividad);
    fillComboEspacio("txtnombreespacio", id_espacio);
    fillComboCategoria("txtnombrecategoria", id_categoria);


    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombreactividad").attr('disabled', true);
    $("#txtdescripcionactividad").attr('disabled', true);
    $("#txtprecioactividad").attr('disabled', true);
    $("#txtnumplazasactividad").attr('disabled', true);
    $("#txtcoloractividad").attr('disabled', true);
    $("#txtcolornombreactividad").attr('disabled', true);
    $("#txtnombrecategoria").attr('disabled', true);
    $("#txtnombreespacio").attr('disabled', true);


    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/delete.png");

}

//
// funcion editactividad, recibe los datos del formulario formdeletegenerico modificado para edit y los envia al back para editarlo
//
function editactividad() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericoactividad, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoactividad, "edit", "actividad");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoactividad").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosactividad").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformularioactividad();
        obtenerListadoactividades()

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para editar una persona
//
function showEditaractividad(id_actividad, nombre_actividad, descripcion_actividad, precioactividad,
    numplazasactividad, coloractividad, colornombreactividad, id_espacio, id_categoria) {

    // se resetea todo el formulario generico
    resetearformularioactividad();
    limpiarMensajeError();
    obtenerListadoactividades();

    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoactividad").attr('action', 'javascript:editactividad();');
    $("#formgenericoactividad").attr('onsubmit', 'javascript: return comprobaractividad()');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoactividad, 'id_actividad', id_actividad)
    $("#txtnombreactividad").val(nombre_actividad);
    $("#txtdescripcionactividad").val(descripcion_actividad);
    $("#txtprecioactividad").val(precioactividad);
    $("#txtnumplazasactividad").val(numplazasactividad);
    $("#txtcoloractividad").val(coloractividad);
    $("#coloractividad").val(coloractividad);
    $("#txtcolornombreactividad").val(colornombreactividad);
    $("#colornombreactividad").val(colornombreactividad);
    fillComboEspacio("txtnombreespacio", id_espacio);
    fillComboCategoria("txtnombrecategoria", id_categoria);

    $("#txtnombreactividad").attr('onblur', 'checkName("txtnombreactividad","errnombreactividad")');
    $("#txtdescripcionactividad").attr('onblur', 'checkDescription("txtdescripcionactividad","errdescripcionactividad")');
    $("#txtprecioactividad").attr('onblur', 'checkPrecio("txtprecioactividad","errprecioactividad")');
    $("#txtnumplazasactividad").attr('onblur', 'checkNumPlazas("txtnumplazasactividad","errnumplazasactividad")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/edit.png");

}

//
// Funcion para volver de ver el detalle de un actividad
//
function detalleactividad() {

    var idioma = getCookie('lang');

    resetearformularioactividad();

    obtenerListadoactividades();

    setLang(idioma);
}

//
// Funcion para modificar un formulario generico para mostrar el detalle de un actividad
//
function showDetalleactividad(id_actividad, nombre_actividad, descripcion_actividad, precioactividad, numplazasactividad, coloractividad,
    colornombreactividad, id_espacio, id_categoria) {

    // se resetea todo el formulario generico
    resetearformularioactividad();
    limpiarMensajeError();
    obtenerListadoactividades();


    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoactividad").attr('action', 'javascript:detalleactividad();');
    $("#formgenericoactividad").attr('onsubmit', '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoactividad, 'id_actividad', id_actividad)
    $("#txtnombreactividad").val(nombre_actividad);
    $("#txtdescripcionactividad").val(descripcion_actividad);
    $("#txtprecioactividad").val(precioactividad);
    $("#txtnumplazasactividad").val(numplazasactividad);
    $("#txtcoloractividad").val(coloractividad);
    $("#coloractividad").val(coloractividad);
    $("#txtcolornombreactividad").val(colornombreactividad);
    $("#colornombreactividad").val(colornombreactividad);
    fillComboEspacio("txtnombreespacio", id_espacio);
    fillComboCategoria("txtnombrecategoria", id_categoria);


    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombreactividad").attr('disabled', true);
    $("#txtdescripcionactividad").attr('disabled', true);
    $("#txtprecioactividad").attr('disabled', true);
    $("#txtnumplazasactividad").attr('disabled', true);
    $("#txtcoloractividad").attr('disabled', true);
    $("#txtcolornombreactividad").attr('disabled', true);
    $("#txtnombrecategoria").attr('disabled', true);
    $("#txtnombreespacio").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/back.png");

}

//*
// funcion searchpersona, recibe los datos del formulario formgenericoactividad y los envia al back
//*
function searchactividad() {


    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    addActionControler(document.formgenericoactividad, "search", "actividad");
    eliminarcampo('ID_SESSION');
    if (idSession == null) {
        errorAutenticado(idioma);
    } else {
        crearformoculto('formEspacio', '');
        crearformoculto('formCategoria', '');
        addActionControler(document.formEspacio, "search", "espacio");
        addActionControler(document.formCategoria, "search", "categoria");
        insertacampo(document.formgenericoactividad, 'ID_SESSION', idSession);
        insertacampo(document.formEspacio, 'ID_SESSION', idSession);
        insertacampo(document.formCategoria, 'ID_SESSION', idSession);
        var actividad = searchFormActividad();
        var espacio = getFormEspacio();
        var categoria = getFormCategoria();
        Promise.all([actividad, espacio, categoria])
            .then(([response, espacios, categorias]) => {
                if (response.ok == true) {
                    $("#datosactividad").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var nombreespacio;
                        var nombrecategoria;
                        for (var j = 0; j < espacios.resource.length; j++) {
                            if (response.resource[i].id_espacio == espacios.resource[j].id_espacio) {
                                nombreespacio = espacios.resource[j].nombre_espacio;
                            }
                        }
                        for (var k = 0; k < categorias.resource.length; k++) {
                            if (response.resource[i].id_categoria == categorias.resource[k].id_categoria) {
                                nombrecategoria = categorias.resource[k].nombre_categoria;
                            }
                        }

                        var tr = construyeFilaactividad(response.resource[i], nombreespacio, nombrecategoria);
                        $("#datosactividad").append(tr);
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
function showBuscaractividad() {
    var idioma = getCookie('lang');
    // se resetea todo el formulario generico
    resetearformularioactividad();
    limpiarMensajeError();
    obtenerListadoactividades();



    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoactividad").attr('action', 'javascript:searchactividad();');
    //$("#formgenericoactividad").attr('onsubmit' , 'javascript:searchactividad()');

    // rellenamos los onblur de los input que se validan

    $("#txtnombreactividad").attr('onblur', '');
    $("#txtdescripcionactividad").attr('onblur', '');
    $("#txtprecioactividad").attr('onblur', '');
    $("#txtnumplazasactividad").attr('onblur', '');
    $("#txtcolornombreactividad").val('');
    $("#txtcoloractividad").val('');

    var opcione = document.createElement("option");
    opcione.value = "";
    opcione.text = "---";
    document.getElementById("txtnombreespacio").add(opcione);

    var opcionc = document.createElement("option");
    opcionc.value = "";
    opcionc.text = "---";
    document.getElementById("txtnombrecategoria").add(opcionc);
    fillComboEspacio("txtnombreespacio");
    fillComboCategoria("txtnombrecategoria");


    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/search.png");

    setLang(idioma);

}



function resetearformularioactividad() {

    $("#formgenericoactividad").attr('action', '');
    $("#formgenericoactividad").attr('onsubmit', '');

    $("#txtnombreactividad").attr('style', '');
    $("#txtdescripcionactividad").attr('style', '');
    $("#txtprecioactividad").attr('style', '');
    $("#txtnumplazasactividad").attr('style', '');
    $("#txtcoloractividad").attr('style', '');
    $("#txtcolornombreactividad").attr('style', '');

    $("#txtnombreactividad").val('');
    $("#txtdescripcionactividad").val('');
    $("#txtprecioactividad").val('');
    $("#txtnumplazasactividad").val('');
    $("#txtcoloractividad").val('');
    $("#txtcolornombreactividad").val('');
    deleteoptionsSelect("txtnombreespacio");
    deleteoptionsSelect("txtnombrecategoria");


    document.getElementById('errnombreactividad').textContent = '';
    document.getElementById('errdescripcionactividad').textContent = '';
    document.getElementById("errprecioactividad").textContent = '';
    document.getElementById("errnumplazasactividad").textContent = '';
    document.getElementById("errcoloractividad").textContent = '';
    document.getElementById("errcolornombreactividad").textContent = '';
    document.getElementById("errcoloractividad").textContent = '';
    document.getElementById("errcolornombreactividad").textContent = '';

    document.getElementById("errnombreactividad").classList = '';
    document.getElementById("errdescripcionactividad").classList = '';
    document.getElementById("errprecioactividad").classList = '';
    document.getElementById("errnumplazasactividad").classList = '';
    document.getElementById("errcoloractividad").classList = '';
    document.getElementById("errcolornombreactividad").classList = '';
    document.getElementById("errcoloractividad").classList = '';
    document.getElementById("errcolornombreactividad").classList = '';


    $("#txtnombreactividad").attr('disabled', false);
    $("#txtdescripcionactividad").attr('disabled', false);
    $("#txtprecioactividad").attr('disabled', false);
    $("#txtnumplazasactividad").attr('disabled', false);
    $("#txtcoloractividad").attr('disabled', false);
    $("#txtcolornombreactividad").attr('disabled', false);
    $("#txtnombrecategoria").attr('disabled', false);
    $("#txtnombreespacio").attr('disabled', false);

    $("#txtnombreactividad").attr('onblur', '');
    $("#txtdescripcionactividad").attr('onblur', '');
    $("#txtprecioactividad").attr('onblur', '');
    $("#txtnumplazasactividad").attr('onblur', '');


    eliminarcampo("id_actividad");
    eliminarcampo("ID_SESSION");
    deleteActionController();

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "");

    $("#divformgenerico").attr('style', 'display: none');

}


function comprobaractividad() {
    if (checkName("txtnombreactividad", "errnombreactividad") && checkDescription("txtdescripcionactividad", "errdescripcionactividad") &&
        checkPrecio("txtprecioactividad", "errprecioactividad") && checkNumPlazas("txtnumplazasactividad", "errnumplazasactividad") &&
        checkColor("txtcoloractividad", "txtcoloractividad") && checkColor("txtcolornombreactividad", "txtcolornombreactividad")) {
        return true;
    } else {
        return false;
    }
}

function rellenarColor(id,dest){
    document.getElementById(dest).value = document.getElementById(id).value;
}