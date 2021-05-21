import React from 'react';

import './header.scss';

const Header = () => (
  <nav className="header">
    <ol className="header__list">
      <li className="header__list__item"><a href="#">Accueil</a></li>
      <li className="header__list__item"><a href="#">React</a></li>
      <li className="header__list__item"><a href="#">Vue JS</a></li>
      <li className="header__list__item"><a href="#">Formations</a></li>
      <li className="header__list__item"><a href="#">Autre</a></li>
    </ol>
  </nav>
);

export default Header;
