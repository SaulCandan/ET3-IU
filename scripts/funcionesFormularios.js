/**Función para crear un formulario oculto*/
function crearformoculto(name, action) {

    if ($("#" + name).length == 0) {

        var formu = document.createElement('form');
        document.body.appendChild(formu);
        formu.name = name;
        formu.action = action;
        formu.id = name;
        formu.style.display = "none";

    }

}

/**Función para insertar campos en el formulario a mayores*/
function insertacampo(form, name, value) {

    formulario = form;
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    input.className = name;
    formulario.appendChild(input);

}

/**Función para eliminar campos del formulario*/
function eliminarcampo(name) {

    $("." + name).remove();

}

/**Función que resetear los valores del formulario*/
function resetearFormulario(idFormulario, idElementoList) {

    document.getElementById(idFormulario).reset();

    idElementoList.forEach(function(idElemento) {
        document.getElementById(idElemento).style.borderColor = "#c8c8c8";
    });

}

/**Función añade al formulario genérico con los campos de action y controlador*/
function addActionControler(form, action, controller) {

    var accion = "";

    switch (action) {
        case 'add':
            accion = 'insertar';
            break;
        case 'delete':
            accion = 'borrar';
            break;
        case 'edit':
            accion = 'editar';
            break;
        case 'search':
            accion = 'buscar';
            break;
        case 'disconect':
            accion = 'desconectar';
            break;
        case 'auth':
            accion = 'estaAutenticado';
            break;
        case 'login':
            accion = 'login';
            break;
        case 'registrar':
            accion = 'registrar';
            break;
        case 'test':
            accion = 'test';
            break;
        case 'cambiar_contrasena':
            accion = 'cambiar_contrasena';
            break;
        case 'recuperar_contrasena':
            accion = 'recuperar_contrasena';
            break;
    }

    insertacampo(form, 'action', accion);
    insertacampo(form, 'controlador', controller);

}

/**Función que elimina del formulario accion y controlado*/
function deleteActionController() {

    eliminarcampo('action');
    eliminarcampo('controlador');

}

function includeCabecera() {

    includeMenuIdioma();
    includeUserDesconectar();
}

/**Función para incluir el menú de idioma*/
function includeUserDesconectar() {

    $("#UserDesconectar").html("");

    var UserDesconectar = '<div class="UserDesconectar">' +
        '<a onclick="desconectar();">Desconectar</a>' +
        '<label id="usuario"></label>' +
        '</div>';

    $("#UserDesconectar").append(UserDesconectar);
}

/**Función para incluir el menú de idioma*/
function includeMenuIdioma() {

    $("#menuIdioma").html("");

    var menuIdioma = '<div class="menuIdioma">' +
        '<a onclick="setLang(\'ES\')" class="es" id="es">ES</a>' +
        '<a onclick="setLang(\'EN\')" class="en" id="en">EN</a>' +
        '<a onclick="setLang(\'GA\')" class="ga" id="ga">GA</a>' +
        '</div>';

    $("#menuIdioma").append(menuIdioma);
}

async function fillComboEspacio(id, id_espacio) {
    var idSession = getCookie("idSession");
    crearformoculto('formEspacio', '');
    addActionControler(document.formEspacio, "search", "espacio");
    if (idSession == null) {
        errorAutenticado("02109", idioma);
        return false;
    } else {
        insertacampo(document.formEspacio, 'ID_SESSION', idSession);

        getFormEspacio()
            .then((res) => {
                if (res.ok) {
                    for (var i = 0; i < res.resource.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.value = res.resource[i].id_espacio;
                        opcion.text = res.resource[i].nombre_espacio;
                        document.getElementById(id).add(opcion);
                    }
                    if (id_espacio != null) {
                        $("#txtnombreespacio option[value='" + id_espacio + "']").attr("selected", true);
                    }
                } else {
                    respuestaKOAjax(res.code);
                }

            });
        return true;
    }

}

async function fillComboCategoria(id, id_categoria) {
    var idSession = getCookie('idSession');
    crearformoculto('formCategoria', '');
    addActionControler(document.formCategoria, "search", "categoria");
    if (idSession == null) {
        errorAutenticado("02109", idioma);
        return false;
    } else {
        insertacampo(document.formCategoria, 'ID_SESSION', idSession);

        getFormCategoria()
            .then((res) => {
                if (res.ok) {
                    for (var i = 0; i < res.resource.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.value = res.resource[i].id_categoria;
                        opcion.text = res.resource[i].nombre_categoria;
                        document.getElementById(id).add(opcion);
                    }
                    if (id_categoria != null) {
                        $("#txtnombrecategoria option[value='" + id_categoria + "']").attr("selected", true);
                    }
                } else {
                    respuestaKOAjax(res.code);
                }

            });
        return true;
    }

}

