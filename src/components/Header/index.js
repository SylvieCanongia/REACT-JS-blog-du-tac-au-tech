import React from 'react';

import './header.scss';

const Header = () => (
  <nav className="header">
    <a className="header__link header__link--active">Accueil</a>
    <a className="header__link">React</a>
    <a className="header__link">Vue JS</a>
    <a className="header__link">Formations</a>
    <a className="header__link">Autre</a>
  </nav>
);

export default Header;
