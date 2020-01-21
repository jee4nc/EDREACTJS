import React  from 'react';
import Proptypes from 'prop-types';

// CONSTANTE EN LA CUAL SE INGRESA NOMBRE Y OTRO ATRIBUTOS
const persona = {"nombre": "Jean", "apellido": "Aldea" , "edad": 21}
// CONSTANTE EN LA CUAL SE CREA UN METODO QUE MARQUE LA MAYORIA DE EDAD COMO 18
const mayoredad = edad => edad > 18

// ACA DIGO QUE RECIBA EL OBJETO props
// Posteriormente, cambio props para poner los atributos del objeto props
const Cards = ({title,image,price,imagenmini}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            {/* ACA ESTOY PONIENDO ATRIBUTOS DINAMICOS DENTRO DE JSX */}
            {
                // estoy ocupando las ventajas de las expresiones para hacer un validador en caso
                // de que no haya una imagen, para que existe una por default
                image
                ? <img src={image} alt={title}/>
                : <p>NO hay imagen</p>
            }
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            {`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`}
            </h3>
            <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    {
                        imagenmini
                        ? <img src={imagenmini} alt="cardss"/>
                        : <p>No hay imagen</p>
                    }
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
// Para asignar que tipo de dato tiene que recibir
Cards.propTypes = {
    title: Proptypes.string,
    image: Proptypes.string,
    price: Proptypes.string,
    imagenmini: Proptypes.string
}

// Para asignar los valores por defecto de las props
Cards.defaultProps = {
    title: "No se encontro titutlo",
    image: "https://st3.depositphotos.com/3073455/18873/v/1600/depositphotos_188738686-stock-illustration-cartoon-cat-seller-vector-illustration.jpg",
    price: "--",
    imagenmini: "https://st3.depositphotos.com/3073455/18873/v/1600/depositphotos_188738686-stock-illustration-cartoon-cat-seller-vector-illustration.jpg"
}

export default Cards;