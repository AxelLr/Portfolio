import React,{ useState } from "react"
import Recaptcha from 'react-recaptcha'
import axios from 'axios'
// MUI 
import { SeccionTitle } from '../SeccionTitle/SeccionTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

export function Contact(props) {

const initialState = {
  subject: '',
  email: '',
  text: ''
}

const [values, setValues] = useState(initialState)
const [loading, setLoading] = useState(false)
const [verified, setVerified] = useState(false)
const [errors, setErrors] = useState(false)
const [sended, setSended] = useState(false)

const handleChange = (e) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {

  if(verified){
    e.preventDefault()
    setLoading(true)
   axios.post('http://localhost:5000/Send', values)
    .then (res => {
      setLoading(false)
      setValues(initialState)
      setSended(true)
    })
    .catch(err => {
      setLoading(false)
      setErrors(err.response.data)
    })

  }  else {
    alert('Verifica si eres humano completando el Captcha')
    e.preventDefault()
  }
}

const Verify = (res) => {
  if(res) {
    setVerified(true)
  }
}

const onExpire = () => {
  setVerified(false)
}
    return (
     
      <div className="main-contact-container">

          <div className="form-container">
          <SeccionTitle title="Envíame un mensaje" textcolor="var(--white)"/>
          
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
                    required
                    id="email"
                    name="email"
                    type="email"
                    label="Correo"
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                    error={errors ? true : false}
                    helperText={errors && errors}
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
                    },
                    maxLength: 100
                    }}
                    required
                    id="subject"
                    name="subject"
                    type="text"
                    label="Asunto"
                    value={values.subject}
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
                    },
                    maxLength: 100
                    }}
                    required
                    id="text"
                    name="text"
                    type="text"
                    label="Mensaje"
                    value={values.text}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows="8"
                    inputProps={{maxLength: 2500}}
                    />

                    <Button
                    disabled={loading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{margin: '25px auto 25px auto'}}
                    >
                    Enviar Mensaje! {loading && < CircularProgress />} { sended && <i className=" ready fas fa-check"></i>}
                    </Button>
             
                </form>

                <div className='captcha'>
                    <Recaptcha 
                    sitekey='6Le-M8wUAAAAAPo3fvfxpWl0sQxg51HBS5QNcyzr' 
                    render='explicit'
                    verifyCallback={Verify}
                    onExpired={onExpire}
                    style={{width: 30}}
                    compact 
                    />
                  </div> 
           
          </div>

        
      </div>
    );
}


    