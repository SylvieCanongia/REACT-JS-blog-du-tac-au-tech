import React from 'react';
import { Link } from 'react-router-dom';

import './notFound.scss';

/** 404 page component */
const NotFound = () => (
  <div className="notFound">
    <p className="notFound__404">404</p>
    <p className="notFound__content">Désolé, la page que vous recherchez n'existe pas ou plus. Mais on a plein d'articles intéressants <Link to="/"><span>par ici</span></Link> ! </p>
  </div>
);

export default NotFound;
