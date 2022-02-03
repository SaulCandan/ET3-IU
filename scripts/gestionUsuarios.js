function construyeFilaUsuario(fila,nombre_grupo) {

    let atributosFunciones = ["'" +
        fila.id + "'", "'" +
        fila.dni_usuario + "'", "'" +
        fila.usuario + "'" ,"'"+
        fila.contrasena + "'" ,"'"+
        fila.id_grupo + "'", "'" + 
        fila.borrado_usuario + "'"
    ];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleUsuario(' + atributosFunciones +
        ')"> <img src="/images/consult.png" width="20" height="20" alt="Consultar"/></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarUsuario(' + atributosFunciones +
        ')"> <img src="/images/edit.png" width="20" height="20" alt="Editar"/></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarUsuario(' + atributosFunciones +
        ')"> <img src="/images/delete.png" width="20" height="20" alt="Eliminar"/></a></div>';

    var filaTabla = '<tr> <td style="display: none">' + fila.id +
         '</td> <td>' + fila.dni_usuario + 
         '</td> <td>' + fila.usuario +
         '</td> <td>' + nombre_grupo +
        '</td> <td>' + celdaAccionesDetalle +
        '</td> <td>' + celdaAccionesEditar +
        '</td> <td>' + celdaAccionesEliminar +
        '</td> </tr>';

    return filaTabla;
}


function obtenerListadoUsuarios() {

    crearformoculto('formUsuario', 'javascript:getLisUsuarios()');
    document.formUsuario.submit();

}

async function getLisUsuarios() {
    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    eliminarcampo('ID_SESSION');
    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {
        
        crearformoculto('formGrupo', '');
        addActionControler(document.formUsuario, "search", "usuario");
        addActionControler(document.formGrupo, "search", "grupo");
        insertacampo(document.formUsuario, 'ID_SESSION', idSession);
        insertacampo(document.formGrupo, 'ID_SESSION', idSession);
        
        var grupo = getFormGrupo();
        var usuario = getFormUsuario();
        Promise.all([usuario, grupo])
            .then(([response, grupos]) => {
                if (response.ok == true) {
                    $("#datosUsuario").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var nombregrupo;
                        for (var k = 0; k < grupos.resource.length; k++) {
                            if (response.resource[i].id_grupo == grupos.resource[k].id_grupo) {
                                nombregrupo = grupos.resource[k].nombre_grupo;
                            }
                        }
                        var tr = construyeFilaUsuario(response.resource[i], nombregrupo);
                        $("#datosUsuario").append(tr);
                    }
                    setLang(idioma);
                } else {
                    respuestaKOAjax(response.code);
                }

                deleteActionController();
            });
    }
}

function addusuario() {
    var idSession = getCookie('idSession');
    insertacampo(document.formgenericousuario, 'ID_SESSION', idSession);
    addActionControler(document.formgenericousuario, "add", "usuario");

    var idioma = getCookie('lang');
    generarIdusuario()
        .then((id) => {
            insertacampo(document.formgenericousuario, 'id', id);
            $.ajax({
                method: "POST",
                url: "http://193.147.87.202/ET3_IU/noRest.php",
                data: $("#formgenericousuario").serialize(),
            }).done(function(response) {
                if (response.ok == true) {
                    $("#datosUsuario").html("");
                    respuestaOKAjax(response.code);
                    resetearformulariousuario();
                } else {
                    respuestaKOAjax(response.code);
                }

                setLang(idioma);

                obtenerListadoUsuarios();
                resetearformulariousuario();

            });
        });
}

function showInsertarUsuario() {
    // se resetea todo el formulario generico
    resetearformulariousuario();
    limpiarMensajeError();
    obtenerListadoUsuarios();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericousuario").attr('onsubmit', 'javascript:return comprobarUsuario();');
    $("#formgenericousuario").attr('action', 'javascript:addusuario()');

    // rellenamos los onblur de los input que se validan
    fillComboGrupo("txtnombregrupo");
    $("#txtusuario").attr('onblur', 'checkName("txtusuario","errusuario")');
    $("#txtdni").attr('onblur', 'checkDni("txtdni","errFormatoDni")');
    $("#txtpassword").attr('onblur', 'checkPass("txtpassword","errpassword")');
    
    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/add.png");

}

