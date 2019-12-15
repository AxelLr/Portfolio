import React from "react";
import { useFormValidation } from './CustomHooks/useFormValidation';
import { validateAuth } from './CustomHooks/ValidateAuthentication';
import { SeccionTitle} from '../SeccionTitle/SeccionTitle';

export const Contact = () => {

    const INITIAL_STATE = {
        name: "",
        email:"",
        message:""
        }

const { handleSubmit, handleChange, values, handleBlur, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateAuth);

return (
    <div className="main-contact-container">

<div className="contact-title"> <SeccionTitle title="CONTACTO" margin="8vh" textcolor="var(--white2)"/> </div>
       
        <form onSubmit={handleSubmit} className="form"> 
            <label> 
                <input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                className={errors.name && "error-class"}
                name="name"
                type="text"
                placeholder="Tu nombre!"
                />
                {errors.name && <h1 className="error-class-text"> {errors.name} </h1>}
            </label>
            
            <label> 
                <input
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                value={values.email}
                className={errors.email && "error-class"}
                placeholder="Tu Correo electrónico!"
                />
                      {errors.email && <h1 className="error-class-text"> {errors.email} </h1>}
            </label>
            
                <label className="textarea.container"> 
                    <textarea
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="message"
                    value={values.message}
                    className={errors.message && "error-class"}
                    autoComplete="off"
                    placeholder="deja tu mensaje!"
                    />
                    {errors.message && <h1 className="error-class-text"> {errors.message} </h1>}
                </label>

             <div className="form-button-container">
                <div> <button disabled={isSubmitting}  type="submit"> Enviar! </button> </div>
                </div>
        </form>
    </div>
  );
}
