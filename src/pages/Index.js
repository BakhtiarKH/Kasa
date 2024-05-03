import React from "react";
import Gallery from "./Composants/Gallery.js";
import ListeLogements from "../assets/api/logements.json";
import Banner from "./Composants/Banner.js";

function Index() {
  return (
    <>
        <Banner />
        <div className="gallery">
        {ListeLogements.map((logement) => (
            <a key={logement.id} href={logement.id}>
            <Gallery
                image={logement.cover}
                titre={logement.title}
            />
            </a>
        ))}
        </div>
    </>
  );
}

export default Index;
