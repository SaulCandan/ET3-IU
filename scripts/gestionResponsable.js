function construyeFilaResponsables(fila) {

    let atributosFunciones = ["'" +
        fila.dni_responsable + "'", "'" +
        fila.curriculum_responsable + "'", "'" +
        fila.numCuenta_responsable + "'", "'" +
        fila.borrado_responsable + "'" ];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleResponsable(' + atributosFunciones +
        ')"> <img src="/images/consult.png" width="20" height="20" alt="Consultar"/></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarResponsable(' + atributosFunciones +
        ')"> <img src="/images/edit.png" width="20" height="20" alt="Editar"/></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarResponsable(' + atributosFunciones +
        ')"> <img src="/images/delete.png" width="20" height="20" alt="Eliminar"/></a></div>';

    var ruta = "http://193.147.87.202/ET3_IU/noRest.php";
    ruta = ruta.substring(29, 0);
    ruta = ruta + 'curriculums/';
    

        var filaTabla = '<tr> <td>' + fila.dni_responsable +
        '</td> <td> <a href=\'' + ruta + fila.curriculum_responsable + '\'>' + fila.curriculum_responsable + '</a>' +
        '</td> <td>' + fila.numCuenta_responsable +
        '</td> <td>' + celdaAccionesDetalle +
        '</td> <td>' + celdaAccionesEditar +
        '</td> <td>' + celdaAccionesEliminar +
        '</td> </tr>';

    return filaTabla;
}

function obtenerListadoResponsables() {
 	
    crearformoculto('formResponsable', 'javascript:getLisResponsables()');

    addActionControler(document.formResponsable, "search", "responsable");
    eliminarcampo('ID_SESSION');
    document.formResponsable.submit();
    
}

async function getLisResponsables() {
    var idioma = getCookie('lang');
    var idSession = getCookie('idSession');
    
    if (idSession == null){
        errorAutenticado(idioma);
    } else { 

        insertacampo(document.formResponsable, 'ID_SESSION', idSession);

        getFormResponsable()
            .then((response) => {
                if (response.ok == true) {
                    $("#datosResponsable").html("");
                    for (var i = 0; i < response.resource.length; i++) {
                        var tr = construyeFilaResponsables(response.resource[i]);
                        $("#datosResponsable").append(tr);
                    }
                    setLang(idioma);
                } else {
                    respuestaKOAjax(response.code);
                }

                deleteActionController();
            });
    }
}

/**Función para añadir una Responsable*/
function addResponsable() {
    var idSession = getCookie('idSession');
    insertacampo(document.formgenericoResponsable, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoResponsable, "add", "responsable");
    var idioma = getCookie('lang');

    var formdata = $("#formgenericoResponsable").serialize();
    var file = $("#txtsubecurriculumresponsable")[0].files[0];
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
        $("#datosResponsable").html("");
        if (response.ok == true) {
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        setLang(idioma);
        resetearformularioresponsable();
        obtenerListadoResponsables();


    });
}

function showInsertarResponsable(){

    // se resetea todo el formulario generico
    resetearformularioresponsable();
    limpiarMensajeError();
    obtenerListadoResponsables();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoResponsable").attr('onsubmit' , 'javascript:return comprobarResponsable();');
    $("#formgenericoResponsable").attr('action' , 'javascript:addResponsable()');
    // rellenamos los onblur de los input que se validan
   
    $("#labeltxtcurriculumresponsable").attr('style', 'display:none');
    $("#txtcurriculumresponsable").attr('style', 'display:none');
    $("#txtcurriculumresponsable").attr('disabled', true);

    $("#txtdniresponsable").attr('onblur', 'checkDni("txtdniresponsable","errdniresponsable")');
    $("#txtsubecurriculumresponsable").attr('onblur', 'checkCurriculum("txtsubecurriculumresponsable","errsubecurriculumresponsable")');
    $("#txtnumCuentaresponsable").attr('onblur', 'checkIban("txtnumCuentaresponsable","errnumCuentaresponsable")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/add.png");

}
        
function deleteResponsable() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoResponsable,'ID_SESSION', idSession);
    addActionControler(document.formgenericoResponsable, "delete", "responsable");
    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoResponsable").serialize(),  
    }).done(function( response ) {
        $("#datosResponsable").html("");
        if (response.ok == true) {
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }

        resetearformularioresponsable(); 
        obtenerListadoResponsables();       
        setLang(idioma);

    });     

}

