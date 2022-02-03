arrayEN={

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
	'BUSQUEDA_OK' : 'successful search',
	'BUSQUEDA_KO' : 'Database lookup failed',
	'session_disconnect_ok' : 'DB session deleted and user disconnected',
		
	//REGISTRO 
	'registro_ok' : 'The user has been successfully registered',
	'fallo_conexion_registrar' : 'DB failure when registering',
		
	//LOGIN
	'LOGIN_USU_CORRECTO' : 'correct login',
	'USUARIOYCORREO_NO_COINCIDEN' : 'The username and email entered do not match',
	
	//ADMIN
	'ADMIN_NO_SE_PUEDE_EDITAR' : 'It is not allowed to modify data of the Administrator',
	'admin_no_se_puede_borrar' : 'Admin cannot be deleted',
	
	//PERSONA
	'PERSONA_BORRAR_OK' : 'The person has been successfully deleted',
	'PERSONA_INSERTAR_OK' : 'The person has been inserted correctly',
	'ERROR_INSERTAR_PERSONA' : 'The person could not be inserted',
	'ERROR_BORRAR_PERSONA ' : 'Error deleting person',
	'PERSONA_MODIFICAR_OK' : 'The person has been successfully modified',
	'ERROR_MODIFICAR_PERSONA' : 'Error modifying the person',
	'PERSONA_BORRAR_NO_EXISTE' : 'The person to delete does not exist',
	'BORRAR_PERSONA_EXISTE_USUARIO' : 'It cannot be deleted, there is a user with that ID',
	
	//USUARIO
	'usuariorecuperacion' : 'Corresponding user login',
	'usuarioConectado' : 'Connected user:',
	'REGISTRO_USUARIO_YA_EXISTE' : 'The user you want to register already exists',
	'USUARIO_BORRAR_OK' : 'The user has been successfully deleted',
	'USUARIO_LOGUEAR_OK' : 'User logged in successfully',
	'LOGIN_USUARIO_INCORRECTO' : 'The entered user login does not exist',	
	'DNI_USUARIO_NO_EXISTE_EN_PERSONA': 'The ID should exist in person',
	'DNI_USUARIO_YA_EXISTE' : 'The ID should exist in person',
	'USUARIO_INSERTAR_OK' : 'User inserted correctly',
	'ERROR_MODIFICAR_USUARIO' : 'Error modifying the user',
	'ERROR_INSERTAR_USUARIO' : 'Error inserting user',
	'ERROR_BORRAR_USUARIO' : 'Error deleting user',
	'ERROR_AUTENTICAR_USUARIO' : 'Authentication Error. you are not authenticated',
	'ADD_usuario_ya_existe' : 'User login already exists',
	'NOMBRE_USUARIO_YA_EXISTE' : 'The username entered already exists',
	'USUARIO_MODIFICAR_OK' : 'The user has been successfully modified',
	'usuario_modificado_ok' : 'User modified successfully',
	'NOMBRE_USUARIO_NO_EXISTE' : 'The username entered does not exist',

	//CONTRASEÑA
	'LOGIN_CONTRASENA_INCORRECTO' : 'Invalid login password',
	'CONTRASENA_CAMBIADA_EMAILKO' : 'The password could not be changed correctly',
	'CONTRASENA_CAMBIADA_EMAILOK' : 'The password has been changed successfully',
	'NO_SE_PUEDE_CAMBIAR_PASSWORD_ADMIN' : 'Cant change the password of an Administrator',
	'CONTRASEÑA_CAMBIADA_OK' : 'The password has been changed successfully',
	'CONTRASEÑA_NO_CORRECTA' : 'The entered password is incorrect',

	//CORREO
	'correorecuperacion' : 'Password recovery email',
	'CORREO_ELECTRONICO_NO_EXISTE' : 'The email entered does not exist',
	'REGISTRO_EMAIL_PERSONA_YA_EXISTE' : 'The entered email already exists',
	'EMAIL_PERSONA_YA_EXISTE' : 'The entered email already exists',

	//DNI
	'DNI_PERSONA_YA_EXISTE' : 'That persons ID already exists in the database',
	'dni_admin_no_se_puede_modificar' : 'You can not modify the dni of the admin',
	'DNI_USUARIO_YA_EXISTE_EN_USUARIO' : 'The entered ID already exists in User',
	'USUARIO_BORRAR_NO_EXISTE' : 'The user to delete does not exist',
	'USUARIO_NO_AUTENTICADO' : 'Unauthenticated user',
	
	
	//GRUPO
	'GRUPO_INSERTAR_OK' : 'Group inserted successfully',
	'ERROR_INSERTAR_GRUPO' : 'Error inserting group',
	'ERROR_MODIFICAR_GRUPO' : 'Failed to modify group',
	'ERROR_BORRAR_GRUPO ' : 'Failed to delete group',
	'GRUPO_YA_EXISTE' : 'The entered group already exists',
	'GRUPO_MODIFICAR_OK' : 'Group modified successfully',
	'GRUPO_BORRAR_EXISTE_EN_USUARIO' : 'Cannot delete, a user is in that group',
	'GRUPO_BORRAR_NO_EXISTE' : 'The group to delete does not exist',
	'GRUPO_BORRAR_OK' : 'group deleted successfully',

	//CATEGORÍA
	'CATEGORIA_INSERTAR_OK' : 'Category inserted correctly',
	'CATEGORIA_YA_EXISTE' : 'The category entered already exists',
	'CATEGORIA_MODIFICAR_OK' : 'Category successfully modified',
	'CATEGORIA_BORRAR_EXISTE_EN_ACTIVIDAD' : 'That category exists in Activity',
	'CATEGORIA_BORRAR_NO_EXISTE' : 'The category to delete does not exist',
	'CATEGORIA_BORRAR_OK' : 'Category removed successfully',
	'CATEGORIA_NO_EXISTE' : 'The category to insert does not exist',

	//ESPACIO
	'ESPACIO_INSERTAR_OK' : 'Space inserted correctly',
	'ESPACIO_YA_EXISTE' : 'The space has insert already exists',
	'ESPACIO_MODIFICAR_OK' : 'space modified successfully',
	'ESPACIO_BORRAR_EXISTE_EN_ACTIVIDAD' : 'The space to delete exists in activity',
	'ESPACIO_BORRAR_NO_EXISTE' : 'The space to delete does not exist',
	'ESPACIO_BORRAR_OK' : 'Space removed successfully',
	'ESPACIO_NO_EXISTE' : 'The space you have insert does not exist',

	//RESPONSABLE
	'RESPONSABLE_INSERTAR_OK' : 'Responsible inserted correctly',
	'RESPONSABLE_YA_EXISTE' : 'The manager entered already exists',
	'RESPONSABLE_MODIFICAR_OK' : 'Responsible modified correctly',
	'RESPONSABLE_BORRAR_NO_EXISTE' : 'The person in charge has to eliminate does not exist',
	'RESPONSABLE_BORRAR_OK' : 'Responsible removed successfully',

	//ACTIVIDAD
	'ACTIVIDAD_INSERTAR_OK' : 'Activity inserted successfully',
	'ACTIVIDAD_YA_EXISTE' : 'The activity has insert already exite',
	'ACTIVIDAD_MODIFICAR_OK' : 'Activity modified successfully',
	'ACTIVIDAD_BORRAR_NO_EXISTE' : 'The activity has delete does not exist',
	'ACTIVIDAD_BORRAR_OK' : 'Activity deleted successfully',
	'ACTIVIDAD_BORRAR_EXISTE_EN_INSCRIPCION' : 'The activity to delete exists in registration',

	//INSCRIPCIONES
	'INSCRIPCION_INSERTAR_OK' : 'Registration inserted correctly',
	'INSCRIPCION_ADD_YA_EXISTE' : 'The inscription to add already exists',
	'INSCRIPCION_ADD_ACTIVIDAD_NO_EXISTE' : 'The inscription to add does not exist',
	'INSCRIPCION_ADD_USUARIO_NO_EXISTE' : 'The registration user does not exist',
	'INSCRIPCION_MODIFICAR_OK' : 'Registration successfully modified',
	'INSCRIPCION_EDITAR_INSCRIPCION_NO_EXISTE' : 'The inscription has to modify does not exist',
	'INSCRIPCION_EDITAR_ACTIVIDAD_NO_EXISTE' : 'It is not possible to register for an activity that does not exist',
	'INSCRIPCION_EDITAR_USUARIO_NO_EXISTE' : 'Enrollment user does not exist',
	'INSCRIPCION_BORRAR_OK' : 'Inscription removed successfully',
	'INSCRIPCION_BORRAR_NO_EXISTE' : 'The entry has delete does not exist',
	

	/********************************************************************************/
	//					C O R R E S P O N D E N C I A 
	/********************************************************************************/

	//idiomas
	'es' : 'Spanish',
	'ga' : 'Galician',
	'en' : 'English',
	//MENUS
	'mi_perfil' : 'My Porfile',
	'inicio' : 'Home',
	'categorias' : 'Categories',
	'actividades' : 'Activities',
	'inscripciones' : 'Registrations',
	'usuarios' : 'Users',
	'cerrar_session' : 'Sign off',
	'cerrar' : 'close',
	'responsables' : 'Managers',
	'personas' : 'People',
	'espacios' : 'Spaces',
	'cambiarcontrasena' : 'Change Password',
	'recuperarcontrasena' : 'Recover Password',
	'grupos' : 'Groups',
	// usuario
	//- titulos
	'Inicio' : 'Beginning',
	'bienvenida' : 'Welcome to UI Architecture 2021/2022',
	'listUsers' : 'Welcome to the user sample table',
	'addForm' : 'Welcome to the insert form',
	'searchForm' : 'Welcome to the search form',
	'editForm' : 'Welcome to the editing form',
	'deleteForm' : 'Welcome to the deletion form',
	'detailForm' : 'Welcome to the detail form',
	'GestUsu' : 'User Management',
	'saludoLOGIN': 'Log in',
	'saludoREGISTRO' : 'Record',
	'datosRegistro' : 'Enter the following data',
	'datosPersonales' : 'Personal information',
	'datosUsuario' : 'User data',
	//- atributos
	'id_usuario' : 'User ID',
	'nombre_usuario' : 'Username',
	'usuario' : 'User',
	'contrasena' : 'User Password',
	'dni_usuario' : 'ID',
	'id_grupo' : 'Group',
	'borrado_usuario' : 'Active',
	//Funciones generales CRUD
	'Consultar' : 'Consult',
	'Editar' : 'Edit',
	'Eliminar' : 'Delete',
	'Buscar' : 'Search',
	'Insertar' : 'Add',
	'SI' : 'Yes',
	'NO' : 'No',

	//- warnning bloqueo mayusculas
	'BLOQUEO_MAYUSCULAS' : 'Bloqueo de Mayúsculas activado',
	'campoObligatorio' : 'Campo Obligatorio',
	'denegado' : 'denied',
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
	'dni_persona' : 'ID of Person',
	'nombre_persona' : 'Name of person',
	'apellidos_persona' : 'Surname',
	'fechaNacimiento_persona' : 'Date of birth',
	'direccion_persona' : 'Direction',
	'telefono_persona' : 'Telephone',
	'email_persona' : 'Email',
	'foto_persona' : 'Person Photo',
	'subefoto_persona' : 'If you want to add or change the photo',
	'esCeliaco_persona' : 'Celiac',
	'borrado_persona' : 'Inactive',

	// atributos GRUPO
	'id_grupo' : 'Código de Grupo',
	'nombre_grupo' : 'Group Name',
	'descripcion_grupo' : 'Group Description',

	//atributos CATEGORÍA
	'nombre_categoria' : 'Category name',
	'descripcion_categoria' : 'Description',
	
	//atributos ESPACIO
	'nombre_espacio' : 'Space Name',
	'descripcion_espacio' : 'Description',
	
	//atributos de INSCRIPCIONES
	'id_inscripcion' : 'Registration',
	'nombre_actividad' : 'Name of the Activity',
	'fecha_solicitud_inscripcion' : 'Application date',
	'documento_pago' : 'Payment document',
	'fecha_pago_inscripcion' : 'Payment date',
	'fecha_aceptacion_inscripcion' : 'Acceptance Date',
	'id_grupo' : 'Group Code',	
	
	//Atributos REGISTRO
	'tituloRegistro' : 'Sign up for the app now!',
	'substituloRegistro' : 'Once registered, you can consult the available activities and register for them',
	'tituloRegistro2' : 'Personal information',
	'subtituloRegistro2' : 'We need some basic data to create your account',
	'nombreRegistro' : 'Name *',
	'apellidosRegistro' : 'First and Second Last Names *',
	'dniRegistro' : 'Identification number *',
	'fechaRegistro' : 'Date of birth *',
	'direccionRegistro' : 'Current address *',
	'telefonoRegistro' : 'Telephone number *',
	'emailRegistro' : 'E-mail *',
	'es_CeliacoRegistro' : 'Are you celiac? *',
	'fotoRegistro' : 'Photo (Optional)',
	'tituloDatosRegistro' : 'Access data',
	'substituloDatosRegistro' : 'This is the data that will be used as credentials to access the application',
	'nombreUsuarioRegistro' : 'User name *',
	'contraseñaRegistro' : 'Password *',
	'contraseña2Registro' : 'Repeat password *',
	'fraseMenuRegistro' : 'Application of registration management in activities',

	//atributos ACTIVIDADES
	'nombre_actividad' : 'Name of the activity',
	'descripcion_actividad' : 'Description',
	'precio_actividad' : 'Price',
	'numPlazas_actividad' : 'Number of places',
	'color_actividad' : 'Activity Color',
	'color_nombre_actividad' : 'Color the name of the activity',
	'id_espacio' : 'Category',
	'id_categoria' : 'Space',
	'nombre_categoria' : 'Category',
	'nombre_espacio' : 'Space',

	//atributos RESPONSABLE
	'dni_responsable' : 'ID of the person in charge',
	'curriculum_responsable' : 'Resume',
	'numCuenta_responsable' : 'Account number',
	'borrado_responsable' : 'Active',

	//Atrinutos PRINCIPAL
	'actividadesPrincipal' : 'Activities',
	'espaciosPrincipal' : 'Spaces',
	'categoriasPrincipal' : 'Categories',
	'usuariosPrincipal' : 'Users',
	'personasPrincipal' : 'Persons',
	'gruposPrincipal' : 'Groups',
	'responsablesPrincipal' : 'Managers',
	'inscripcionesPrincipal' : 'Registrations',

	//Atributos LOGIN
	'olvidarContraseña' : 'Have you forgotten the password?',
	'olvidarContraseña2' : 'try to recover password',

	//Atributo CAMBIAR CONTRASEÑA
	'antiguaContraseña' : 'Old password',
	'nuevaContraseña' : 'New password',
	//************************************************************************************************
	// 		E R R O R E S   A T R I B U T O S   G E N E R A L 
	//************************************************************************************************

	'02100' : 'Failed to insert user',
	'02101' : 'User login already exists',
	'02102' : 'User does not exist',
	'02103' : 'The password is not correct',
	'02104' : 'Cannot register because the email already exists',
	'02105' : 'Cannot register because user already exists',
	'02106' : 'Failed to insert user',
	'02107' : 'Error modifying the user',
	'02108' : 'Failed to delete user',
	'02109' : 'Access denied!!!!!!!!! You need to authenticate',
	'02127' : 'Failed to delete an Administrator user',
	//-exito
	'02001' : 'Success when inserting the user',
	'02002' : 'User modified successfully',
	'02003' : 'User successfully deleted',
	'02004' : 'User successfully registered',
	'02005' : 'User logged in successfully',
	// errores de formato
	//Nombre de Usuario
	'02110' : 'Name size cannot be less than 3',
	'02111' : 'Name size cannot be greater than 45',
	'02112' : 'Name cannot contain more than letters and numbers',
	//Contraseña
	'02113' : 'User password size cannot be less than 3',
	'02114' : 'User password size cannot be greater than 45',
	'02115' : 'User password cannot contain more than letters and numbers', 	
	//Nombre
	'02154' : 'The name can only contain letters',		
	//Apellidos
	'02116' : 'Surnames cannot be less than 3', 	
	'02128' : 'Surnames cannot be greater than 100',
	'02118' : 'Surnames cannot contain more than letters', 
	//Email
	'02119' : 'The users email cannot be less than 11', 	
	'02120' : 'The users email cannot be greater than 45', 	
	'02121' : 'The users email cannot contain more characters than those of an email', 
	'02122' : 'Administrator cannot be different from yes or no',
	
	'02123' : 'Active cannot be different from yes or no',
	'02124' : 'Compromised password security. Short encrypted password',
	'02125' : 'Compromised password security. Long encrypted password',
	'02126' : 'Compromised password security. Encrypted password characters not allowed',
	//Contraseña2 de comprobacion 
	'02127' : 'Passwords do not match',
	
	//Dni
	'02129' : 'The ID has to be 9 digits',
	'02130' : 'The ID must have a correct format and letter',
	//Direccion
	'02131' : 'The address cannot be smaller than 3 digits',
	'02132' : 'The address cannot be greater than 200 digits',
	'02133' : 'The address can only have letters (accented and capital letters included), numbers and spaces.',
	//Telefono
	'02134' : 'The phone must have a minimum and maximum of 9 digits',
	'02135' : 'The phone has to have only numbers and be valid in Spain',
	//Foto
	'02136' : 'Only .jpg and .png extensions are allowed in the photo',
	'02137' : 'The photo cannot be larger than 200MB',
	'02138' : 'Photo name cannot contain less than 5 characters',
	'02139' : 'The name of the photo cannot contain more than 100 characters',
 	//Curriculum
	'02140' : 'The curriculum must be sent with a .pdf extension',
	'02141' : 'The name of the curriculum cannot be less than 5 characters',
	'02142' : 'The name of the curriculum must not have more than 200 characters',
	'02143' : 'The name of the curriculum can only include letters and numbers plus the "."',
	//IBAN
	'02144' : 'The IBAN must be exactly 24 characters',
	'02145' : 'The IBAN only admits capital letters and numbers following the IBAN format',
	//Descripción
	'02146' : 'The description must be at least 20 characters long',
	'02147' : 'Description must be less than 200 characters',
	'02148' : 'The description must have only letters (accented and capital letters included) and spaces',
	//Precio
	'02149' : 'The price must have a maximum of 4 integers and a maximum of two decimal places separated by 1 point.',
	//Numero de Plazas
	'02150' : 'The number of seats must have at least 1 digit',
	'02151' : 'The number of places must be a number between 1 and 40',
	'02155' : 'The number of seats must be a number',
	//Color
	'02152' : 'It must be exactly 7 characters',
	'02153' : 'It must be a # followed by 6 hexadecimal values',
	//Fecha
	'02170' : 'The date cannot be longer than the current date',
	'02171' : 'The payment date cannot be prior to the request date',
	'02172' : 'The acceptance date cannot be prior to the payment date',
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