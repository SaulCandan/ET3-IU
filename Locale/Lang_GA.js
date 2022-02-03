arrayGA={

	// generales base de datos
	'00000' : 'Error al conectar con la base de datos. Contacte con su administrador',
	'00001' : 'Éxito al ejecutar el SQL',
    '00002' : 'Error al ejecutar el SQL',
    '00003' : 'El recordset está vacío',
    '00004' : 'El recordset no está vacío',

	/********************************************************************************/
	//					E R R O R E S   D E   A C C I O N E S
	/********************************************************************************/
	
	//GENERALES
	'BUSQUEDA_OK' : 'busca exitosa',
	'BUSQUEDA_KO' : 'Fallou a busca na base de datos',
	'session_disconnect_ok' : 'Sesión eliminada da base de datos e usuario desconectado',
	
	//REGISTRO 
	'registro_ok' : 'O usuario rexistrouse correctamente',
	'fallo_conexion_registrar' : 'Fallo de base de datos ao rexistrarse',
	
	//LOGIN
	'LOGIN_USU_CORRECTO' : 'inicio de sesión correcto',
	'USUARIOYCORREO_NO_COINCIDEN' : 'O nome de usuario e o correo electrónico introducidos non coinciden',

	//ADMIN
	'ADMIN_NO_SE_PUEDE_EDITAR' : 'Non está permitido modificar os datos do Administrador',
	'admin_no_se_puede_borrar' : 'Non se pode eliminar o administrador',

	//PERSONA
	'PERSONA_BORRAR_OK' : 'A persoa eliminouse correctamente',
	'PERSONA_INSERTAR_OK' : 'A persoa foi inserida correctamente',
	'ERROR_INSERTAR_PERSONA' : 'No se ha podido insertar a la persona',
	'ERROR_BORRAR_PERSONA ' : 'Non se puido inserir a persoa',
	'PERSONA_MODIFICAR_OK' : 'A persoa foi modificada correctamente',
	'ERROR_MODIFICAR_PERSONA' : 'Produciuse un erro ao modificar a persoa',
	'PERSONA_BORRAR_NO_EXISTE' : 'A persoa a eliminar non existe',
	'BORRAR_PERSONA_EXISTE_USUARIO' : 'Non se pode eliminar, hai un usuario con ese ID',

	//USUARIO
	'usuariorecuperacion' : 'Inicio de sesión de usuario correspondente',
	'usuarioConectado' : 'Usuario conectado: ',
	'REGISTRO_USUARIO_YA_EXISTE' : 'O usuario que queres rexistrar xa existe',
	'USUARIO_BORRAR_OK' : 'O usuario eliminouse correctamente',
	'USUARIO_LOGUEAR_OK' : 'O usuario iniciou sesión correctamente',
	'LOGIN_USUARIO_INCORRECTO' : 'O inicio de sesión de usuario introducido non existe',
	'DNI_USUARIO_NO_EXISTE_EN_PERSONA': 'O DNI debe existir persoalmente',
	'DNI_USUARIO_YA_EXISTE' : 'O Dni introducido xa existe',
	'USUARIO_INSERTAR_OK' : 'Usuario inserido correctamente',
	'ERROR_MODIFICAR_USUARIO' : 'Erro ao modificar o usuario',
	'ERROR_INSERTAR_USUARIO' : 'Produciuse un erro ao inserir o usuario',
	'ERROR_BORRAR_USUARIO' : 'Produciuse un erro ao eliminar o usuario',
	'ERROR_AUTENTICAR_USUARIO' : 'Erro de autenticación. non estás autenticado',
	'ADD_usuario_ya_existe' : 'O inicio de sesión do usuario xa existe',
	'NOMBRE_USUARIO_YA_EXISTE' : 'O inicio de sesión do usuario xa existe',
	'USUARIO_MODIFICAR_OK' : 'O usuario foi modificado correctamente',
	'usuario_modificado_ok' : 'O usuario modificouse correctamente',
	'NOMBRE_USUARIO_NO_EXISTE' : 'O nome de usuario introducido non existe',

	//CONTRASEÑA
	'LOGIN_CONTRASENA_INCORRECTO' : 'Contrasinal de inicio de sesión non válido',
	'CONTRASENA_CAMBIADA_EMAILKO' : 'Non se puido cambiar o contrasinal correctamente',
	'CONTRASENA_CAMBIADA_EMAILOK' : 'O contrasinal cambiouse correctamente',
	'NO_SE_PUEDE_CAMBIAR_PASSWORD_ADMIN' : 'Non se pode cambiar o contrasinal dun administrador',
	'CONTRASEÑA_CAMBIADA_OK' : 'O contrasinal cambiouse correctamente',
	'CONTRASEÑA_NO_CORRECTA' : 'O contrasinal introducido é incorrecto',

	//CORREO
	'correorecuperacion' : 'Correo electrónico de recuperación de contrasinal',
	'CORREO_ELECTRONICO_NO_EXISTE' : 'O correo electrónico introducido non existe',
	'REGISTRO_EMAIL_PERSONA_YA_EXISTE' : 'O correo electrónico introducido xa existe',
	'EMAIL_PERSONA_YA_EXISTE' : 'O correo electrónico introducido xa existe',

	//DNI
	'DNI_PERSONA_YA_EXISTE' : 'O DNI desa persoa xa existe na base de datos',
	'dni_admin_no_se_puede_modificar' : 'Non pode modificar o dni do administrador',
	'DNI_USUARIO_YA_EXISTE_EN_USUARIO' : 'O ID introducido xa existe en Usuario',
	'USUARIO_BORRAR_NO_EXISTE' : 'O usuario a eliminar non existe',
	'USUARIO_NO_AUTENTICADO' : 'Usuario non autenticado',
	
	
	//GRUPO
	'GRUPO_INSERTAR_OK' : 'Grupo inserido correctamente',
	'ERROR_INSERTAR_GRUPO' : 'Produciuse un erro ao inserir o grupo',
	'ERROR_MODIFICAR_GRUPO' : 'Produciuse un erro ao modificar o grupo',
	'ERROR_BORRAR_GRUPO ' : 'Produciuse un erro ao eliminar o grupo',
	'GRUPO_YA_EXISTE' : 'O grupo introducido xa existe',
	'GRUPO_MODIFICAR_OK' : 'Grupo modificado correctamente',
	'GRUPO_BORRAR_EXISTE_EN_USUARIO' : 'Non se pode eliminar, un usuario está nese grupo',
	'GRUPO_BORRAR_NO_EXISTE' : 'O grupo para eliminar non existe',
	'GRUPO_BORRAR_OK' : 'grupo eliminado correctamente',

	//CATEGORÍA
	'CATEGORIA_INSERTAR_OK' : 'Categoría inserida correctamente',
	'CATEGORIA_YA_EXISTE' : 'A categoría introducida xa existe',
	'CATEGORIA_MODIFICAR_OK' : 'Categoría modificada correctamente',
	'CATEGORIA_BORRAR_EXISTE_EN_ACTIVIDAD' : 'Esa categoría existe en Actividade',
	'CATEGORIA_BORRAR_NO_EXISTE' : 'A categoría para eliminar non existe',
	'CATEGORIA_BORRAR_OK' : 'A categoría eliminouse correctamente',
	'CATEGORIA_NO_EXISTE' : 'A categoría ten inerte non existe',

	//ESPACIO
	'ESPACIO_INSERTAR_OK' : 'Espazo inserido correctamente',
	'ESPACIO_YA_EXISTE' : 'O espazo con inserción xa existe',
	'ESPACIO_MODIFICAR_OK' : 'espazo modificado con éxito',
	'ESPACIO_BORRAR_EXISTE_EN_ACTIVIDAD' : 'O espazo para eliminar existe na actividade',
	'ESPACIO_BORRAR_NO_EXISTE' : 'O espazo para eliminar non existe',
	'ESPACIO_BORRAR_OK' : 'O espazo eliminouse correctamente',
	'ESPACIO_NO_EXISTE' : 'O espazo que tes inserido non existe',

	//RESPONSABLE
	'RESPONSABLE_INSERTAR_OK' : 'Responsable inserido correctamente',
	'RESPONSABLE_YA_EXISTE' : 'O xestor introducido xa existe',
	'RESPONSABLE_MODIFICAR_OK' : 'Responsable modificado correctamente',
	'RESPONSABLE_BORRAR_NO_EXISTE' : 'O responsable ten que eliminar non existe',
	'RESPONSABLE_BORRAR_OK' : 'O responsable eliminouse correctamente',

	//ACTIVIDAD
	'ACTIVIDAD_INSERTAR_OK' : 'A actividade inseriuse correctamente',
	'ACTIVIDAD_YA_EXISTE' : 'A actividade xa ten inserido a saída',
	'ACTIVIDAD_MODIFICAR_OK' : 'A actividade modificouse correctamente',
	'ACTIVIDAD_BORRAR_NO_EXISTE' : 'A actividade eliminou non existe',
	'ACTIVIDAD_BORRAR_OK' : 'A actividade eliminouse correctamente',
	'ACTIVIDAD_BORRAR_EXISTE_EN_INSCRIPCION' : 'A actividade a eliminar existe no rexistro',

	//INSCRIPCIONES
	'INSCRIPCION_INSERTAR_OK' : 'Rexistro inserido correctamente',
	'INSCRIPCION_ADD_YA_EXISTE' : 'A inscrición para engadir xa existe',
	'INSCRIPCION_ADD_ACTIVIDAD_NO_EXISTE' : 'A inscrición para engadir non existe',
	'INSCRIPCION_ADD_USUARIO_NO_EXISTE' : 'O usuario de rexistro non existe',
	'INSCRIPCION_MODIFICAR_OK' : 'O rexistro modificouse correctamente',
	'INSCRIPCION_EDITAR_INSCRIPCION_NO_EXISTE' : 'A inscrición ten que modificar non existe',
	'INSCRIPCION_EDITAR_ACTIVIDAD_NO_EXISTE' : 'Non é posible inscribirse nunha actividade que non existe',
	'INSCRIPCION_EDITAR_USUARIO_NO_EXISTE' : 'Non existe o usuario de inscrición',
	'INSCRIPCION_BORRAR_OK' : 'A inscrición eliminouse correctamente',
	'INSCRIPCION_BORRAR_NO_EXISTE' : 'A inscrición eliminouse correctamente',
	
	/********************************************************************************/
	//					C O R R E S P O N D E N C I A 
	/********************************************************************************/
	//idiomas
	'es' : 'Español',
	'ga' : 'Galego',
	'en' : 'Inglés',
	//MENUS
	'mi_perfil' : 'Meu Perfil',
	'inicio' : 'Inicio',
	'categorias' : 'Categorías',
	'actividades' : 'Actividades',
	'inscripciones' : 'Inscripcións',
	'usuarios' : 'Usuarios',
	'cerrar_session' : 'Pechar Sesión',
	'cerrar' : 'Pechar',
	'responsables' : 'Responsable',
	'personas' : 'Persoas',
	'espacios' : 'Espazos',
	'cambiarcontrasena' : 'Cambiar Contrasinal',
	'recuperarcontrasena' : 'Recuperar Contrasinal',
	'grupos' : 'Grupos',

	// usuario
	//- titulos
	'Inicio' : 'Inicio',
	'bienvenida' : 'Benvido a UI Arquitectura 2021/2022',
	'listUsers' : 'Benvido á táboa de mostra de usuario',
	'addForm' : 'Benvido ao formulario de inserción',
	'searchForm' : 'Benvido ao formulario de busca',
	'editForm' : 'Benvido ao formulario de edición',
	'deleteForm' : 'Benvido ao formulario de eliminación',
	'detailForm' : 'Benvido ao formulario de detalle',
	'GestUsu' : 'Xestión de usuarios',
	'saludoLOGIN': 'Acceder',
	'saludoREGISTRO' : 'Gravar',
	'datosRegistro' : 'Introduza os seguintes datos',
	'datosPersonales' : 'Información persoal',
	'datosUsuario' : 'Datos do usuario',
	//- atributos USUARIO
	'id_usuario' : 'Id do Usuario',
	'nombre_usuario' : 'Nome do Usuario',
	'usuario' : 'Usuario',
	'contrasena' : 'Contraseña do Usuario',
	'dni_usuario' : 'DNI',
	'id_grupo' : 'Grupo',
	'borrado_usuario' : 'Activo',

	'Consultar' : 'Consultar',
	'Editar' : 'Editar',
	'Eliminar' : 'Eliminar',
	'Buscar' : 'Buscar',
	'Insertar' : 'Engadir',
	'SI' : 'Sí',
	'NO' : 'Non',

	//- warnning bloqueo mayusculas
	'BLOQUEO_MAYUSCULAS' : 'Bloqueo de Mayúsculas activado',
	'campoObligatorio' : 'Campo Obligatorio',
	'denegado' : 'Negado',
	//- imagenes
	'iconEntrar' : 'Entrar',
	'iconRegistrar' : 'Registrar',
	'iconVolver' : 'Volver',
	'iconCerrar' : 'Cerrar',
	'iconGuardar' : 'Guardar',
	'iconBuscar' : 'Buscar',
	'iconEditar' : 'Editar',
	'iconEliminar' : 'Eliminar',
	'iconAdd' : 'Añadir',
	'iconDesconectar' : 'Desconectar',
	'iconAddUser' : 'Añadir Usuario',
	'iconSearchUser' : 'Buscar Usuarios',
	'iconDetailUser' : 'Detalle Usuario',
	'iconEditUser' : 'Editar Usuario',
	'iconDeleteUser' : 'Eliminar Usuario',
	'iconHideShow' : 'Mostrar/Ocultar Columnas',
	'iconRefresh' : 'Refrescar Tabla',
	'iconOrdenar' : 'Ordenar',
	'iconOk' : 'OK',
	'iconLogin' : 'Login',

	//- atributos persona
	'dni_persona' : 'DNI da Persoa',
	'nombre_persona' : 'Nome da Persoa',
	'apellidos_persona' : 'Apelidos da Persoa',
	'fechaNacimiento_persona' : 'Data de Nacemento da Persoa',
	'direccion_persona' : 'Enderezo da Persoa',
	'telefono_persona' : 'Teléfono da Persoa',
	'email_persona' : 'Correo electrónico da Persoa',
	'foto_persona' : 'Imaxe da Persoa',
	'subefoto_persona' : 'Se quere agadir ou cambiar a imaxe',
	'esCeliaco_persona' : 'Persoa Celíaca',
	'borrado_persona' : 'Persoa Inactiva',

	// atributos GRUPO
	'id_grupo' : 'Código do Grupo',
	'nombre_grupo' : 'Nome do Grupo',
	'descripcion_grupo' : 'Descripción do Grupo',

	//atributos CATEGORÍA
	'nombre_categoria' : 'Nome da categoría',
	'descripcion_categoria' : 'Descrición',

	//atributos ESPACIO
	'nombre_espacio' : 'Nome do Espacio',
	'descripcion_espacio' : 'Descrición',
	
	//atributos de INSCRIPCIONES
	'id_inscripcion' : 'Inscrición',
	'nombre_actividad' : 'Nome da actividade',
	'fecha_solicitud_inscripcion' : 'Data de solicitude',
	'documento_pago' : 'Documento de pago',
	'fecha_pago_inscripcion' : 'Data de pago',
	'fecha_aceptacion_inscripcion' : 'Data de aceptación',
	'id_grupo' : 'Código de grupo',

	//Atributos REGISTRO
	'tituloRegistro' : 'Rexístrate na aplicación agora!',
	'substituloRegistro' : 'Unha vez rexistrado poderás consultar as actividades dispoñibles e inscribirte nas mesmas',
	'tituloRegistro2' : 'Información persoal',
	'subtituloRegistro2' : 'Necesitamos unha serie de datos básicos para crear a túa conta',
	'nombreRegistro' : 'Nome *',
	'apellidosRegistro' : 'Primeiro e Segundo Apelidos *',
	'dniRegistro' : 'Número de identificación *',
	'fechaRegistro' : 'Data de nacemento *',
	'direccionRegistro' : 'Dirección actual *',
	'telefonoRegistro' : 'Número de teléfono *',
	'emailRegistro' : 'Correo electrónico *',
	'es_CeliacoRegistro' : 'Vostede é celíaco? *',
	'fotoRegistro' : 'Foto (Opcional)',
	'tituloDatosRegistro' : 'Datos de acceso',
	'substituloDatosRegistro' : 'Estes son os datos que se utilizarán como credenciais para acceder á aplicación',
	'nombreUsuarioRegistro' : 'Nome de usuario *',
	'contraseñaRegistro' : 'Contrasinal *',
	'contraseña2Registro' : 'Repite o contrasinal *',
	'fraseMenuRegistro' : 'Aplicación de xestión de rexistro nas actividades',
	
	//atributos ACTIVIDADES
	'nombre_actividad' : 'Nome da actividade',
	'descripcion_actividad' : 'Descrición',
	'precio_actividad' : 'Prezo',
	'numPlazas_actividad' : 'Número de prazas',
	'color_actividad' : 'Cor da actividade',
	'color_nombre_actividad' : 'Colorea o nome da actividade',
	'id_espacio' : 'Espazo',
	'id_categoria' : 'Categoría',
	'nombre_categoria' : 'Categoría',
	'nombre_espacio' : 'Espazo',

	//atributos RESPONSABLE
	'dni_responsable' : 'DNI do responsable',
	'curriculum_responsable' : 'Curriculum',
	'numCuenta_responsable' : 'Número de conta',
	'borrado_responsable' : 'Activo',


	//Atrinutos PRINCIPAL
	'actividadesPrincipal' : 'Actividades',
	'espaciosPrincipal' : 'Espazos',
	'categoriasPrincipal' : 'Categorías',
	'usuariosPrincipal' : 'Usuarios',
	'personasPrincipal' : 'Persoas',
	'gruposPrincipal' : 'Grupos',
	'responsablesPrincipal' : 'Responsable',
	'inscripcionesPrincipal' : 'Inscricións',

	//Atributos LOGIN
	'olvidarContraseña' : 'Esqueceches o contrasinal?',
	'olvidarContraseña2' : 'tenta recuperar contrasinal',

	//Atributo CAMBIAR CONTRASEÑA
	'antiguaContraseña' : 'Antiga contraseña',
	'nuevaContraseña' : 'Nova COntraseña',

	//************************************************************************************************
	// Errores Atributos en General
	//************************************************************************************************

	'02100' : 'Produciuse un erro ao inserir o usuario',
	'02101' : 'O inicio de sesión do usuario xa existe',
	'02102' : 'O usuario non existe',
	'02103' : 'O contrasinal non é correcto',
	'02104' : 'Non se pode rexistrar porque o correo electrónico xa existe',
	'02105' : 'Non se pode rexistrar porque o usuario xa existe',
	'02106' : 'Produciuse un erro ao inserir o usuario',
	'02107' : 'Erro ao modificar o usuario',
	'02108' : 'Produciuse un erro ao eliminar o usuario',
	'02109' : 'Acceso denegado!!!!!!!!! Necesitas autenticarte',
	'02127' : 'Produciuse un erro ao eliminar un usuario administrador',
	//-exito
	'02001' : 'Éxito ao inserir o usuarioo',
	'02002' : 'O usuario modificouse correctamente',
	'02003' : 'O usuario eliminouse correctamente',
	'02004' : 'Usuario rexistrado correctamente',
	'02005' : 'O usuario iniciou sesión correctamente',
	// errores de formato
	//Nombre de Usuario
	'02110' : 'O tamaño do nome  non pode ser inferior a 3',
	'02111' : 'O tamaño do nome  non pode ser superior a 45',
	'02112' : 'O nome de usuario non pode conter máis que letras e números',
	//Contraseña
	'02113' : 'O tamaño do contrasinal do usuario non pode ser inferior a 3',
	'02114' : 'O tamaño do contrasinal do usuario non pode ser superior a 45',
	'02115' : 'O contrasinal do usuario non pode conter máis que letras e números', 
	//Nombre
	'02154' : 'O  nome só pode conter letras',	
	//Apellidos
	'02116' : 'Os apelidos do usuario non poden ser inferiores a 3', 	
	'02128' : 'Os apelidos non poden ser superiores a 100',
	'02118' : 'Os apelidos do usuario non poden conter máis que letras', 	
	//Email
	'02119' : 'O correo electrónico do usuario non pode ser inferior a 11', 	
	'02120' : 'O correo electrónico do usuario non pode ser superior a 45', 	
	'02121' : 'O correo electrónico do usuario non pode conter máis caracteres que os dun correo electrónico', 
	'02122' : 'O administrador non pode ser diferente de si ou non',
	
	'02123' : 'Activo non pode ser diferente de si ou non',
	'02124' : 'Seguridade do contrasinal comprometida. Contrasinal cifrado curto',
	'02125' : 'Seguridade do contrasinal comprometida. Contrasinal cifrado longo',
	'02126' : 'Seguridade do contrasinal comprometida. Non se permiten caracteres de contrasinal cifrados',
	//Contraseña2 de comprobacion 
	'02127' : 'Os contrasinais non coinciden',
	
	//Dni
	'02129' : 'O DNI debe conter 9 díxitos',
	'02130' : 'O DNI debe ter un formato e unha letra correctos',
	//Direccion
	'02131' : 'O enderezo non pode ser inferior a 3 díxitos',
	'02132' : 'O enderezo non pode ser superior a 200 díxitos',
	'02133' : 'O enderezo só pode ter letras (acentuadas e maiúsculas incluídas), números e espazos',
	//Telefono
	'02134' : 'O teléfono debe ter un mínimo e un máximo de 9 díxitos',
	'02135' : 'O teléfono ten que ter só números e ser válido en España',
	//Foto
	'02136' : 'Na foto só se permiten extensións .jpg e .png',
	'02137' : 'A foto non pode superar os 200 MB',
	'02138' : 'O nome da foto non pode conter menos de 5 caracteres',
	'02139' : 'O nome da foto non pode conter máis de 100 caracteres',
 	//Curriculum
	'02140' : 'O currículo debe enviarse cunha extensión .pdf',
	'02141' : 'O nome do currículo non pode ter menos de 5 caracteres',
	'02142' : 'O nome do currículo non debe ter máis de 200 caracteres',
	'02143' : 'O nome do currículo só pode incluír letras e números máis o "."',
	//IBAN
	'02144' : 'O IBAN debe ter exactamente 24 caracteres',
	'02145' : 'O IBAN só admite letras maiúsculas e números seguindo o formato IBAN',
	//Descripción
	'02146' : 'A descrición debe ter polo menos 20 caracteres',
	'02147' : 'A descrición debe ter menos de 200 caracteres',
	'02148' : 'A descrición debe ter só letras (acentuadas e maiúsculas incluídas) e espazos',
	//Precio
	'02149' : 'O prezo debe ter un máximo de 4 enteiros e un máximo de dous decimais separados por 1 punto',
	//Numero de Plazas
	'02150' : 'O número de asentos debe ter polo menos 1 díxitos',
	'02151' : 'O número de asentos debe ser un número entre 1 e 40',
	'02155' : 'O número de asentos debe ser un número',
	//Color
	'02152' : 'Debe ter exactamente 7 caracteres',
	'02153' : 'Debe ser un # seguido de 6 valores hexadecimais ',
	//Fecha
	'02170' : 'A data non pode ser maior que a data actual',
	'02171' : 'A data de pagamento non pode ser anterior á data da solicitude',
	'02172' : 'A data de aceptación non pode ser anterior á data de pagamento',
	//
	//test
	'PRUEBA' : 'Prueba',
	'VALORESPERADO' : 'Valor Esperado',
	'VALOROBTENIDO' : 'Valor Obtenido',
	'DATOS' : 'Datos',
	'EXITO' : 'Éxito',
	'session_stored_ok' : 'Sesión guardada en BD',
	'session_stored_fail' : 'No existe la sesión en BD',
	'user_in_session' : 'Usuario con sesión activa',
	'session_disconnect_ok' : 'Sesión eliminada de BD y usuario desconectado',
}