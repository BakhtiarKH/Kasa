import React, { useState } from "react";
import fleche from "../../assets/images/flecheOuverture.png";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="infoBloc">
      <div className="infoBlocTitle" onClick={toggleContent}>
        <h2>{title}</h2>
        <img src={fleche} alt="Afficher contenu" className="ouvrir"/>
      </div>
      {isOpen && <p className="content">{content}</p>}
    </div>
  );
}

export default Dropdown;
