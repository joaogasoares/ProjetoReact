import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Página Principal</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/cadastrar">Cadastrar Séries</Link>
        </li>
        <li>
          <Link to="/listar">Lista de Séries</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;