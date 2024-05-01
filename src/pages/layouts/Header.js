import React from "react";
import logo from "../../assets/images/logo1.png";

function Header() {
    return(
        <header>
            <img src={logo} alt="Logo de Kasa" />
            <nav>
                <a className="navOption navSelected">Acceuil</a>
                <a className="navOption" href="./apropos.html">À propos</a>
            </nav>
        </header>
    );
}

export default Header;