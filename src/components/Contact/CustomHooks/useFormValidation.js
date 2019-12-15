import React,{useState, useEffect} from "react";

export const useFormValidation = (initialState, validationParam) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);


  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("autenticado!" ,values.name, values.email,values.message);
        setSubmitting(false);
      } else {
        setSubmitting(true);
      }
    }
  }, [errors]);

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  function handleBlur() {
    const validationErrors = validationParam(values);
    setErrors(validationErrors);
  }
  
  function handleSubmit(e) {
    console.log(isSubmitting);      
      e.preventDefault();  
      const validateErrors = validationParam(values);
      setErrors(validateErrors);
      setSubmitting(true);
  }

  return { handleSubmit, handleChange, values, handleBlur, errors, isSubmitting };
}


