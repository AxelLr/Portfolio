import React, {useState} from "react"

// MUI 
import { SeccionTitle } from '../SeccionTitle/SeccionTitle'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from 'react-reveal/Fade'

export function Contact(props) {

const [values, setValues] = useState({
  Name: '',
  case: '',
  email: '',
  message: '',
});
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  setLoading(true);
  e.preventDefault(); 
  
}

    return (
     
      <div className="main-contact-container">

          <div className="form-container">
          <SeccionTitle title="Envíame un mensaje" margin= "4vh" textcolor="var(--white2)"/>
          <Fade bottom>
                <form onSubmit={handleSubmit}>

                    <TextField
                    autoComplete="off"
                    InputLabelProps={{
                      style: {
                        color: "#e5e5e5"
                      }
                    }}
                    InputProps={{
                    style: {
                        color: "#e5e5e5"
                    }
                    }}
                    UnderlineProps={{
                      style: {
                        color: "red"
                      }
                    }}
                    className='input-color'
                                        required
                    id="name"
                    name="name"
                    type="text"
                    label="Nombre"
                    value={values.name}
                    onChange={handleChange}
                    fullWidth
                    />

                    <TextField
                    autoComplete="off"
                    InputLabelProps={{
                      style: {
                        color: "#e5e5e5"
                      }
                    }}
                    InputProps={{
                    style: {
                        color: "#e5e5e5"
                    }
                    }}
                                        required
                    id="email"
                    name="email"
                    type="email"
                    label="Correo"
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                    />
                    
                    <TextField
                    autoComplete="off"
                    InputLabelProps={{
                      style: {
                        color: "#e5e5e5"
                      }
                    }}
                    InputProps={{
                    style: {
                        color: "#e5e5e5"
                    }
                    }}
                                        required
                    id="case"
                    name="case"
                    type="text"
                    label="Asunto"
                    value={values.case}
                    onChange={handleChange}
                    fullWidth
                    />

                    <TextField
                    autoComplete="off"
                    InputLabelProps={{
                      style: {
                        color: "#e5e5e5"
                      }
                    }}
                    InputProps={{
                    style: {
                        color: "#e5e5e5"
                    }
                    }}
                    required
                    id="message"
                    name="message"
                    type="text"
                    label="Mensaje"
                    value={values.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows="8"
                    />

                    <Button
                    disabled={loading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{margin: '25px auto 25px auto'}}
                    >
                        Enviar Mensaje! {loading && < CircularProgress />}
                    </Button>
                </form>
            </Fade>
          </div>

              <div className="info-contact-container"> 
     
                  <h3> Si necesitas ayuda en algún proyecto, no dudes en ponerte en contacto conmigo. </h3>

                  <div className="phone-number">
                      
                      <h3>  <i className="fas fa-phone-alt"></i> (+54) 2664871368 </h3>  
                      
                      <h3>  <i className="fas fa-envelope"></i> axelleonr12@gmail.com </h3>                 
                  </div>
           
                  <div className="contacticons-container"> 

                    <a href="https://www.linkedin.com/in/axelleonr/"> <i className="fab fa-linkedin"></i>        </a>
                    <a href="https://github.com/AxelLr"> <i className="fab fa-github"></i>          </a>
                    <a href="https://www.facebook.com/axel.leon.52"> <i className="fab fa-facebook-square"></i> </a>
  
                  </div>
              </div>
      </div>
    );
}


    