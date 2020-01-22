import React, {Component} from 'react';

class Formulario extends Component{
    // METODO CONSTRUCTOR QUE RECIBE LAS PROPS Y LAS ASIGNA A COMPONENT MEDIANTE SUPER
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="form__item">
                        <label>Nombre Completo</label>
                        <input type="text"/>
                    </div>
                    <div className="form__item">
                        <label>Correo Electronico</label>
                        <input type="email"/>
                    </div>
                    <div className="form__item">
                        <input className="button full" type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Formulario;