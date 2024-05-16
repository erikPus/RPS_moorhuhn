import React from 'react';
import '../Styles/konec_style.css';

const KonecPage = () => {

  return (
    <div className="container">
      <div className="card">
        <div className="title">KONEC IGRE</div>
        <div className="points">300 točk</div>
        <input className="input" type="text" placeholder="Vnesi ime" />
        <button className="button">Shrani na lestvico</button>
      </div>
    </div>
  );
  
};

export default KonecPage;