function showEliminarResponsable(dni_responsable, curriculum_responsable,numCuenta_responsable,borrado_responsable){

    // se resetea todo el formulario generico
    resetearformularioresponsable();
    limpiarMensajeError();
    obtenerListadoResponsables();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoResponsable").attr('action' , 'javascript:deleteResponsable();');
    insertacampo(document.formgenericoResponsable,"dni_responsable",dni_responsable);
    // rellenamos los value de los input 
    $("#txtdniresponsable").val(dni_responsable);
    $("#txtcurriculumresponsable").val(curriculum_responsable);
    $("#txtnumCuentaresponsable").val(numCuenta_responsable);
    $("#txtborradoresponsable").val(borrado_responsable);
    $("#txtborradoresponsable option[value='" + '"' + borrado_responsable +  '"' + "']").attr("selected", true);

    $("#labeltxtsubecurriculumresponsable").attr('style','display:none')
    $("#txtsubecurriculumresponsable").attr('style','display:none')
        
    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtdniresponsable").attr('disabled', true);
    $("#txtcurriculumresponsable").attr('disabled', true);
    $("#txtnumCuentaresponsable").attr('disabled', true);
    $("#txtborradoresponsable").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/delete.png");  
        
 }




function editResponsable() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoResponsable,'ID_SESSION', idSession);
    addActionControler(document.formgenericoResponsable, "edit", "responsable");

    var idioma = getCookie('lang');

    var formdata = $("#formgenericoResponsable").serialize();
    var file = $("#txtsubecurriculumresponsable")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);
    console.log($("#formgenericoResponsable").serialize());
    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: datos,
        contentType: false,
        processData: false,
    }).done(function( response ) {
        $("#datosResponsable").html("");
        if (response.ok == true) {
            respuestaOKAjax(response.code);
        } else {
            respuestaKOAjax(response.code);
        }
        resetearformularioresponsable(); 
        obtenerListadoResponsables(); 
             
        setLang(idioma);

    });     

}

//
// Funcion para modificar un formulario generico para editar una persona
//
function showEditarResponsable(dni_responsable,curriculum_responsable,numCuenta_responsable,borrado_responsable){
    
    resetearformularioresponsable();
    limpiarMensajeError();
    obtenerListadoResponsables();

    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoResponsable").attr('action' , 'javascript:editResponsable();');
    $("#formgenericoResponsable").attr('onsubmit' , 'javascript: return comprobarResponsable()');

    // rellenamos los value de los input 
    $("#txtdniresponsable").val(dni_responsable);
    $("#txtcurriculumresponsable").val(curriculum_responsable);
    $("#txtsubecurriculumresponsable").val(curriculum_responsable);
    $("#txtcurriculumresponsable").attr('disabled', true);
    $("#txtnumCuentaresponsable").val(numCuenta_responsable);
    $("#txtborradoresponsable").val(borrado_responsable);
    $("#txtborradoresponsable option[value='" + '"' + borrado_responsable +  '"' + "']").attr("selected", true);
    
    
    $("#txtdniresponsable").attr('disabled', true);
    
    $("#txtnumCuentaresponsable").attr('onblur', 'checkIban("txtnumCuentaresponsable","errnumCuentaresponsable")');
    $("#txtsubecurriculumresponsable").attr('onblur', 'checkCurriculum("txtsubecurriculumresponsable","errsubecurriculumresponsable")');

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/edit.png");  

}

function detalleResponsable(){

    var idioma = getCookie('lang');

    resetearformularioresponsable(); 

    obtenerListadoResponsables();
            
    setLang(idioma);    
}

function showDetalleResponsable(dni_responsable, curriculum_responsable,numCuenta_responsable,borrado_responsable){

    // se resetea todo el formulario generico
    resetearformularioresponsable();
    limpiarMensajeError();
    obtenerListadoResponsables();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoResponsable").attr('action' , 'javascript:detalleResponsable();');
    $("#formgenericoResponsable").attr('onsubmit' , '');

    // rellenamos los value de los input 
    insertacampo(document.formgenericoResponsable, 'dni_responsable', dni_responsable);
    $("#txtdniresponsable").val(dni_responsable);
    $("#txtnumCuentaresponsable").val(numCuenta_responsable);
    $("#txtcurriculumresponsable").val(curriculum_responsable);
    $("#txtsubecurriculumresponsable").attr('style','display:none');
    $("#labeltxtsubecurriculumresponsable").attr('style','display:none');
    $("#txtborradoresponsable").val(borrado_responsable);
    $("#txtborradoresponsable option[value='" + '"' + borrado_responsable +  '"' + "']").attr("selected", true);
    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtdniresponsable").attr('disabled', true);
    $("#txtcurriculumresponsable").attr('disabled', true);
    $("#txtnumCuentaresponsable").attr('disabled', true);
    $("#txtborradoresponsable").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/back.png");  

}




