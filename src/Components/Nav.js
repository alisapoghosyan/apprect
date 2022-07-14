import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from "react-router-dom";


export default function NavBar({ changeLanguage, t }) {

  const changeLanguageLocalStorage = lng => {
    localStorage.setItem('lang', lng)
    changeLanguage(localStorage.getItem('lang'))
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className="waviy">
              <span >N</span>
              <span >O</span>
              <span >t</span>
              <span >i</span>
              <span >f</span>
              <span>y</span>
              <span></span>
              <span >M</span>
              <span >e</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navLinks">
              <Link className='links' to={"/"}>{t('home')}</Link>
              <Link className='links' to={'/about'}>
                {t('about')}
              </Link>
              <NavDropdown title={t('languages')} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#" onClick={() => changeLanguageLocalStorage('en')}>EN</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => changeLanguageLocalStorage('ru')}>RU</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => changeLanguageLocalStorage('hy')}>HY</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='navLinks'>
              <Link className='links' to={'/feedback'}>
                {t('feedback')}
              </Link>
              <hr style={{ color: 'rgb(155,157,158)' }} />
              <Link className='links' to={'/login'}>{t('login')}</Link>
              <RiShoppingBagLine />
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
