arrayES={

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
	'BUSQUEDA_OK' : 'Búsqueda correcta',
	'BUSQUEDA_KO' : 'Falló la búsqueda en la base de datos',
	'session_disconnect_ok' : 'Sesión eliminada de BD y usuario desconectado',
	
	//REGISTRO 
	'registro_ok' : 'El usuario ha sido registrado correctamente',
	'fallo_conexion_registrar' : 'Fallo de BD al realizar el registro',
	
	//LOGIN
	'LOGIN_USU_CORRECTO' : 'Login correcto',
	'USUARIOYCORREO_NO_COINCIDEN' : 'El usuario y email introducidos no coinciden',

	//ADMIN
	'ADMIN_NO_SE_PUEDE_EDITAR' : 'No esta permitido modificar datos del Administrador',
	'admin_no_se_puede_borrar' : 'El administrador no se puede borrar',

	//PERSONA
	'PERSONA_BORRAR_OK' : 'La persona ha sido borrada correctamente',
	'PERSONA_INSERTAR_OK' : 'La persona ha sido insertada correctamente',
	'ERROR_INSERTAR_PERSONA' : 'No se ha podido insertar a la persona',
	'ERROR_BORRAR_PERSONA ' : 'Error al borrar la persona',
	'PERSONA_MODIFICAR_OK' : 'La persona ha sido modificada correctamente',
	'ERROR_MODIFICAR_PERSONA' : 'Error al modificar la persona',
	'PERSONA_BORRAR_NO_EXISTE' : 'La persona a borrar no existe',
	'BORRAR_PERSONA_EXISTE_USUARIO' : 'No se puede borrar, existe un usuario con ese dni',

	//USUARIO
	'usuariorecuperacion' : 'Login de usuario correspondiente',
	'usuarioConectado' : 'Usuario conectado: ',
	'REGISTRO_USUARIO_YA_EXISTE' : 'El usuario que quieres registrar ya existe',
	'USUARIO_BORRAR_OK' : 'El usuario ha sido borrado correctamente',
	'USUARIO_LOGUEAR_OK' : 'Usuario logueado correctamente',
	'LOGIN_USUARIO_INCORRECTO' : 'El Login usuario introducido no existe',
	'DNI_USUARIO_NO_EXISTE_EN_PERSONA': 'El DNI debería existir en persona',
	'DNI_USUARIO_YA_EXISTE' : 'El Dni introducido ya existe',
	'USUARIO_INSERTAR_OK' : 'Usuario insertado correctamente',
	'ERROR_MODIFICAR_USUARIO' : 'Error al modificar el usuario',
	'ERROR_INSERTAR_USUARIO' : 'Error al insertar el usuario',
	'ERROR_BORRAR_USUARIO' : 'Error al borrar el usuario',
	'ERROR_AUTENTICAR_USUARIO' : 'Error de autenticación. No estás autenticado',
	'ADD_usuario_ya_existe' : 'El login de usuario ya existe',
	'NOMBRE_USUARIO_YA_EXISTE' : 'El nombre de Usuario introducido ya existe',
	'USUARIO_MODIFICAR_OK' : 'El usuario ha sido modificado correctamente',
	'usuario_modificado_ok' : 'Usuario modificado correctamente',
	'NOMBRE_USUARIO_NO_EXISTE' : 'El nombre de usuario introducido no existe',

	//CONTRASEÑA
	'LOGIN_CONTRASENA_INCORRECTO' : 'Contraseña del Login inválida',
	'CONTRASENA_CAMBIADA_EMAILKO' : 'La contraseña no se ha podido cambiar correctamente',
	'CONTRASENA_CAMBIADA_EMAILOK' : 'La contraseña ha sido cambiada correctamente',
	'NO_SE_PUEDE_CAMBIAR_PASSWORD_ADMIN' : 'No se puede cambiar la contraseña de un Administrador',
	'CONTRASEÑA_CAMBIADA_OK' : 'La contraseña ha sido cambiada correctamente',
	'CONTRASEÑA_NO_CORRECTA' : 'La contraseña introducida es incorrecta',

	//CORREO
	'correorecuperacion' : 'Correo de recuperación de contraseña',
	'CORREO_ELECTRONICO_NO_EXISTE' : 'El email introducido no existe',
	'REGISTRO_EMAIL_PERSONA_YA_EXISTE' : 'El email introducido ya existe',
	'EMAIL_PERSONA_YA_EXISTE' : 'EL email introducido ya existe',

	//DNI
	'DNI_PERSONA_YA_EXISTE' : 'El dni de esa persona ya existe en la base de datos',
	'dni_admin_no_se_puede_modificar' : 'No se puede modificar el dni del admin',
	'DNI_USUARIO_YA_EXISTE_EN_USUARIO' : 'El dni introducido ya existe en Usuario',
	'USUARIO_BORRAR_NO_EXISTE' : 'El usuario a borrar no existe',
	'USUARIO_NO_AUTENTICADO' : 'Usuario no autenticado',
	
	
	//GRUPO
	'GRUPO_INSERTAR_OK' : 'Grupo insertado correctamente',
	'ERROR_INSERTAR_GRUPO' : 'Error al insertar el grupo',
	'ERROR_MODIFICAR_GRUPO' : 'Error al modificar el grupo',
	'ERROR_BORRAR_GRUPO ' : 'Error al borrar el grupo',
	'GRUPO_YA_EXISTE' : 'EL grupo introducido ya existe',
	'GRUPO_MODIFICAR_OK' : 'Grupo modificado correctamente',
	'GRUPO_BORRAR_EXISTE_EN_USUARIO' : 'No se puede borrar, un usuario está en ese grupo',
	'GRUPO_BORRAR_NO_EXISTE' : 'El grupo a borrar no existe',
	'GRUPO_BORRAR_OK' : 'Grupo borrado correctamente',

	//CATEGORÍA
	'CATEGORIA_INSERTAR_OK' : 'Categoría insertada correctamente',
	'CATEGORIA_YA_EXISTE' : 'La categoría introducida ya existe',
	'CATEGORIA_MODIFICAR_OK' : 'Categoría modificada correctamente',
	'CATEGORIA_BORRAR_EXISTE_EN_ACTIVIDAD' : 'Esa categoría existe en Actividad',
	'CATEGORIA_BORRAR_NO_EXISTE' : 'La categoría a eliminar no existe',
	'CATEGORIA_BORRAR_OK' : 'Categoría eliminada correctamente',
	'CATEGORIA_NO_EXISTE' : 'La categoría ha inertar no existe',

	//ESPACIO
	'ESPACIO_INSERTAR_OK' : 'Espacio insertado correctamente',
	'ESPACIO_YA_EXISTE' : 'El espacio ha insertar ya xiste',
	'ESPACIO_MODIFICAR_OK' : 'Espacio modificado correctamente',
	'ESPACIO_BORRAR_EXISTE_EN_ACTIVIDAD' : 'El espacio a borrar existe en actividad',
	'ESPACIO_BORRAR_NO_EXISTE' : 'El espacio a borrar no existe',
	'ESPACIO_BORRAR_OK' : 'Espacio eliminado correctamente',
	'ESPACIO_NO_EXISTE' : 'El espacio ha insertar no existe',

	//RESPONSABLE
	'RESPONSABLE_INSERTAR_OK' : 'Responsable insertado correctamente',
	'RESPONSABLE_YA_EXISTE' : 'El responsable introducido ya existe',
	'RESPONSABLE_MODIFICAR_OK' : 'Responsable modificado correctamente',
	'RESPONSABLE_BORRAR_NO_EXISTE' : 'El responsable ha eliminar no existe',
	'RESPONSABLE_BORRAR_OK' : 'Responsable eliminado correctamente',

	//ACTIVIDAD
	'ACTIVIDAD_INSERTAR_OK' : 'Actividad insertada correctamente',
	'ACTIVIDAD_YA_EXISTE' : 'La actividad ha insertar ya exite',
	'ACTIVIDAD_MODIFICAR_OK' : 'Activida modificada correctamente',
	'ACTIVIDAD_BORRAR_NO_EXISTE' : 'La actividad ha eliminar no existe',
	'ACTIVIDAD_BORRAR_OK' : 'Actividad eliminada correctamente',
	'ACTIVIDAD_BORRAR_EXISTE_EN_INSCRIPCION' : 'La actividad a eliminar existe en inscripción',

	//INSCRIPCIONES
	'INSCRIPCION_INSERTAR_OK' : 'Inscripción insertada correctamente',
	'INSCRIPCION_ADD_YA_EXISTE' : 'La inscripción a añadir ya existe',
	'INSCRIPCION_ADD_ACTIVIDAD_NO_EXISTE' : 'La inscripción a añadir no existe',
	'INSCRIPCION_ADD_USUARIO_NO_EXISTE' : 'EL usuario de la inscripción no existe',
	'INSCRIPCION_MODIFICAR_OK' : 'Inscripción modificada correctamente',
	'INSCRIPCION_EDITAR_INSCRIPCION_NO_EXISTE' : 'La inscripción ha modificar no existe',
	'INSCRIPCION_EDITAR_ACTIVIDAD_NO_EXISTE' : 'No es posible inscribirse en una actividad que no existe',
	'INSCRIPCION_EDITAR_USUARIO_NO_EXISTE' : 'El usuario de la inscripción no existe',
	'INSCRIPCION_BORRAR_OK' : 'Incripción eliminada correctamente',
	'INSCRIPCION_BORRAR_NO_EXISTE' : 'La inscripción ha eliminar no existe',
	

	/********************************************************************************/
	//					C O R R E S P O N D E N C I A 
	/********************************************************************************/
	//idiomas
	'es' : ' Español ',
	'ga' : ' Gallego ',
	'en' : ' Inglés ',
	
	//MENUS
	'mi_perfil' : 'Mi Perfil',
	'inicio' : 'Inicio',
	'categorias' : 'Categorías',
	'actividades' : 'Actividades',
	'inscripciones' : 'Inscripciones',
	'usuarios' : 'Usuarios',
	'cerrar_session' : 'Cerrar Sesión',
	'cerrar' : 'Cerrar',
	'responsables' : 'Responsables',
	'personas' : 'Personas',
	'espacios' : 'Espacios',
	'grupos' : 'Grupos',
	'cambiarcontrasena' : 'Cambiar Contraseña',
	'recuperarcontrasena' : 'Recuperar Contraseña',
	// usuario
	//- titulos
	'Inicio' : 'Inicio',
	'bienvenida' : 'Bienvenido a la arquitectura de IU 2021/2022',
	'listUsers' : 'Bienvenido a la tabla de muestra de usuarios',
	'addForm' : 'Bienvenidos al formulario de inserción',
	'searchForm' : 'Bienvenidos al formulario de búsqueda',
	'editForm' : 'Bienvenidos al formulario de edición',
	'deleteForm' : 'Bienvenidos al formulario de borrado',
	'detailForm' : 'Bienvenidos al formulario de detalle',
	'GestUsu' : 'Gestión de Usuarios',
	'saludoLOGIN': 'Iniciar Sesión',
	'saludoREGISTRO' : 'Registro',
	'datosRegistro' : 'Introduzca los siguientes datos',
	'datosPersonales' : 'Datos personales',
	'datosUsuario' : 'Datos usuario',
	//- Tabla de Usuariosatributos
	'id_usuario' : 'Id de Usuario',
	'usuario' : 'Usuario',
	'contrasena' : 'Contraseña de Usuario',
	'dni_usuario' : 'DNI',
	'id_grupo' : 'Grupo',
	'borrado_usuario' : 'Activo',
	//Funciones generales CRUD
	'Consultar' : 'Consultar',
	'Editar' : 'Editar',
	'Eliminar' : 'Eliminar',
	'Buscar' : 'Buscar',
	'Insertar' : 'Añadir',
	'SI' : 'Sí',
	'NO' : 'No',

	//- warnning bloqueo mayusculas
	'BLOQUEO_MAYUSCULAS' : 'Bloqueo de Mayúsculas activado',
	'campoObligatorio' : 'Campo Obligatorio',
	'denegado' : 'Denegado',
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

	//- atributos PERSONA
	'dni_persona' : 'DNI de Persona',
	'nombre_persona' : 'Nombre de Persona',
	'apellidos_persona' : 'Apellidos de Persona',
	'fechaNacimiento_persona' : 'Fecha de Nacimiento de Persona',
	'direccion_persona' : 'Dirección de Persona',
	'telefono_persona' : 'Teléfono de Persona',
	'email_persona' : 'Correo electrónico de Persona',
	'foto_persona' : 'Foto de Persona',
	'subefoto_persona' : 'Si quiere añadir o cambiar la foto',
	'esCeliaco_persona' : 'Persona Celíaca',
	'borrado_persona' : 'Persona Inactiva',

	// atributos GRUPO
	'id_grupo' : 'Código de Grupo',
	'nombre_grupo' : 'Nombre de Grupo',
	'descripcion_grupo' : 'Descripción de Grupo',

	//atributos CATEGORÍA
	'nombre_categoria' : 'Nombre de la Categoría',
	'descripcion_categoria' : 'Descripción',

	//atributos ESPACIO
	'nombre_espacio' : 'Nombre del Espacio',
	'descripcion_espacio' : 'Descripción',
	
	//atributos INSCRIPCIONES
	'id_inscripcion' : 'Inscripcion',
	'nombre_actividad' : 'Nombre de la Actividad',
	'nombre_usuario' : 'Nombre de Usuario',
	'usuario' : 'Usuario',
	'fecha_solicitud_inscripcion' : 'Fecha de Solicitud',
	'documento_pago' : 'Documento de Pago',
	'fecha_pago_inscripcion' : 'Fecha de Pago',
	'fecha_aceptacion_inscripcion' : 'Fecha de Aceptación',
	'id_grupo' : 'Código de Grupo',

	//Atributos REGISTRO
	'tituloRegistro' : '¡Regístrate en la aplicación ahora!',
	'substituloRegistro' : 'Una vez que te has registrado podrás consultar las actividades disponibles e inscribirte en ellas',
	'tituloRegistro2' : 'Datos Personales',
	'subtituloRegistro2' : 'Necesitamos una serie de datos básicos para crear tu cuenta',
	'nombreRegistro' : 'Nombre *',
	'apellidosRegistro' : 'Primer y Segundo Apellido *  ',
	'dniRegistro' : 'Número de DNI *  ',
	'fechaRegistro' : ' Fecha de nacimiento *',
	'direccionRegistro' : ' Dirección actual *',
	'telefonoRegistro' : ' Número de Teléfono *',
	'emailRegistro' : 'Correo Electrónico *',
	'es_CeliacoRegistro' : '¿Eres Celíaco? *',
	'fotoRegistro' : 'Foto (Opcional)',
	'tituloDatosRegistro' : 'Datos de Accesso',
	'substituloDatosRegistro' : 'Estos son los datos que se usaran como credenciales de accesso a la aplicación',
	'nombreUsuarioRegistro' : 'Nombre de Usuario * ',
	'contraseñaRegistro' : 'Contraseña  *',
	'contraseña2Registro' : 'Repite la constraseña *',
	'fraseMenuRegistro' : 'Aplicación de gestión de inscripciones en actividades',
	
	//atributos ACTIVIDADES
	'nombre_actividad' : 'Nombre de la Actividad',
	'descripcion_actividad' : 'Descripcion',
	'precio_actividad' : 'Precio',
	'numPlazas_actividad' : 'Número de Plazas',
	'color_actividad' : 'Color de la Actividad',
	'color_nombre_actividad' : 'Color el nombre de la actividad',
	'id_espacio' : 'Categoría',
	'id_categoria' : 'Espacio',
	'nombre_categoria' : 'Categoría',
	'nombre_espacio' : 'Espacio',

	//atributos RESPONSABLE
	'dni_responsable' : 'Dni del responsable',
	'curriculum_responsable' : 'Curriculum',
	'numCuenta_responsable' : 'Número de cuenta',
	'borrado_responsable' : 'Activo',

	//Atrinutos PRINCIPAL
	'actividadesPrincipal' : 'Actividades',
	'espaciosPrincipal' : 'Espacios',
	'categoriasPrincipal' : 'Categorías',
	'usuariosPrincipal' : 'Usuarios',
	'personasPrincipal' : 'Personas',
	'gruposPrincipal' : 'Grupos',
	'responsablesPrincipal' : 'Responsables',
	'inscripcionesPrincipal' : 'Inscripciones',
	
	//Atributos LOGIN
	'olvidarContraseña' : 'Has olvidado la contraseña?',
	'olvidarContraseña2' : 'Prueba a recuperar contraseña',
	//Atributo CAMBIAR CONTRASEÑA
	'antiguaContraseña' : 'Antigua contraseña',
	'nuevaContraseña' : 'Nueva Contraseña',

	//************************************************************************************************
	// 		E R R O R E S   A T R I B U T O S   G E N E R A L 
	//************************************************************************************************

	'02100' : 'Error al insertar el usuario',
	'02101' : 'El login de usuario ya existe',
	'02102' : 'No existe el usuario',
	'02103' : 'La contraseña no es correcta',
	'02104' : 'No se puede registrar porque el email ya existe',
	'02105' : 'No se puede registrar porque el usuario ya existe',
	'02106' : 'Error al insertar el usuario',
	'02107' : 'Error al modificar el usuario',
	'02108' : 'Error al borrar el usuario',
	'02109' : 'Acceso denegado!!!!!!!!! Necesitas autenticarte',
	'02127' : 'Error al eliminar un usuario Administrador',
	//-exito
	'02001' : 'Éxito al insertar el usuario',
	'02002' : 'Usuario modificado correctamente',
	'02003' : 'Usuario borrado correctamente',
	'02004' : 'Usuario registrado correctamente',
	'02005' : 'Usuario logueado correctamente',
	// errores de formato
	//Nombre de Usuario
	'02110' : 'El tamaño del nombre  no puede ser menor que 3',
	'02111' : 'El tamaño del nombre  no puede ser mayor que 45',
	'02112' : 'El nombre  no puede contener más que letras y números',
	//Contraseña
	'02113' : 'El tamaño de la contraseña de usuario no puede ser menor que 3',
	'02114' : 'El tamaño de la contraseña de usuario no puede ser mayor que 45',
	'02115' : 'La contraseña de usuario no puede contener más que letras y números', 
	//Nombre
	'02154' : 'El nombre solo puede contener letras',		
	//Apellidos
	'02116' : 'Los apellidos del usuario no pueden ser inferiores a 3', 	
	'02128' : 'Los apellidos del usuario no pueden ser superiores a 100',
	'02118' : 'Los apellidos del usuario no pueden contener mas que letras', 
	//Email
	'02119' : 'El email del usuario no puede ser menor que 11', 	
	'02120' : 'El email del usuario no puede ser mayor que 45', 	
	'02121' : 'El email del usuario no puede contener más caracteres que los de un email', 
	'02122' : 'Administrador no puede ser diferente de si o no',
	
	'02123' : 'Activo no puede ser diferente de si o no',
	'02124' : 'Seguridad de la password comprometida. Password encriptada corta',
	'02125' : 'Seguridad de la password comprometida. Password encriptada larga',
	'02126' : 'Seguridad de la password comprometida. Password encriptada caracteres no permitidos',
	//Contraseña2 de comprobacion 
	'02127' : 'La contraseñas no coinciden',
	
	//Dni
	'02129' : 'El dni tiene que ser 9 dígitos',
	'02130' : 'El dni debe tener un formato y letra correctos',
	//Direccion
	'02131' : 'La dirección no puede ser más pequeña que 3 digitos',
	'02132' : 'La dirección no puede ser más grande que 200 digitos',
	'02133' : 'La dirección solo pude tener letras (acentuada y mayúsculas incluidas) numeros y espacios',
	//Telefono
	'02134' : 'El telefono tiene que tener minimo y maximo 9 dígitos',
	'02135' : 'El telefono tiene que tener solo numeros y ser válido en España',
	//Foto
	'02136' : 'En la foto solo se permite las extensiones .jpg y .png',
	'02137' : 'La foto no puede pesar más de 200MB',
	'02138' : 'El nombre de la foto no puede contener menos de 5 caracteres',
	'02139' : 'El nombre de la foto no puede contener mas de 100 caracteres',
 	//Curriculum
	'02140' : 'El curriculum debe enviarse con una extensión .pdf',
	'02141' : 'El nombre del curriculum no puede tenr menos de 5 caracteres',
	'02142' : 'El nombre del curriculum no debe tener mas de 200 carcateres',
	'02143' : 'El nombre del curriculum solo puede incluir letras y numeros mas el "."',
	//IBAN
	'02144' : 'El IBAN debe tener exactamente 24 caracteres',
	'02145' : 'El IBAN unicamente admite letras mayúsculas y números siguiendo el formato IBAN',
	//Descripción
	'02146' : 'La descripción tiene que tener mínimo 20 caracteres',
	'02147' : 'La descripción tiene que tener menos de 200 caracteres',
	'02148' : 'La descripción tiene que tener solo letras (acentuada y mayúsculas incluidas) y espacios ',
	//Precio
	'02149' : 'El precio tiene que tener máximo 4 enteros y máximo dos decimales separado por 1 punto',
	//Numero de Plazas
	'02150' : 'El numero de plazas debe tener al menos 1 digito',
	'02151' : 'El numero de plazas debe ser un numero entre 1 y 40',
	'02155' : 'El número de plazas debe ser un 1',
	//Color
	'02152' : 'Debe ser exactamente 7 caracteres',
	'02153' : 'Debe ser un # seguido de 6 valores hexadecimales ',
	//Fecha
	'02170' : 'La fecha no puede ser mayor a la actual',
	'02171' : 'La fecha de pago no puede ser anterior a la de solicitud',
	'02172' : 'La fecha de aceptación no puede ser anterior a la de pago',
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