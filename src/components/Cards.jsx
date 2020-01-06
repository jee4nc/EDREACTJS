import React, {Component} from 'react';

class Cards extends Component {
    render() {
        return <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://res.cloudinary.com/edteam/image/upload/w_400/v1573259688/courses/bi-poster.png" alt="cardss"/>
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