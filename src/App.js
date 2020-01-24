import React from 'react';
import './styles/styles.scss';
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Cards from './components/Cards'
// Import de React ROuter que es la libreria que me permite redirijir a paginas dentro de mi pagina
// el Switch sirve como otros lenguajes, que vaya probando y en caso de que Node, que se ponga el route por defecto
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() { 
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/cards" exact component={
          () => (
            <>
            <div className="ed-grid m-grid-3">
            <Cards 
            title="EJemplo2"
            image="https://thehappening.com/wp-content/uploads/2018/12/sombreros-perritos-7.jpg"
            price="20USD"
            imagenmini="https://thehappening.com/wp-content/uploads/2018/12/sombreros-perritos-7.jpg"/>
            <Cards
            image="https://media.metrolatam.com/2019/01/19/capturadepantalla20190119alas104055-f74699803359887dcdc4e5e96600342c-600x400.jpg"
            imagenmini="https://media.metrolatam.com/2019/01/19/capturadepantalla20190119alas104055-f74699803359887dcdc4e5e96600342c-600x400.jpg"
            />
            <Cards
            image="https://www.sopitas.com/wp-content/uploads/2018/04/goma-perrito-japones-famoso-instagram-11.jpg"
            imagenmini="https://www.sopitas.com/wp-content/uploads/2018/04/goma-perrito-japones-famoso-instagram-11.jpg"
            />
            </div>
            </>
          )
        } />
        <Route path="/formulario" exact component={Formulario} />
        <Route component={
          () => (
            <div>
              <h1>Error 404</h1>
              <span>Página no encontrada</span>
            </div>
          )
        } />
      </Switch>
    </Router>
    
  );
}

export default App;
