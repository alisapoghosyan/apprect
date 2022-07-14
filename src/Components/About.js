import React from 'react'

const About = ({ t }) => {
  return (
    <>
      <div className='aboutBody'>
        <h1>{t('aboutUs')}</h1>
        <p>{t('aboutInfo')}</p>
        <p>{t('aboutInfo2')}</p>

        <hr />

        <p>{t('tel')}</p>
        <p>{t('vat')}</p>

        <p>{t('address')}</p>
        <p>{t('E-mail')}</p>
        <hr />
      </div>
    </>
  )
}

export default About