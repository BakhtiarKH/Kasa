import React from "react";
import logo from "../../assets/images/logo2.png";

function Footer() {
    return(
        <footer>
            <img className="logoFooter" src={logo} alt="Logo de Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;