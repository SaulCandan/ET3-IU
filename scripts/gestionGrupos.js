/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFilaGrupo(fila) {

    let atributosFunciones = ["'" +
        fila.id_grupo + "'", "'" +
        fila.nombre_grupo + "'", "'" +
        fila.descripcion_grupo +

        "'"
    ];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleGrupo(' + atributosFunciones +
        ')"> <img src="/images/consult.png" width="20" height="20" alt="Consultar"/></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarGrupo(' + atributosFunciones +
        ')"> <img src="/images/edit.png" width="20" height="20" alt="Editar"/></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarGrupo(' + atributosFunciones +
        ')"> <img src="/images/delete.png" width="20" height="20" alt="Eliminar"/></a></div>';

    var filaTabla = '<tr> <td style="display: none">' + fila.id_grupo +
        '</td> <td>' + fila.nombre_grupo +
        '</td> <td>' + fila.descripcion_grupo +
        '</td> <td>' + celdaAccionesDetalle +
        '</td> <td>' + celdaAccionesEditar +
        '</td> <td>' + celdaAccionesEliminar +
        '</td> </tr>';

    return filaTabla;
}

/**Función crea el formulario con los campos de action y controlador*/
function
obtenerListadoGrupos() {

    crearformoculto('formGrupo', 'javascript:getLisGrupos()');


    document.formGrupo.submit();

}

/**Función que llama al show all de usuarios*/
function getLisGrupos() {

    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    addActionControler(document.formGrupo, "search", "grupo");
    eliminarcampo('ID_SESSION');
    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {

        insertacampo(document.formGrupo, 'ID_SESSION', idSession);
        getFormGrupo()
            .then((response) => {
                if (response.ok == true) {
                    $("#datosGrupo").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var tr = construyeFilaGrupo(response.resource[i]);
                        $("#datosGrupo").append(tr);
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
// funcion addgrupo, recibe los datos del formulario formgenericogrupo y los envia al back
//*
function addgrupo() {
    var idSession = getCookie('idSession');
    insertacampo(document.formgenericogrupo, 'ID_SESSION', idSession);
    addActionControler(document.formgenericogrupo, "add", "grupo");

    var idioma = getCookie('lang');
    generarIdGrupo()
        .then((id_grupo) => {
            insertacampo(document.formgenericogrupo, 'id_grupo', id_grupo);

            $.ajax({
                method: "POST",
                url: "http://193.147.87.202/ET3_IU/noRest.php",
                data: $("#formgenericogrupo").serialize(),
            }).done(function(response) {
                if (response.ok == true) {
                    $("#datosGrupo").html("");
                    respuestaOKAjax(response.code);
                    resetearformulariogrupo();
                } else {
                    respuestaKOAjax(response.code);
                }

                setLang(idioma);

                obtenerListadoGrupos();


            });
        });
}

//
// Funcion para modificar un formulario generico para editar un grupo
//
function showInsertarGrupo() {

    // se resetea todo el formulario generico
    resetearformulariogrupo();
    limpiarMensajeError();
    obtenerListadoGrupos();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericogrupo").attr('onsubmit', 'javascript:return comprobarGrupo();');
    $("#formgenericogrupo").attr('action', 'javascript:addgrupo()');

    // rellenamos los onblur de los input que se validan

    $("#txtnombregrupo").attr('onblur', 'checkName("txtnombregrupo","errnombregrupo")');
    $("#txtdescripciongrupo").attr('onblur', 'checkDescription("txtdescripciongrupo","errdescripciongrupo")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/add.png");

}

//
// funcion deletegrupo, recibe los datos del formulario formdeletegenerico modificado para delete y los envia al back para borrarlo
//
function deleteGrupo() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericogrupo, 'ID_SESSION', idSession);
    addActionControler(document.formgenericogrupo, "delete", "grupo");
    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericogrupo").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosGrupo").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformulariogrupo();

        obtenerListadoGrupos();

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para borrar un grupo
//
function showEliminarGrupo(id_grupo, nombre_grupo, descripcion_grupo, ) {

    // se resetea todo el formulario generico
    resetearformulariogrupo();
    limpiarMensajeError();
    obtenerListadoGrupos();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericogrupo").attr('action', 'javascript:deleteGrupo();');
    $("#formgenericogrupo").attr('onsubmit', '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericogrupo, 'id_grupo', id_grupo);
    $("#txtnombregrupo").val(nombre_grupo);
    $("#txtdescripciongrupo").val(descripcion_grupo);

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombregrupo").attr('disabled', true);
    $("#txtdescripciongrupo").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/delete.png");

}

//
// funcion editgrupo, recibe los datos del formulario formdeletegenerico modificado para edit y los envia al back para editarlo
//
function editGrupo() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericogrupo, 'ID_SESSION', idSession);
    addActionControler(document.formgenericogrupo, "edit", "grupo");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericogrupo").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosGrupo").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformulariogrupo();
        obtenerListadoGrupos()

        setLang(idioma);

    });

}

//
// Funcion para modificar un formulario generico para editar una persona
//
function showEditarGrupo(id_grupo, nombre_grupo, descripcion_grupo, ) {

    // se resetea todo el formulario generico
    resetearformulariogrupo();
    limpiarMensajeError();
    obtenerListadoGrupos();
   
    

    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericogrupo").attr('action', 'javascript:editGrupo();');
    $("#formgenericogrupo").attr('onsubmit', 'javascript: return comprobarGrupo()');

    // rellenamos los value de los input 
    insertacampo(document.formgenericogrupo, 'id_grupo', id_grupo)
    $("#txtnombregrupo").val(nombre_grupo);
    $("#txtdescripciongrupo").val(descripcion_grupo);

    $("#txtnombregrupo").attr('onblur', 'checkName("txtnombregrupo","errnombregrupo",)');
    $("#txtdescripciongrupo").attr('onblur', 'checkDescription("txtdescripciongrupo","errdescripciongrupo")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/edit.png");

}

//
// Funcion para volver de ver el detalle de un grupo
//
function detalleGrupo() {

    var idioma = getCookie('lang');

    resetearformulariogrupo();

    obtenerListadoGrupos();

    setLang(idioma);
}

//
// Funcion para modificar un formulario generico para mostrar el detalle de un grupo
//
function showDetalleGrupo(id_grupo, nombre_grupo, descripcion_grupo, ) {

    // se resetea todo el formulario generico
    resetearformulariogrupo();
    limpiarMensajeError();
    obtenerListadoGrupos();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericogrupo").attr('action', 'javascript:detalleGrupo();');

    // rellenamos los value de los input 
    insertacampo(document.formgenericogrupo, 'id_grupo', id_grupo)
    $("#txtnombregrupo").val(nombre_grupo);
    $("#txtdescripciongrupo").val(descripcion_grupo);

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtnombregrupo").attr('disabled', true);
    $("#txtdescripciongrupo").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/back.png");

}

//*
// funcion searchpersona, recibe los datos del formulario formgenericogrupo y los envia al back
//*
function searchGrupo() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericogrupo, 'ID_SESSION', idSession);
    addActionControler(document.formgenericogrupo, "search", "grupo");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericogrupo").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosGrupo").html("");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFilaGrupo(response.resource[i]);
                $("#datosGrupo").append(tr);
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
function showBuscarGrupo() {
    var idioma = getCookie('lang');
    // se resetea todo el formulario generico
    resetearformulariogrupo();
    limpiarMensajeError();
    obtenerListadoGrupos();


    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericogrupo").attr('action', 'javascript:searchGrupo();');
    //$("#formgenericogrupo").attr('onsubmit' , 'javascript:searchGrupo()');

    // rellenamos los onblur de los input que se validan

    $("#txtnombregrupo").attr('onblur', '');
    $("#txtdescripciongrupo").attr('onblur', '');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/search.png");

    setLang(idioma);

}



