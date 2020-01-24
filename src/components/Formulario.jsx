import React, {Component} from 'react';

class Formulario extends Component{
    // METODO CONSTRUCTOR QUE RECIBE LAS PROPS Y LAS ASIGNA A COMPONENT MEDIANTE SUPER
    constructor(props) {
        super(props)
        // EL state me sirve para poder obtener el valor de un objeto el cual se va actualizando
        this.state = {
            nombre: "",
            correo: ""
        }
        // Esto permite que el metodo le de el valor de this a la funcion
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarNombre = this.cambiarNombre.bind(this)
    }

    cambiarCorreo (dato) {
        this.setState({correo: dato.target.value})
    }
    cambiarNombre (dato) {
        this.setState({ nombre: dato.target.value})
    }
    render() {
        return ( 
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input
                                type="text" 
                                onChange={this.cambiarNombre}/>
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input type="email" onChange={this.cambiarCorreo} />
                        </div>
                    </div>
                    <div className="form__item">
                        <input className="button full" type="submit" value="Enviar"/>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }
}

export default Formulario;