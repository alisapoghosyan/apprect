import React, { useState, useRef } from 'react'
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Numbers from './Numbers';
import axios from 'axios'
import Verification from './Verification';
import Animation from './Animations';

export default function Register({ t }) {
  const name = useRef()
  const lastname = useRef()
  const email = useRef()
  const phone = useRef()
  const password_confirmation = useRef()

  const [password, setPassword] = useState()
  const [validated, setValidated] = useState(false)
  const [err, setErr] = useState(false)
  const [verificationCode, setVerificationCode] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginFormData = {
      phone: phone.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      name: name.current.value,
      password: password,
      password_confirmation: password_confirmation.current.value
    }
    try {
      await axios({
        method: "post",
        url: process.env.REACT_APP_APPRECT_DATAURL + process.env.REACT_APP_REGISTER,
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(res => {
          setVerificationCode(res.data.message)
        })
      setErr(false)
      setValidated(true)
    } catch (error) {
      if (error.message == 'Request failed with status code 409') {
        setErr(true)
      }
    }

  }

  return (
    <div className='log'>
      <div>
        {verificationCode ?
          <Verification
            email={email?.current.value}
            t={t}
            setVerificationCode={setVerificationCode}
          /> :
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h3>{t('register')}</h3>
            <div className="text-center">
              {t('alreadyReg')}{" "}
              <Link to={'/login'}>{t('login')}</Link>
            </div>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                defaultValue="Alisa"
                placeholder={t('name')}
                ref={name}
                pattern='^[a-zA-Z]{5,}$'
              />
              <Form.Control.Feedback type="invalid">{t('invalidName')}</Form.Control.Feedback>
              <Form.Control.Feedback>{t('validEmail')}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom02">
              <Form.Control
                required
                defaultValue="Alisa"
                type="text"
                placeholder={t('lastname')}
                ref={lastname}
              />
              <Form.Control.Feedback type="invalid">{t('invalidLastname')}</Form.Control.Feedback>
              <Form.Control.Feedback>{t('validEmail')}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom05">
              <Form.Control
                type="email"
                placeholder={t('email')}
                required
                defaultValue="alisapoghosyan.arnology@gmail.com"
                pattern='(\w\.?)+@[\w\.-]+\.\w{2,}'
                ref={email}
              />
              <Form.Control.Feedback type="invalid">{t('emailerr')}</Form.Control.Feedback>
              <Form.Control.Feedback type={"valid"}>{t('validEmail')}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom05">
              <Numbers
                t={t}

                phone={phone}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom05">
              <Form.Control type="password" placeholder={t('password')} onChange={(e) => setPassword(e.target.value)} required pattern='^[a-zA-Z0-9]{8,}$' />
              <Form.Control.Feedback type="invalid">{t('pass1')}</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">{t('validPass')}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom05">
              <Form.Control defaultValue="123456789" type="password" ref={password_confirmation} placeholder={t('password_confirm')} required pattern={password} />
              <Form.Control.Feedback type="invalid">{t('pass2')}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <h3 className='error'>{validated ? err ? t('exists') : null : null}</h3>
              <Button type="submit">{t('save')}</Button>
            </Form.Group>
          </Form>}
      </div>
    </div>
  )
}