function deleteUsuario() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericousuario, 'ID_SESSION', idSession);
    addActionControler(document.formgenericousuario, "delete", "usuario");
    var idioma = getCookie('lang');
    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericousuario").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformulariousuario();

        obtenerListadoUsuarios();

        setLang(idioma);

    });

}

function showEliminarUsuario(id,dni,usuario,contrasena,id_grupo,borrado_usuario) {

    resetearformulariousuario();
    limpiarMensajeError();
    obtenerListadoUsuarios();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericousuario").attr('action', 'javascript:deleteUsuario();');
    
    insertacampo(document.formgenericousuario,'dni_usuario',dni);
    $("#txtusuario").val(usuario);
    $("#txtdni").val(dni);
    $("#txtpassword").val(contrasena);
    $("#txtborradousuario").val(borrado_usuario);
    fillComboGrupo("txtnombregrupo", id_grupo);
    $("#txtborradousuario option[value='" + '"' + borrado_usuario +  '"'+ "']").attr("selected", true);
    
    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtusuario").attr('disabled', true);
    $("#txtdni").attr('disabled', true);
    $("#txtpassword").attr('disabled', true);
    $("#txtnombregrupo").attr('disabled', true);
    $("#txtborradousuario").attr('disabled', true);
    //cambiar icono submit

    $("#iconoAcciones").attr('src', "/images/delete.png");

}


function editUsuario() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericousuario, 'ID_SESSION', idSession);
    addActionControler(document.formgenericousuario, "edit", "usuario");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericousuario").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosUsuario").html("");
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformulariousuario();
        obtenerListadoUsuarios();

        setLang(idioma);

    });

}

function showEditarUsuario(id,dni,usuario,contrasena,id_grupo,borrado_usuario ) {

    // se resetea todo el formulario generico
    resetearformulariousuario();
    limpiarMensajeError();
    obtenerListadoUsuarios();
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericousuario").attr('action', 'javascript:editUsuario();');
    $("#formgenericousuario").attr('onsubmit', 'javascript: return comprobarUsuario()');

    // rellenamos los value de los input 
    insertacampo(document.formgenericousuario, 'id', id);
    $("#txtusuario").val(usuario);
    $("#txtdni").val(dni);
    $("#txtpassword").val(contrasena);
    $("#txtborradousuario").val(borrado_usuario);
    var opcione = document.createElement("option");
    opcione.value = "";
    opcione.text = "---";
    document.getElementById("txtnombregrupo").add(opcione);
    fillComboGrupo("txtnombregrupo", id_grupo);
    $("#txtborradousuario option[value='" + '"' + borrado_usuario +  '"'+ "']").attr("selected", true);

    $("#txtpassword").attr('disabled', true);

    $("#txtusuario").attr('onblur', 'checkName("txtusuario","errusuario")');
    $("#txtdni").attr('onblur', 'checkDni("txtdni","errFormatoDni")');
    $("#txtpassword").attr('onblur', 'checkPass("txtpassword","errpassword")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/edit.png");

}

function detalleUsuario() {

    var idioma = getCookie('lang');

    resetearformulariousuario();

    obtenerListadoUsuarios();

    setLang(idioma);
}

function showDetalleUsuario(id,dni,usuario,contrasena,id_grupo,borrado_usuario ) {

    // se resetea todo el formulario generico
    resetearformulariousuario();
    limpiarMensajeError();
    obtenerListadoUsuarios();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericousuario").attr('action', 'javascript:detalleUsuario();');
    $("#formgenericousuario").attr('onsubmit', '');

    // rellenamos los value de los input 
    $("#txtusuario").val(usuario);
    $("#txtdni").val(dni);
    $("#txtpassword").val(contrasena);
    $("#txtborradousuario").val(borrado_usuario);
    fillComboGrupo("txtnombregrupo", id_grupo);
    $("#txtborradousuario option[value='" + '"' + borrado_usuario +  '"'+ "']").attr("selected", true);


    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtusuario").attr('disabled', true);
    $("#txtdni").attr('disabled', true);
    $("#txtpassword").attr('disabled', true);
    $("#txtnombregrupo").attr('disabled', true);
    $("#txtborradousuario").attr('disabled', true);
    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/back.png");

}
function searchUsuario() {
    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    eliminarcampo('ID_SESSION');
    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {
        
        crearformoculto('formGrupo', '');
        addActionControler(document.formgenericousuario, "search", "usuario");
        addActionControler(document.formGrupo, "search", "grupo");
        insertacampo(document.formgenericousuario, 'ID_SESSION', idSession);
        insertacampo(document.formGrupo, 'ID_SESSION', idSession);
        
        var grupo = getFormGrupo();
        
        var usuario = searchFormUsuario();
        console.log($("#formgenericousuario").serialize());
        Promise.all([usuario, grupo])
            .then(([response, grupos]) => {
                if (response.ok == true) {
                    
                    $("#datosUsuario").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var nombregrupo;
                        for (var k = 0; k < grupos.resource.length; k++) {
                            if (response.resource[i].id_grupo == grupos.resource[k].id_grupo) {
                                nombregrupo = grupos.resource[k].nombre_grupo;

                            }
                        }
                        var tr = construyeFilaUsuario(response.resource[i], nombregrupo);
                        $("#datosUsuario").append(tr);
                    }
                    setLang(idioma);
                } else {
                    
                    respuestaKOAjax(response.code);
                }
                resetearformulariousuario();
                deleteActionController();
            });
    }
}

