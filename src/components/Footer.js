import * as React from 'react';
import ColombiaLogo from '../assets/colombia-logo.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="presidential-candidates">
                <div className="presidential-candidates__images">
                    <img src="https://gustavopetro.co/wp-content/uploads/2022/04/francia2-1-1.png"
                         alt="Francia-Marquez"/>
                    <img src="https://gustavopetro.co/wp-content/uploads/2022/04/petro.png" alt="Gustavo-Petro"/>
                </div>
                <div className="d-flex align-items-center presidential-candidates__information">
                    <img className="footer__logo" src="https://gustavopetro.co/wp-content/uploads/2022/02/favicon.png"
                         alt="gustavo-icon"/>
                    <a target="_blank" rel="noreferrer"
                       href="https://gustavopetro.co/wp-content/uploads/2022/02/favicon.png">
                        Programa de Gobierno aquí
                    </a>
                </div>
            </div>
            <img className="colombia-logo" src={ColombiaLogo} alt="colombia-logo"/>
            <div className="developers-information">
                <div className="d-flex">
                    <h3>Colaboradores</h3>
                    <img className="footer__logo"
                         src="https://cdn.iconscout.com/icon/free/png-256/horse-face-hairy-animal-33904.png"
                         alt="team-horse"/>
                </div>
                <p className="d-flex align-items-center">
                    Desarrolladores de software de la ciudad de Pasto
                    <img className="footer__logo"
                         src="https://cdn.pixabay.com/photo/2018/06/02/05/16/colombia-3447803_1280.png"
                         alt="colombia-icon"/></p>
                <ul>
                    <li>Daniel Álvarez</li>
                    <li>Juan P. Botina</li>
                    <li>Luis España</li>
                    <li>Francisco J. Zambrano</li>
                </ul>
            </div>
        </div>);
}
