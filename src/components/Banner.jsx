import React from 'react';

const Banner = () => (
<div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="banner" src="https://image.freepik.com/free-vector/health-care-background-banner-with-medical-electrocardiogram_1017-20049.jpg"/>
            <div className="main-banner__data s-center">
                <p className="t2 s-mb-0">Tienda de Prueba</p>
            <p> Y este es el Subtítulo de mi  banner</p>
            <a href="www.google.com" className="button">Botón del banner</a>
            </div>
        </div>
    </div>
</div> 
)

export default Banner;