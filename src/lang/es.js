const es = {
    //sidebar
    "general_info": "Información General",
    "configuration": "Configuración",       
    "network": "Red",   

    // general info
    "name": "Nombre",
    "type": "Tipo",
    "address": "Dirección",
    "active": "Activo",
    "plant": "Planta",
    "protocol": "Protocolo",
    "brand_model": "Marca/Modelo",
    "bus": "Bus",   

    // configuration
    "general": "General",
    "maintenance": "Mantenimiento",
    "mqtt": "MQTT",
    "selfconsumption": "Autoconsumo",

    // general configuration
    "time_zone": "Zona Horaria",
    "installation_name": "Nombre de la instalación",
    "coordinates": "Coordenadas",
    "autolink": "Autolink",
    "autolink_description": "El sistema abre el puerto de comunicación una vez y no lo reinicia hasta que la comunicación falla. Si no está marcado, cada vez que el sistema lee los dispositivos, abre y cierra el puerto de comunicación.",
    "bucletime": "Bucletime",
    "bucletime_description": "Especifica el tiempo mínimo para leer todos los dispositivos en un bus. Ej: si el bucletime es de 60 seg, el sistema lee todos los dispositivos (en el mismo bus) cada 60 seg.",
    "general_timeout": "General timeout",
    "general_timeout_description": "Tiempo de espera para responder a todos los dispositivos.",

    // mqtt configuration
    "host": "Host",
    "port": "Puerto",
    "export_power": "Potencia a exportar",
    "file": "Archivo",
    "select_file": "Seleccionar archivo",
    "upload_file": "Cargar archivo",
    "ca": "Autoridad certificadora (CA)",
    "private_key": "Clave privada",
    "certificate": "Certificado",




    "save_to_storage": "Guardar en storage",
    "save_to_storage_description": "Guardar datos leídos en memoria de almacenamiento. Habilite esta opción cuando desee recuperar datos cuando falle la conexión a internet.",
    "nregister": "Numero de Registros",
    "registers": "registros",
    "seconds": "segundos",
    // common items
    "advance_setup": "Configuración Avanzada",
    "save": "Guardar",
    "confirm": "Confirmar",
    "cancel": "Cancelar",
    "confirm_changes": "Confirmar Cambios",
    "confirm_changes_description": "¿Está seguro que desea guardar los cambios?",   

    // mqtt
    "user": "Usuario",
    "password": "Contraseña",
    "mqtt2_active": "Activo",
    "mqtt2_aws": "AWS",
    "mqtt2_tls": "Seguridad de la capa de transporte",
    "mqtt2_active_description": "Habilitar la comunicación MQTT2.",
    "mqtt2_aws_description": "Habilitar la comunicación con AWS.",
    "mqtt2_tls_description": "Habilitar la comunicación con TLS.",  
    "qos": "Calidad del servicio (QoS)",
    "mqtt2_bucletime": "Tiempo para sincronizar current_data",
    "mqtt2_select_limit": "Limite de seleccion",
    "mqtt2_ack": "Acknowledge ACK",
    "select_limit": "Número máximo de filas de historial a enviar por mqtt",
    "add_button": "Agregar",
    "prev_button": "Anterior",
    "next_button": "Siguiente",

    // add device
    "Counter": "Contador",
    "Inversor": "Inversor",
    "Serial Meter": "Medidor Serial",
    "Est Meteo": "Estación Meteorológica",
    "Medidor AD": "Medidor AD",
    "analizadores_red": "Analizadores Red",
    "seguidor": "Seguidor",
    "forecast": "Forecast",
    "Variador": "Variador",
    "Baterias": "Baterías",
    "Grupo Respaldo": "Grupo Respaldo",
    "Power Supply": "Fuente de Poder",
    "modbusrtu": "Modbus RTU",
    "modbustcp": "Modbus TCP",

    // user menu
    "account": "Cuenta",
    "logout": "Cerrar sesión",
    "editAccount": "Editar cuenta",
    "username": "Nombre de usuario",
    "newPassword": "Nueva contraseña",

    // account modal
    "password_warning": "Este servidor web no tiene un sistema de recuperación de contraseñas. Asegúrate de recordarla, de lo contrario contacta con soporte.",
    "logic_control_0": "Lógica para Autoconsumo",
    "max_power2export": "Habilitar potencia a exportar",
    "time_dead": "Tiempo de apagado",
    "zero_injection": "Inyección cero",
    "time2reconect": "Reconectar",
    "time_dead_description": "Tiempo para apagar el sistema de inyección si algún dispositivo no responde",
    "time2reconect_description": "Tiempo para reconectarse luego haberse apagado",
    "login": "Iniciar sesión",



    "error_feedback": {
        "user": "El nombre de usuario debe tener entre 3 y 30 caracteres",
        "password": "La contraseña debe tener entre 4 y 12 caracteres",
        "meters": "Para activar inyeccion cero debes seleccionar al menos un medidor",
        "export_power": "Por favor, indica la potencia a exportar en kW",
        "form": "Hay errores en uno o mas campos, por favor revisalos.",
        "host": "Por favor, indica una dirección válida",
        "port": "Por favor, indica un puerto válido",
        "installation_name": "El nombre de la instalación debe tener menos de 50 caracteres",
        "required": "Este campo es requerido",
        "number": "Debe ser un número",
        "coordinates": "Por favor, introduzca coordenadas válidas. Si tienes dudas sobre tus coordenadas puedes consultarlas en Google Maps.",
        "certificate_extension": "Error al cargar el certificado. La extensión debe ser .pem o .crt"
    },

    "network_analyzer_1": "Analizador de red 1",
    "network_analyzer_2": "Analizador de red 2",
    
}

export default es;