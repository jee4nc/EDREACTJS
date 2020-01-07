import React from 'react';
import './styles/styles.scss';
import Cards from './components/Cards'

function App() {
  return (
    // code copiado de edgird
    // RECORDAR QUE CLASS DEBE SER CLASSNAME PORQUE ES JSX
    <>
      <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="banner" src="https://image.freepik.com/free-vector/health-care-background-banner-with-medical-electrocardiogram_1017-20049.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Este es mi banner</p>
            <p> Y este es el Subtítulo de mi  banner</p>
            <a href="www.google.com" className="button">Botón del banner</a>
          </div>
          </div>
        </div>
      </div> 
      {/* ACA ESTA LAS CARDS DE EDGRID */}
      <div className="ed-grid m-grid-3">
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </>
    
  );
}

export default App;
