import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '..'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <div className='logo'>
                  <img src="../../images/iBicosLogo.svg" alt="iBicos Logo" width="75%"/>
                </div>
              iBicos
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Como Funciona?
                </Link>
              </li>
              <li className='nav-btn'>
                <form>
                  <div className='search--activities'>
                    <input className='box--search' type="text" id="searchNoLogin" placeholder="Pesquise nossos anunciantes!" />
                    <button className='btn--search' type="submit">
                      <img src='../../images/magnifyingGlass.svg' width="50%" alt="Pesquisar"/>
                    </button>
                  </div>
                </form>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/signUp' className='btn-link'>
                    <Button buttonStyle='btn--outline'>INSCREVA-SE!</Button>
                  </Link>
                ) : (
                  <Link to='/signUp' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      INSCREVA-SE!
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;