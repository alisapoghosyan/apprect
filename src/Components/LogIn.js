import React, { useState, useRef } from 'react'
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Numbers from './Numbers';


const Login = ({ t }) => {
  const [validated, setValidated] = useState(false)
  const password = useRef()
  const phone = useRef()



  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(password.current.value, phone.current.value)

    setValidated(true);
  };

  return (
    <div className='log'>
      <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3>{t('login')}</h3>
          <div className="text-center">
            {t('notReg')}{" "}
            <Link to={'/register'}>{t('register')}</Link>
          </div>
          <Form.Group as={Col} controlId="validationCustom05">
            <Numbers t={t} phone={phone} />
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom05">
            <Form.Control type="password" placeholder={t('password')} ref={password} required pattern='^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})' />
            <Form.Control.Feedback type="invalid">{t('passErr')}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Button type="submit">{t('reg')}</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Login