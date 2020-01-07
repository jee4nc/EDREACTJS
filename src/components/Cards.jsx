import React, {Component} from 'react';

class Cards extends Component {
    render() {
        return <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="http://www.milapuntocom.com/wp-content/uploads/2015/08/cats-portada-480x480.jpg" alt="cardss"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src="" alt="cardss"/>
                </div>
                </div>
                <span className="small">Alexys Lozada</span>
            </div>
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="www.google.cl">$ 20USD</a>
            </div>
        </div>
    </article>
    }
}
export default Cards;