async function fillComboActividad(id, id_actividad) {
    var idSession = getCookie('idSession');
    crearformoculto('formActividad', '');
    addActionControler(document.formActividad, "search", "actividad");
    if (idSession == null) {
        errorAutenticado("02109", idioma);
        return false;
    } else {
        insertacampo(document.formActividad, 'ID_SESSION', idSession);

        getFormActividad()
            .then((res) => {
                if (res.ok) {
                    for (var i = 0; i < res.resource.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.value = res.resource[i].id_actividad;
                        opcion.text = res.resource[i].nombre_actividad;
                        document.getElementById(id).add(opcion);
                    }
                    if (id_actividad != null) {
                        $("#txtnombreactividad option[value='" + id_actividad + "']").attr("selected", true);
                    }
                } else {
                    respuestaKOAjax(res.code);
                }

            });
        return true;
    }

}



async function fillComboUsuario(id, id_usuario) {
    var idSession = getCookie('idSession');
    crearformoculto('formUsuario', '');
    addActionControler(document.formUsuario, "search", "usuario");
    if (idSession == null) {
        errorAutenticado("02109", idioma);
        return false;
    } else {
        insertacampo(document.formUsuario, 'ID_SESSION', idSession);

        getFormUsuario()
            .then((res) => {
                if (res.ok) {
                    for (var i = 0; i < res.resource.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.value = res.resource[i].id;
                        opcion.text = res.resource[i].usuario;
                        document.getElementById(id).add(opcion);
                    }
                    if (id_usuario != null) {
                        $("#txtnombreusuario option[value='" + id_usuario + "']").attr("selected", true);
                    }
                } else {
                    respuestaKOAjax(res.code);
                }

            });
        return true;
    }

}

async function fillComboGrupo(id, id_grupo) {
    var idSession = getCookie('idSession');
    crearformoculto('formGrupo', '');
    addActionControler(document.formGrupo, "search", "grupo");
    if (idSession == null) {
        errorAutenticado("02109", idioma);
        return false;
    } else {
        insertacampo(document.formGrupo, 'ID_SESSION', idSession);

        getFormGrupo()
            .then((res) => {
                if (res.ok) {
                    for (var i = 0; i < res.resource.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.value = res.resource[i].id_grupo;
                        opcion.text = res.resource[i].nombre_grupo;
                        document.getElementById(id).add(opcion);
                    }
                    if (id_grupo != null) {
                        $("#txtnombregrupo option[value='" + id_grupo + "']").attr("selected", true);
                    }
                } else {
                    respuestaKOAjax(res.code);
                }

            });
        return true;
    }

}

function respuestaKOAjax(codigo) {
    var idioma = getCookie('lang');
    document.getElementById("errmensaje").classList = '';
    $("#errmensaje").removeClass();
    $("#errmensaje").addClass(codigo);
    $("#imagenAviso").attr('src', '/images/errmsg.png');
    $("#imagenAviso").attr('alt', 'error');
    $("#MensajeRespuesta").attr('style', 'display: block');
    setLang(idioma);

}

function respuestaOKAjax(codigo) {
    var idioma = getCookie('lang');
    document.getElementById("errmensaje").classList = '';
    $("#errmensaje").addClass(codigo);
    $("#imagenAviso").attr('src', '/images/correct.png');
    $("#imagenAviso").attr('alt', 'correcto');
    $("#MensajeRespuesta").attr('style', 'display: block');
    setLang(idioma);
}

function limpiarMensajeError() {
    document.getElementById("errmensaje").classList = '';
    document.getElementById("errmensaje").textContent = '';
    $("#imagenAviso").attr('src', '');
    $("#imagenAviso").attr('alt', '');
    $("#MensajeRespuesta").attr('style', 'display: none');
}

function cerrar(id, ruta) {
    document.getElementById(id).classList = '';
    limpiarMensajeError();
    if (ruta != null) {
        window.location.href = "/index.html";
    }
}

async function getFormGrupo() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formGrupo").serialize(),
    });
}

async function getFormCategoria() {

    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formCategoria").serialize(),
    });
}

async function getFormUsuario() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formUsuario").serialize(),
    });
}

async function searchFormUsuario() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericousuario").serialize(),
    });
}

async function getFormActividad() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formActividad").serialize(),
    });
}

async function searchFormActividad() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoactividad").serialize(),
    });
}

async function getFormInscripcion() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formInscripcion").serialize(),
    });
}

async function searchFormInscripcion() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoInscripcion").serialize(),
    });
}

