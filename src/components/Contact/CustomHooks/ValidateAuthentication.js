export const validateAuth = (valuesParam) => {

        let errors = {};
        // name Errors
        if (!valuesParam.name) {
            errors.name = "Nombre requerido";
        } else if (valuesParam.name.length < 4) {
            errors.name = "Nombre inválido";
        }
        // email Errors
        if (!valuesParam.email) {
          errors.email = "Correo Electrónico Requerido";
        } else if (!/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i.test(valuesParam.email)) {
          errors.email = "Correo Electrónico inválido";
        }
        // message Errors
        if (!valuesParam.message) {
          errors.message = "Mensaje requerido";
        } else if (valuesParam.message.length < 10) {
          errors.message = "El mensaje debe tener al menos 10 caracteres.";
        }
        return errors;  
}