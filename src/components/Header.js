import React from 'react';
import headerLogo from '../images/header-logo.svg'
import './Header.css'

function Header() {
    return (
<header className="header">
            <img src={headerLogo} alt="Слова: место, Россия - на английском" className="header__logo" />
        </header>
   );
}
export default Header;