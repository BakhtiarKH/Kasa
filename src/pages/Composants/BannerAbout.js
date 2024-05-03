import React from "react";
import img from "../../assets/images/banniere2.png";

function BannerAbout() {
    return(
        <section className="banner">
            <img src={img} alt="Bannière" />
        </section>
    );
}

export default BannerAbout;