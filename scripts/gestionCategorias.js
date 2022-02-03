/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFilaCategoria(fila) {

    let atributosFunciones = ["'" +
        fila.id_categoria + "'", "'" +
        fila.nombre_categoria + "'", "'" +
        fila.descripcion_categoria +

        "'"
    ];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleCategoria(' + atributosFunciones +
        ')"> <img src="/images/consult.png" width="20" height="20" alt="Consultar"/></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarCategoria(' + atributosFunciones +
        ')"> <img src="/images/edit.png" width="20" height="20" alt="Editar"/></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarCategoria(' + atributosFunciones +
        ')"> <img src="/images/delete.png" width="20" height="20" alt="Eliminar"/></a></div>';

    var filaTabla = '<tr> <td style="display: none">' + fila.id_categoria +
        '</td> <td>' + fila.nombre_categoria +
        '</td> <td>' + fila.descripcion_categoria +
        '</td> <td>' + celdaAccionesDetalle +
        '</td> <td>' + celdaAccionesEditar +
        '</td> <td>' + celdaAccionesEliminar +
        '</td> </tr>';

    return filaTabla;
}

/**Función crea el formulario con los campos de action y controlador*/
function
obtenerListadoCategorias() {

    crearformoculto('formCategoria', 'javascript:getLisCategorias()');

    addActionControler(document.formCategoria, "search", "categoria");
    eliminarcampo('ID_SESSION');
    document.formCategoria.submit();

}

/**Función que llama al show all de usuarios*/
function getLisCategorias() {

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');

    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {

        insertacampo(document.formCategoria, 'ID_SESSION', idSession);
        getFormCategoria()
            .then((response) => {
                if (response.ok == true) {
                    $("#datosCategoria").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var tr = construyeFilaCategoria(response.resource[i]);
                        $("#datosCategoria").append(tr);
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
// funcion addCategoria, recibe los datos del formulario formgenericoCategoria y los envia al back
//*
function addcategoria() {
    var idSession = getCookie('idSession');
    insertacampo(document.formgenericocategoria, 'ID_SESSION', idSession);
    addActionControler(document.formgenericocategoria, "add", "categoria");

    var idioma = getCookie('lang');
    generarIdCategoria()
        .then((id_categoria) => {
            insertacampo(document.formgenericocategoria, 'id_categoria', id_categoria);

            $.ajax({
                method: "POST",
                url: "http://193.147.87.202/ET3_IU/noRest.php",
                data: $("#formgenericocategoria").serialize(),
            }).done(function(response) {
                if (response.ok == true) {
                    $("#datosCategoria").html("");
                    respuestaOKAjax(response.code);
                    resetearformulariocategoria();
                } else {
                    respuestaKOAjax(response.code);
                }

                setLang(idioma);

                obtenerListadoCategorias();


            });
        });
}

//
// Funcion para modificar un formulario generico para editar un categoria
//
function showInsertarCategoria() {

    // se resetea todo el formulario generico
    resetearformulariocategoria();
    limpiarMensajeError();
    obtenerListadoCategorias();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericocategoria").attr('onsubmit', 'javascript:return comprobarCategoria();');
    $("#formgenericocategoria").attr('action', 'javascript:addcategoria()');

    // rellenamos los onblur de los input que se validan

    $("#txtnombrecategoria").attr('onblur', 'checkName("txtnombrecategoria","errnombrecategoria")');
    $("#txtdescripcioncategoria").attr('onblur', 'checkDescription("txtdescripcioncategoria","errdescripcioncategoria")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/add.png");

}

//
// funcion deletecategoria, recibe los datos del formulario formdeletegenerico modificado para delete y los envia al back para borrarlo
//
function deleteCategoria() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericocategoria, 'ID_SESSION', idSession);
    addActionControler(document.formgenericocategoria, "delete", "categoria");
    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericocategoria").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosCategoria").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformulariocategoria();

        obtenerListadoCategorias();

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para borrar un categoria
//
function showEliminarCategoria(id_categoria, nombre_categoria, descripcion_categoria, ) {

    // se resetea todo el formulario generico
    resetearformulariocategoria();
    limpiarMensajeError();
    obtenerListadoCategorias();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericocategoria").attr('action', 'javascript:deleteCategoria();');
    $("#formgenericocategoria").attr('onsubmit', '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericocategoria, 'id_categoria', id_categoria);
    $("#txtnombrecategoria").val(nombre_categoria);
    $("#txtdescripcioncategoria").val(descripcion_categoria);

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombrecategoria").attr('disabled', true);
    $("#txtdescripcioncategoria").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/delete.png");

}

//
// funcion editcategoria, recibe los datos del formulario formdeletegenerico modificado para edit y los envia al back para editarlo
//
function editCategoria() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericocategoria, 'ID_SESSION', idSession);
    addActionControler(document.formgenericocategoria, "edit", "categoria");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericocategoria").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosCategoria").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformulariocategoria();
        obtenerListadoCategorias()

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para editar una persona
//
function showEditarCategoria(id_categoria, nombre_categoria, descripcion_categoria, ) {

    // se resetea todo el formulario generico
    resetearformulariocategoria();
    limpiarMensajeError();
    obtenerListadoCategorias();

    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericocategoria").attr('action', 'javascript:editCategoria();');
    $("#formgenericocategoria").attr('onsubmit', 'javascript: return comprobarCategoria()');

    // rellenamos los value de los input 
    insertacampo(document.formgenericocategoria, 'id_categoria', id_categoria)
    $("#txtnombrecategoria").val(nombre_categoria);
    $("#txtdescripcioncategoria").val(descripcion_categoria);

    $("#txtnombrecategoria").attr('onblur', 'checkName("txtnombrecategoria","errnombrecategoria",)');
    $("#txtdescripcioncategoria").attr('onblur', 'checkDescription("txtdescripcioncategoria","errdescripcioncategoria")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/edit.png");

}

//
// Funcion para volver de ver el detalle de un categoria
//
function detalleCategoria() {

    var idioma = getCookie('lang');

    resetearformulariocategoria();

    obtenerListadoCategorias();

    setLang(idioma);
}

//
// Funcion para modificar un formulario generico para mostrar el detalle de un Categoria
//
function showDetalleCategoria(id_categoria, nombre_categoria, descripcion_categoria, ) {

    // se resetea todo el formulario generico
    resetearformulariocategoria();
    limpiarMensajeError();
    obtenerListadoCategorias();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericocategoria").attr('action', 'javascript:detalleCategoria();');
    $("#formgenericocategoria").attr('onsubmit', '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericocategoria, 'id_categoria', id_categoria)
    $("#txtnombrecategoria").val(nombre_categoria);
    $("#txtdescripcioncategoria").val(descripcion_categoria);

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombrecategoria").attr('disabled', true);
    $("#txtdescripcioncategoria").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/back.png");

}

//*
// funcion searchpersona, recibe los datos del formulario formgenericocategoria y los envia al back
//*
function searchCategoria() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericocategoria, 'ID_SESSION', idSession);
    addActionControler(document.formgenericocategoria, "search", "categoria");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericocategoria").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosCategoria").html("");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFilaCategoria(response.resource[i]);
                $("#datosCategoria").append(tr);
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
function showBuscarCategoria() {
    var idioma = getCookie('lang');
    // se resetea todo el formulario generico
    resetearformulariocategoria();
    limpiarMensajeError();
    obtenerListadoCategorias();


    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericocategoria").attr('action', 'javascript:searchCategoria();');
    //$("#formgenericocategoria").attr('onsubmit' , 'javascript:searchCategoria()');

    // rellenamos los onblur de los input que se validan

    $("#txtnombrecategoria").attr('onblur', '');
    $("#txtdescripcioncategoria").attr('onblur', '');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/search.png");

    setLang(idioma);

}



function resetearformulariocategoria() {

    $("#formgenericocategoria").attr('action', '');
    $("#formgenericocategoria").attr('onsubmit', '');

    $("#txtnombrecategoria").attr('style', '');
    $("#txtdescripcioncategoria").attr('style', '');

    $("#txtnombrecategoria").val('');
    $("#txtdescripcioncategoria").val('');

    document.getElementById('errnombrecategoria').textContent = '';
    document.getElementById('errdescripcioncategoria').textContent = '';

    document.getElementById("errnombrecategoria").classList = '';
    document.getElementById("errdescripcioncategoria").classList = '';

    $("#txtnombrecategoria").attr('disabled', false);
    $("#txtdescripcioncategoria").attr('disabled', false);

    $("#txtnombrecategoria").attr('onblur', '');
    $("#txtdescripcioncategoria").attr('onblur', '');

    eliminarcampo("id_categoria");
    eliminarcampo("ID_SESSION");
    deleteActionController();

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "");

    $("#divformgenerico").attr('style', 'display: none');

}


function comprobarCategoria() {
    if (checkName("txtnombrecategoria", "errnombrecategoria") && checkDescription("txtdescripcioncategoria", "errdescripcioncategoria") &&
        checkFormat("txtnombrecategoria", "errnombrecategoria", "name") && checkFormat("txtdescripcioncategoria", "errdescripcioncategoria", "Descripcion")) {
        return true;
    } else {
        return false;
    }
}