import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Home.css';
import '..'

function Home(){

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
      <div className="firstRow">
            <div>
              <p className="start">Já fez seu cadastro?</p>
            </div>
            <div className="start">
                {button ? (
                  <Link to='/signUp'>
                    <Button 
                      buttonStyle='btn--primary'
                      buttonSize='btn--medium'
                    >
                        Entre aqui
                    </Button>
                  </Link>
                ) : (
                  <Link to='/signUp'>
                    <Button
                      buttonStyle='btn--primary'
                      buttonSize='btn--medium'
                    >
                      Entre aqui
                    </Button>
                  </Link>
                )
                }
              </div>
        </div>
      <div className="spaces">
        <div className="firstColumn"></div>
        <div className="mainColumn">
        <div className="imgStart">
            <img src='../../images/prestadores.png' alt="prestadores de serviço"/>
            <h2>iBicos</h2>
        </div>

        <div className="buttonsStart">
          <div className="optionStart">
            {button ? (
              <Link to='/signUp'>
                <Button 
                  buttonStyle='btn--primary'
                  buttonSize='btn--medium'
                >
                    Anunciante
                </Button>
              </Link>
            ) : (
              <Link to='/signUp'>
                <Button
                  buttonStyle='btn--primary'
                  buttonSize='btn--medium'
                >
                  Anunciante
                </Button>
              </Link>
            )
            }
          </div>

          <div className="optionStart">
            {button ? (
              <Link to='/signUp'>
                <Button 
                  buttonStyle='btn--secondary' 
                  buttonSize='btn--medium'
                >
                    Cliente
                </Button>
              </Link>
            ) : (
              <Link to='/signUp'>
                <Button
                  buttonStyle='btn--secondary'
                  buttonSize='btn--medium'
                >
                  Cliente
                </Button>
              </Link>
            )
            }
          </div>
        </div>
      </div>
      </div>
      </>
    
  )
}

export default Home;