function resetearformulariogrupo() {

    $("#formgenericogrupo").attr('action', '');
    $("#formgenericogrupo").attr('onsubmit', '');

    $("#txtnombregrupo").attr('style', '');
    $("#txtdescripciongrupo").attr('style', '');

    $("#txtnombregrupo").val('');
    $("#txtdescripciongrupo").val('');

    document.getElementById('errnombregrupo').textContent = '';
    document.getElementById('errdescripciongrupo').textContent = '';

    document.getElementById("errnombregrupo").classList = '';
    document.getElementById("errdescripciongrupo").classList = '';

    $("#txtnombregrupo").attr('disabled', false);
    $("#txtdescripciongrupo").attr('disabled', false);

    $("#txtnombregrupo").attr('onblur', '');
    $("#txtdescripciongrupo").attr('onblur', '');

    eliminarcampo("id_grupo");
    eliminarcampo("ID_SESSION");
    deleteActionController();

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "");

    $("#divformgenerico").attr('style', 'display: none');

}


function comprobarGrupo() {
    if (checkName("txtnombregrupo", "errnombregrupo") && checkDescription("txtdescripciongrupo", "errdescripciongrupo") &&
        checkFormat("txtnombregrupo", "errnombregrupo", "name") && checkFormat("txtdescripciongrupo", "errdescripciongrupo", "Descripcion")) {
        return true;
    } else {
        return false;
    }
}