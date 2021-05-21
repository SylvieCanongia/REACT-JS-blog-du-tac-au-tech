import React from 'react';

import './header.scss';

const Header = () => (
  <nav className="header">
    <ol className="header__list">
      <li className="header__list__item"><a className="header__list__link"  href="#">Accueil</a></li>
      <li className="header__list__item"><a className="header__list__link"  href="#">React</a></li>
      <li className="header__list__item"><a className="header__list__link"  href="#">Vue JS</a></li>
      <li className="header__list__item"><a className="header__list__link"  href="#">Formations</a></li>
      <li className="header__list__item"><a className="header__list__link"  href="#">Autre</a></li>
    </ol>
  </nav>
);

export default Header;
