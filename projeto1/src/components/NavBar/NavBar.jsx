import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">
                    <span className="clapperboard-icon">🎬</span> 
                    Gerenciador de Séries
                </Link>
            </div>
            
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/cadastrar">Cadastrar Série</Link></li>
                <li><Link to="/listar">Lista de Séries</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;