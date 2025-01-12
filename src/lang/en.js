const en = { 
    //sidebar
    "general_info": "General Info",
    "configuration": "Configuration",
    "network": "Network",

    // general info
    "name": "Name",
    "type": "Type",
    "address": "Address",
    "active": "Active",
    "plant": "Plant",
    "protocol": "Protocol",
    "brand_model": "Brand/Model",
    "bus": "Bus",

    // configuration
    "general": "General",
    "maintenance": "Maintenance",
    "mqtt": "MQTT",
    "selfconsumption": "Self-Consumption",  

    // general configuration
    "time_zone": "Time Zone",
    "installation_name": "Installation Name",
    "coordinates": "Coordinates",
    "autolink": "Autolink",
    "autolink_description": "The system opens the communication port once and does not restart it until the communication fails. If it isn't checked, each time the system reads the devices, it opens and closes the communication port.",
    "save_to_storage": "Save to Storage",
    "save_to_storage_description": "Save read data in storage memory. Enable this option when you would like recover data when internet connection fails.",
    "bucletime": "Bucletime",
    "bucletime_description": "This specifics minimum time to last to read all devices in a bus. Ex: if the bucletime is 60 seconds, the system reads all devices (in the same bus) each 60 seconds.",
    "seconds": "seconds",
    "general_timeout": "General Timeout",
    "general_timeout_description": "Time to wait to response all devices.",
    "nregister": "N Register",
    "registers": "registers",

    // common items
    "advance_setup": "Advance Setup",
    "save": "Save",
    "confirm": "Confirm",
    "cancel": "Cancel",
    "confirm_changes": "Confirm Changes",
    "confirm_changes_description": "Are you sure you want to save the changes?",

    // mqtt
    "user": "User",
    "password": "Password",
    "mqtt2_active": "Active",
    "mqtt2_aws": "Amazon Web Services",
    "mqtt2_tls": "Transport Layer Security",
    "mqtt2_active_description": "Enable MQTT2 communication.",
    "mqtt2_aws_description": "Enable MQTT2 AWS communication.",
    "mqtt2_tls_description": "Enable MQTT2 TLS communication.",  
    "qos": "Quality of Service (QoS)",
    "mqtt2_bucletime" : "MQTT time to sync current_data",
    "mqtt2_select_limit": "Nº maxium of history rows to send by mqtt",
    "mqtt2_ack": "Acknowledgement ACK",
    "select_limit": "Maximum number of history rows to send by mqtt",
    "add_button": "Add",
    "prev_button": "Previous",
    "next_button": "Next",

    // add device
    "Counter": "Counter",
    "Inversor": "Inversor",
    "Serial Meter": "Serial Meter",
    "Est Meteo": "Est Meteo",
    "Medidor AD": "Medidor AD",
    "analizadores_red": "analizadores_red",
    "seguidor": "seguidor",
    "forecast": "forecast",
    "Variador": "Variador",
    "Baterias": "Baterias",
    "Grupo Respaldo": "Grupo Respaldo",
    "Power Supply": "Power Supply",
    "modbusrtu": "Modbus RTU",
    "modbustcp": "Modbus TCP",

    // user menu
    "account": "Account",
    "logout": "Logout",
    "editAccount": "Edit Account",
    "username": "Username",
    "newPassword": "New Password",  

    // account modal
    "password_warning": "This web server does not have a password recovery system. Please make sure you remember it, otherwise contact support.",
    "logic_control_0": "Logic to do Self-consumption",
    "max_power2export": "Enable power to export",
    "time_dead": "Turn-off time",
    "zero_injection": "Zero Injection", 
    "time2reconect": "Reconnect",
    "time_dead_description": "Time to turn-off the inyection system if any device doesn't response",
    "time2reconect_description": "Time to reconnect after a turn-off state",
    "login": "Login",

    "export_power": "Export power",
    "file": "File",
    "select_file": "Select file",
    "upload_file": "Upload file",
    "host": "Host",
    "port": "Port",

    "ca": "Certificate Authority (CA)",
    "private_key": "Private Key",
    "certificate": "Certificate",   

    "error_feedback": {
        "user": "Username must be between 3 and 30 characters",
        "password": "Password must be between 4 and 12 characters",
        "meters": "For zero injection you must select at least one meter",
        "export_power": "Please, indicate the export power in kW",
        "form": "There are errors in one or more fields, please check them.",
        "host": "Please, indicate a valid host",
        "port": "Please, indicate a valid port",
        "required": "This field is required",
        "number": "Must be a number",
        "installation_name": "The installation name must have less than 50 characters",
        "coordinates": "Please, introduce valid coordinates. If you have doubts about your coordinates you can check them on Google Maps.",
        "certificate_extension": "Error loading certificate. The extension must be .pem or .crt"
    },

    // self consumption
    "network_analyzer_1": "Network Analyzer 1",
    "network_analyzer_2": "Network Analyzer 2",
    
}

export default en;
