import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './RequirePwd.css';
import '..'

function RequirePwd() {

  window.addEventListener('resize', showButton);

  return (
    <>
        <div className="mainModal">
            <div className="firstRow">
                <div className="logo">
                    <Link to='/' onClick={closeMobileMenu}>
                        <div className='logo'>
                            <img src="../../images/iBicosLogo.svg" alt="iBicos Logo" width="75%"/>
                        </div>
                        iBicos
                    </Link>
                </div>

                <div className="title">
                    <p className="main">iBicos</p>
                    <p className="secondary">Recupere sua Senha!</p>
                </div>

                <div>
                    <Link to='/' onClick={closeMobileMenu}>
                        <div className='close'>
                            <p>X</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div>
                <p className="main">Insira seu e-mail abaixo!</p>
            </div>
            <div>
                <form>
                    <div className="field">
                        <label for="user">Usuário:</label>
                        <input type="text" name="user" id="userEmail"></input>
                    </div>
                </form>
            </div>

            <div className="actionButton">
                <Button buttonStyle='btn--primary'>
                    Recuperar
                </Button>
            </div>
        </div>        
    </>
  );
}

export default RequirePwd;