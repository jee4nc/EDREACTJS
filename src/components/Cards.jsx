import React, {Component} from 'react';

// CONSTANTE EN LA CUAL SE INGRESA NOMBRE Y OTRO ATRIBUTOS
const persona = {"nombre": "Jean", "apellido": "Aldea" , "edad": 21}
// CONSTANTE EN LA CUAL SE CREA UN METODO QUE MARQUE LA MAYORIA DE EDAD COMO 18
const mayoredad = edad => edad > 18

// ACA DIGO QUE RECIBA EL OBJETO props
// Posteriormente, cambio props para poner los atributos del objeto props
const Cards = ({title,image,price}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            {/* ACA ESTOY PONIENDO ATRIBUTOS DINAMICOS DENTRO DE JSX */}
            <img src={image} alt={title}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            {`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`}
            </h3>
            <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src={image} alt="cardss"/>
                </div>
                </div>
            <span className="small">
                {
                    // ACA SE OCUPA LA EXPRESION PARA CREAR UN CICLO QUE DEVUELVA SEGUN LA EDAD
                    mayoredad(persona.edad)
                    ?  <h3>Soy mayor de edad</h3> 
                    :  <p>Soy menor de edad</p>
                }
            </span>
            </div>
            </div>
            <div className="s-main-center">
    <a className="button--ghost-alert button--tiny" href="www.google.cl">{price}</a>
            </div>
        </div>
    </article>
)

export default Cards;