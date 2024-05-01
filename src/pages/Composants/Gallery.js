import React, { useState, useEffect } from "react";

function Gallery({id, image, titre}) {
    return(
        <div className="gallery" id={id}>
            <article className="locationArticle">
            <img src={image} alt="Aperçu de la location" />
            <h3 className="locationNom">{titre}</h3>
            </article>
        </div>
  );
}

export default Gallery;
