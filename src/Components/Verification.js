import React, { useRef, useState } from 'react';
import VerificationInput from "react-verification-input";
import { Link, useNavigate } from 'react-router-dom';
import { GrRotateLeft } from 'react-icons/gr'
import axios from 'axios';

export default function Verification(props) {
  const verificate = useRef()
  const [verificated, setVerificated] = useState()
  let navigate = useNavigate();



  const onchange = async () => {
    if (verificate.current.value.length === 6) {
      try {
        await axios({
          method: "post",
          url: process.env.REACT_APP_APPRECT_DATAURL + process.env.REACT_APP_CREATE,
          data:{code:verificate.current.value},
          headers: { "Content-Type": "multipart/form-data" },

        })
        .then(res =>  {
          setVerificated(res.data.message)
          // if(verificated){
          //   navigate("/registered ", { replace: true });
          // }
        })
      } catch (error) {
        console.log(error)
      }
     
    }
  }

  const handleMessage = () => {
    axios({
      method: 'post',
      url: process.env.REACT_APP_APPRECT_DATAURL + process.env.REACT_APP_CODE,
      data: {
        email: props.email,
      }
    })
      .then(res => props.setVerificationCode(res.message))
  };

  return (
    <div className='verification'>
      <Link to={'/register'} onClick={() => window.history.back()}>{props.t('register')}</Link>
      <h4>{props.t('verificate')}</h4>
      <GrRotateLeft onClick={handleMessage} />
      <VerificationInput
        ref={verificate}
        onChange={onchange}
        classNames={{
          container: "verificationContainer",
          character: "character",
          characterInactive: "character--inactive",
          characterSelected: "character--selected",
        }}
      />
      {verificated != "false" ? null : <h3 className='error'>{props.t('code')}</h3>}
    </div>
  )
}