async function getFormResponsable() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formResponsable").serialize(),
    });
}

async function getFormEspacio() {   

    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formEspacio").serialize(),
    });
}

async function getFormId() {
    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formId").serialize(),
    });
}


async function generarIdGrupo() {
    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    var nuevoId = 0;
    crearformoculto('formId', '');
    addActionControler(document.formId, "search", "grupo");
    insertacampo(document.formId, 'ID_SESSION', idSession);
    return getFormId()
        .then(function(response) {
            if (response.ok == true) {
                var idActuales = [];
                for (var i = 0; i < response.resource.length; i++) {
                    idActuales.push(response.resource[i].id_grupo);
                }
                nuevoId = parseInt(idActuales[0]) + 1;
                while (idActuales.includes(nuevoId + "")) {
                    nuevoId = parseInt(nuevoId) + 1;
                }
                return nuevoId;
            }
            deleteActionController();

        });
}

async function generarIdEspacio() {
    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    var nuevoId = 0;
    crearformoculto('formId', '');
    addActionControler(document.formId, "search", "espacio");
    insertacampo(document.formId, 'ID_SESSION', idSession);
    return getFormId()
        .then(function(response) {
            if (response.ok == true) {
                var idActuales = [];
                for (var i = 0; i < response.resource.length; i++) {
                    idActuales.push(response.resource[i].id_espacio);
                }
                nuevoId = parseInt(idActuales[0]) + 1;
                while (idActuales.includes(nuevoId + "")) {
                    nuevoId = parseInt(nuevoId) + 1;
                }
                return nuevoId;
            }
            deleteActionController();

        });
}

async function generarIdCategoria() {
    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    var nuevoId = 0;
    crearformoculto('formId', '');
    addActionControler(document.formId, "search", "categoria");
    insertacampo(document.formId, 'ID_SESSION', idSession);
    return getFormId()
        .then(function(response) {
            if (response.ok == true) {
                var idActuales = [];
                for (var i = 0; i < response.resource.length; i++) {
                    idActuales.push(response.resource[i].id_categoria);
                }
                nuevoId = parseInt(idActuales[0]) + 1;
                while (idActuales.includes(nuevoId + "")) {
                    nuevoId = parseInt(nuevoId) + 1;
                }
                return nuevoId;
            }
            deleteActionController();

        });
}

async function generarIdusuario() {
    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    var nuevoId = 0;
    crearformoculto('formId', '');
    addActionControler(document.formId, "search", "usuario");
    insertacampo(document.formId, 'ID_SESSION', idSession);
    return getFormId()
        .then(function(response) {
            if (response.ok == true) {
                var idActuales = [];
                for (var i = 0; i < response.resource.length; i++) {
                    idActuales.push(response.resource[i].id);
                }
                nuevoId = parseInt(idActuales[0]) + 1;
                while (idActuales.includes(nuevoId + "")) {
                    nuevoId = parseInt(nuevoId) + 1;
                }
                return nuevoId;
            }
            deleteActionController();

        });
}

async function generarIdinscripcion() {
    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    var nuevoId = 0;
    crearformoculto('formId', '');
    addActionControler(document.formId, "search", "inscripcion");
    insertacampo(document.formId, 'ID_SESSION', idSession);
    return getFormId()
        .then(function(response) {
            if (response.ok == true) {
                var idActuales = [];
                for (var i = 0; i < response.resource.length; i++) {
                    idActuales.push(response.resource[i].id_inscripcion);
                }
                nuevoId = parseInt(idActuales[0]) + 1;
                while (idActuales.includes(nuevoId + "")) {
                    nuevoId = parseInt(nuevoId) + 1;
                }
                return nuevoId;
            }
            deleteActionController();

        });
}

async function generarIdactividad() {
    var idSession = getCookie('idSession');
    var nuevoId = 0;
    crearformoculto('formId', '');
    addActionControler(document.formId, "search", "actividad");
    insertacampo(document.formId, 'ID_SESSION', idSession);
    return getFormId()
        .then(function(response) {
            if (response.ok == true) {
                var idActuales = [];
                for (var i = 0; i < response.resource.length; i++) {
                    idActuales.push(response.resource[i].id_actividad);
                }
                nuevoId = parseInt(idActuales[0]) + 1;
                while (idActuales.includes(nuevoId + "")) {
                    nuevoId = parseInt(nuevoId) + 1;
                }
                return nuevoId;
            }
            deleteActionController();

        });
}

function deleteoptionsSelect(domElement) {

    var selector = document.getElementById(domElement);

    longitud = selector.length;

    for (var i = longitud; i >= 0; i--) {
        selector.remove(i);
    }

}