function showBuscarUsuario() {
    var idioma = getCookie('lang');
    // se resetea todo el formulario generico
    resetearformulariousuario();
    limpiarMensajeError();
    obtenerListadoUsuarios();
    
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericousuario").attr('action', 'javascript:searchUsuario();');
    var opcione = document.createElement("option");
    opcione.value = "";
    opcione.text = "---";
    document.getElementById("txtnombregrupo").add(opcione);
    fillComboGrupo("txtnombregrupo");

    
    
    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/search.png");

    setLang(idioma);

}

function resetearformulariousuario() {

    $("#formgenericousuario").attr('action', '');
    $("#formgenericousuario").attr('onsubmit', '');

    $("#txtusuario").attr('style', '');
    $("#txtdni").attr('style', '');
    $("#txtpassword").attr('style', '');
    $("#txtborradousuario").attr('style', '');


    $("#txtusuario").val('');
    $("#txtdni").val('');
    $("#txtpassword").val('');
    $("#txtborradousuario").val('');
    deleteoptionsSelect("txtnombregrupo");

    document.getElementById('errusuario').textContent = '';
    document.getElementById('errFormatoDni').textContent = '';
    document.getElementById('errpassword').textContent = '';

    document.getElementById("errusuario").classList = '';
    document.getElementById("errFormatoDni").classList = '';
    document.getElementById("errpassword").classList = '';

    $("#txtusuario").attr('disabled', false);
    $("#txtdni").attr('disabled', false);
    $("#txtpassword").attr('disabled', false);
    $("#txtnombregrupo").attr('disabled', false);
    $("#txtborradousuario").attr('disabled', false);


    $("#txtusuario").attr('onblur', '');
    $("#txtdni").attr('onblur', '');
    $("#txtpassword").attr('onblur', '');

    eliminarcampo("id");
    eliminarcampo("ID_SESSION");
    deleteActionController();

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "");

    $("#divformgenerico").attr('style', 'display: none');

}


function comprobarUsuario() {
    if (checkName("txtusuario", "errusuario") &&
        checkFormat("txtdni", "errFormatoDni", "dni") && checkPass("txtpassword", "errFormatoDni")) {
            encriptar("txtpassword")
        return true;
    } else {
        return false;
    }
}