import * as React from 'react';
import './Footer.scss';
import ColombiaFlag from '../../assets/png/colombia-logo.png';
import HorseFace from '../../assets/png/horse-face.png';
import ColombiaIcon from '../../assets/png/colombia-icon.png';
import PetroFavicon from '../../assets/png/petro-favicon.png';
import FranciaPhoto from '../../assets/png/francia-photo.png';
import PetroPhoto from '../../assets/png/petro-photo.png';
import Linkedin from "../Linkedin";

export default function Footer() {
    return (
        <section className="footer">
            <div className="presidential-candidates">
                <div className="presidential-candidates__images">
                    <img src={FranciaPhoto} alt="Francia-Marquez"/>
                    <img src={PetroPhoto} alt="Gustavo-Petro"/>
                </div>
                <div className="presidential-candidates__information">
                    <img className="footer__logo" src={PetroFavicon}
                         alt="gustavo-icon"/>
                    <a target="_blank" rel="noreferrer"
                       href="https://gustavopetro.co/wp-content/uploads/2022/02/favicon.png">
                        Programa de Gobierno aquí
                    </a>
                </div>
            </div>
            <img className="colombia-logo" src={ColombiaFlag} alt="colombia-logo"/>
            <div className="developers-information">
                <div className="d-flex">
                    <h3>Colaboradores</h3>
                    <img className="developers-information__logo" src={HorseFace} alt="team-horse"/>
                </div>
                <p className="d-flex align-items-center">
                    Desarrolladores de software.
                    <img className="developers-information__logo" src={ColombiaIcon} alt="colombia-icon"/>
                </p>
                <ul>
                    <li>Daniel Álvarez.</li>
                    <li>Juan P. Botina.</li>
                    <li className="align-items-center">Luis Ángel España Y.
                        <Linkedin linkedinUrl='https://www.linkedin.com/in/luis-angel-espa%C3%B1a-yepez-a384471a5/'/>
                    </li>
                    <li className="align-items-center">Francisco Zambrano.
                        <Linkedin linkedinUrl='https://www.linkedin.com/in/zsfrancisco'/>
                    </li>
                </ul>
            </div>
        </section>);
}
