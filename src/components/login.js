import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Login.css';
import '..'

function Login() {

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
                    <p className="secondary">Login</p>
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
                <p className="main">Aqui você entra no sistema!</p>
            </div>
            <div>
                <form>
                    <div className="field">
                        <label for="user">Usuário:</label>
                        <input type="text" name="user" id="userEmail"></input>
                    </div>

                    <div className="field">
                        <label for="password">Senha:</label>
                        <input type="text" name="password" id="userPwd"></input>
                    </div>
                </form>
            </div>

            <div className="secondary">
                <Link to="/">
                    <p>Esqueceu sua senha?</p>
                    <img src="" alt="Esqueceu sua senha?" />
                </Link>
            </div>

            <div className="actionButton">
                <Button buttonStyle='btn--primary'>
                    Entrar
                </Button>
            </div>
        </div>
        
        
        
    </>
  );
}

export default Login;