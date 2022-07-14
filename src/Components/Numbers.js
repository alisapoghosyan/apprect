import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Numbers({ t, phone }) {
  const [value, setValue] = useState()
  return (
    <PhoneInput
      defaultCountry="AM"
      international
      placeholder={t('phone')}
      value={value}
      required
      className="tel"
      ref={phone}
      onChange={setValue} />
  )
}

export default Numbers