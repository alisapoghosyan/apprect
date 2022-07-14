import React from 'react'
import Nav from "./Components/Nav";
import Slider from "./Components/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import About from './Components/About';
import Feedback from './Components/Feedback';
import Login from './Components/LogIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Register from './Components/Register';
import Registered from './Components/Registered';



function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Router>
        <Nav t={t} changeLanguage={changeLanguage} />
        <Routes>
          <Route path='/' element={<Slider t={t} />} />
          <Route path='/registered' element={<Registered t={t} />} />
          <Route path='/about' element={<About t={t} />} />
          <Route path='/feedback' element={<Feedback t={t} />} />
          <Route path='/login' element={<Login t={t} />} />
          <Route path='/register' element={<Register t={t} />} />
          <Route path='/registered' element={<Registered t={t} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
