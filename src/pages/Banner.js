import React from "react";
import img from "../../assets/images/banniere1.png";

function Banner() {
    return(
        <section className="banner">
        <img src={img} alt="Bannière" />
        <h2>Chez vous, partout et ailleurs</h2>
      </section>
    );
}

export default Banner;