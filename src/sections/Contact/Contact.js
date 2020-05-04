import React,{ useState } from 'react'
import Recaptcha from 'react-recaptcha'
import axios from 'axios'
import { SeccionTitle } from '../../components/SeccionTitle/SeccionTitle'

const initialState = {
  subject: '',
  email: '',
  text: ''
}

export default function Contact() {

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
   axios.post('https://portfolio-back-end2.herokuapp.com/Send', values)
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

const Verify = (res) => res && setVerified(true)

const onExpire = () => setVerified(false)

    return (
        <section className='form-container'>
          <SeccionTitle title='Envíame un mensaje' margin='5vh' textcolor='var(--black)'/>
          
                <form onSubmit={handleSubmit}>
                   <input
                      autoComplete='true'
                      required
                      id='email'
                      name='email'
                      type='email'
                      label='Correo'
                      value={values.email}
                      onChange={handleChange}
                      placeholder='E-mail'
                    />

                    <input
                      autoComplete='off'
                      required
                      id='subject'
                      name='subject'
                      type='text'
                      label='Asunto'
                      value={values.subject}
                      onChange={handleChange}
                      placeholder='Asunto'
                    />

                    <textarea
                      autoComplete='off'
                      required
                      id='text'
                      name='text'
                      type='text'
                      label='Mensaje'
                      value={values.text}
                      onChange={handleChange}
                      placeholder='Mensaje'
                      multiline='true'
                      rows='8'
                    />

                    <button
                      disabled={loading}
                      type='submit'
                    >
                    Enviar Mensaje! {loading && <>... </>} { sended && <i className=' ready fas fa-check'></i>}
                    </button>
             
                </form>

                <div className='captcha'>
                    <Recaptcha 
                      sitekey='6Le-M8wUAAAAAPo3fvfxpWl0sQxg51HBS5QNcyzr' 
                      render='explicit'
                      verifyCallback={Verify}
                      onExpired={onExpire}
                      style={{width: 30}}
                     size='compact'
                    />
                  </div> 
          </section>    
    )
}


    