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
            <p className="t2 s-mb-0">Tienda de cuchitos</p>
            <p> Y este es el Subtítulo de mi  banner</p>
            <a href="www.google.com" className="button">Botón del banner</a>
          </div>
          </div>
        </div>
      </div> 
      {/* ACA ESTA LAS CARDS DE EDGRID */}
      <div className="ed-grid m-grid-3">
        <Cards 
        title="Cuchitos negros"
        price="40CLP" 
        image="https://i0.wp.com/recetasypoemas.com/wp-content/uploads/2017/04/2c1d1046656edddd5b34d744b3e4e165.jpg?resize=300%2C300&ssl=1"
        />
        <Cards 
        title="Cuchitos rubios"
        price="30CLP" 
        image="https://s3.amazonaws.com/ry3/51_i_2003022598.5c6216f6.7831602d.full.jpeg"
        />
        <Cards 
        title="Cuchitos grises"
        price="20CLP" 
        image="https://cdn.prod-carehubs.net/n1/802899ec472ea3d8/uploads/2014/02/shutterstock_225417641-300x300.jpg"
        />
      </div>
    </>
    
  );
}

export default App;
