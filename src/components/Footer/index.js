import React from 'react';
import { RiCopyrightLine } from 'react-icons/ri';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <p>Du Tac au Tech, le blog du développeur front-end - 2021
      <span className="footer__icon"><RiCopyrightLine /></span>
    </p>
  </footer>
);

export default Footer;
