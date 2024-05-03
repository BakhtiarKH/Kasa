import React, { useState, useEffect } from "react";

function Gallery({image, titre}) {
    return(
        <>
            <img className="locationImg" src={image} alt="Aperçu de la location" />
            <h3 className="locationNom">{titre}</h3>
        </>
    );
}

export default Gallery;
