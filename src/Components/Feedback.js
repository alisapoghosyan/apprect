import React, { useState, useRef } from 'react'
import { SocialIcon } from 'react-social-icons'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { Button, Form, Col } from 'react-bootstrap';
import axios from 'axios'

export default function Feedback({ t }) {
  const [validated, setValidated] = useState(false)
  const [msg, setMsg] = useState(false)
  const username = useRef()
  const email = useRef()
  const message = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    axios({
      method: 'post',
      url: process.env.REACT_APP_APPRECT_DATAURL + process.env.REACT_APP_MESSAGE,
      data: {
        username: username.current.value,
        email: email.current.value,
        message: message.current.value,
      }
    })
      .then(() => {
        setValidated(false);
        // username.current.value = ''
        // email.current.value = ''
        // message.current.value = ''
        setMsg(true)

      })
      .catch(() => setMsg(false))
  };

  return (

    <div className='contacts'>
      <div>
        <h2>
          {t('info')}
        </h2>
        <p>
          <ImLocation2 style={{ color: "#2196f3" }} />
          {t('contact')}:{t('direction')}
        </p>
        <p>
          <BsFillTelephoneFill style={{ color: "#2196f3" }} />
          {t('tel')}
        </p>
        <p>
          <MdEmail style={{ color: "#2196f3" }} />
          {t('E-mail')}
        </p>
        <div className='social'>
          <h6>{t('social')}</h6>
          <SocialIcon target='_blank' url="https://facebook.com" />
          <SocialIcon target='_blank' url="https://instagram.com" />
          <SocialIcon target='_blank' url="https://youtube.com" />
          <SocialIcon target='_blank' url="https://linkedin.com" />
          <SocialIcon target='_blank' url="https://twitter.com" />
        </div>
      </div>
      <div>
      </div>
      <div className='msg'>
        <h2>{t('msg')}</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="validationCustom05">
            <Form.Label>{t('name')}</Form.Label>
            <Form.Control ref={username} type="text" required />
            <Form.Control.Feedback type="invalid">{t('invalidName')}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom05">
            <Form.Label>{t('email')}</Form.Label>
            <Form.Control type="email" ref={email} required pattern='(\w\.?)+@[\w\.-]+\.\w{2,4}' />
            <Form.Control.Feedback type="invalid">{t('emailerr')}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom05">
            <Form.Label>{t('msg')}</Form.Label>
            <Form.Control ref={message} required as="textarea" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <h3 className='error message'>{msg ? t('successfuly') : null}</h3>
            <Button type="submit">{t('send')}</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}
