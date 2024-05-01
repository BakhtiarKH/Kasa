import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "./layouts/Layout.js";
import Gallery from "./Composants/Gallery.js";
import ListeLogements from "../assets/api/logements.json";

function Index() {
    return(
        <div className="liste-logements">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Gallery key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
        </div>

    );
}

export default Index;