//*
// funcion searchpersona, recibe los datos del formulario formgenericoResponsable y los envia al back
//*
function searchResponsable() {

    var idSession = getCookie('idSession');

    insertacampo(document.formgenericoResponsable,'ID_SESSION', idSession);
    addActionControler(document.formgenericoResponsable, "search", "responsable");
    
    var idioma = getCookie('lang');
    console.log($("#formgenericoResponsable").serialize());
    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoResponsable").serialize(),  
    }).done(function( response ) {
        console.log($("#formgenericoResponsable").serialize());
        $("#datosResponsable").html("");
        if (response.ok == true) {
                for (var i = 0; i < response.resource.length; i++){
                    var tr = construyeFilaResponsables(response.resource[i]);
                    $("#datosResponsable").append(tr);
                }
        } else {
             respuestaKOAjax(response.code);
        }
        resetearformularioresponsable();
        setLang(idioma);
    });     

}

function showBuscarResponsable(){
    var idioma = getCookie('lang');
    // se resetea todo el formulario generico
    resetearformularioresponsable();
    limpiarMensajeError();
    obtenerListadoResponsables();
    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenerico").attr('style', 'display: block');
    $("#formgenericoResponsable").attr('action' , 'javascript:searchResponsable();');

    $("#labeltxtsubecurriculumresponsable").attr('style', 'display:none');
    $("#txtsubecurriculumresponsable").attr('style', 'display:none');
    $("#txtsubecurriculumresponsable").attr('disabled', true);

    // rellenamos los onblur de los input que se validan
    $("#txtdnireponsable").attr('onblur', '');
    $("#txtcurriculumresponsable").attr('onblur', '');
    $("#txtnumCuentaresponsable").attr('onblur', '');
    //cambiar icono submit
    $("#iconoAcciones").attr('src', "/images/search.png");
 
    setLang(idioma);
}


function resetearformularioresponsable(){

    $("#formgenericoResponsable").attr('action' , '');
    $("#formgenericoResponsable").attr('onsubmit' , '');

    $("#txtdniresponsable").attr('style', '');
    $("#txtcurriculumresponsable").attr('style', '');
    $("#txtsubecurriculumresponsable").attr('style', '');
    $("#txtnumCuentaresponsable").attr('style', '');

    
    $("#errdniresponsable").attr('style', '');
    $("#errcurriculumresponsable").attr('style', '');
    $("#errsubecurriculumresponsable").attr('style', '');
    $("#errnumCuentaresponsable").attr('style', '');

    $("#errdniresponsable").val('');
    $("#errcurriculumresponsable").val('');
    $("#errsubecurriculumresponsable").val('');
    $("#errnumCuentaresponsable").val('');

    $("#txtdniresponsable").val('');
    $("#txtcurriculumresponsable").val('');
    $("#txtsubecurriculumresponsable").val('');
    $("#txtnumCuentaresponsable").val('');
    $("#txtborradoresponsable").val('');

    document.getElementById('errdniresponsable').textContent = '';
    document.getElementById('errcurriculumresponsable').textContent = '';
    document.getElementById('errsubecurriculumresponsable').textContent = '';
    document.getElementById('errnumCuentaresponsable').textContent = '';
  
    document.getElementById("errdniresponsable").classList = '';
    document.getElementById("errnumCuentaresponsable").classList = '';
    document.getElementById("errcurriculumresponsable").classList = '';
    document.getElementById("errsubecurriculumresponsable").classList = '';
 

    $("#txtdniresponsable").attr('disabled', false);
    $("#txtcurriculumresponsable").attr('disabled', false);
    $("#txtsubecurriculumresponsable").attr('disabled', false);
    $("#txtnumCuentaresponsable").attr('disabled', false);
    $("#txtborradoresponsable").attr('disabled', false);

    $("#txtdniresponsable").attr('onblur', '');
    $("#txtcurriculumresponsable").attr('onblur', '');
    $("#txtsubecurriculumresponsable").attr('onblur', '');
    $("#txtnumCuentaresponsable").attr('onblur', '');

    $("#labeltxtcurriculumresponsable").attr('style', '');
    $("#txtcurriculumresponsable").attr('style', '');
    $("#labeltxtsubecurriculumresponsable").attr('style', '');
    $("#txtsubecurriculumresponsable").attr('style', '');

    eliminarcampo("ID_SESSION");
    deleteActionController();

    //cambiar icono submit
    $("#iconoAcciones").attr('src', ""); 
        
    $("#divformgenerico").attr('style', 'display: none');

}

function comprobarResponsable() {
    if (checkDni("txtdniresponsable", "errdniresponsable") && checkIban("txtnumCuentaresponsable", "errnumCuentaresponsable") && 
        checkCurriculum("txtsubecurriculumresponsable", "errsubecurriculumresponsable")) {
        return true;
    } else {
        return false;
    }
}