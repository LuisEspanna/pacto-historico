import React from 'react';
import './ColorSelectors.scss';

export default function ColorSelectors(props) {
    const {setBackgroundColorImage} = props;

    const onChangeBackgroundColorImage = (colorClassName) => setBackgroundColorImage(colorClassName);

    return (
        <>
            <div className="color-selectors">
                <button type="button" className="btn color__blue"
                        onClick={() => onChangeBackgroundColorImage('color__blue')}>Azul
                </button>
                <button type="button" className="btn color__purple"
                        onClick={() => onChangeBackgroundColorImage('color__purple')}>Púrpura
                </button>
                <button type="button" className="btn color__pink"
                        onClick={() => onChangeBackgroundColorImage('color__pink')}>Rosa
                </button>
                <button type="button" className="btn color__red"
                        onClick={() => onChangeBackgroundColorImage('color__red')}>Rojo
                </button>
            </div>
            <div className="color-selectors">
                <button type="button" className="btn color__orange"
                        onClick={() => onChangeBackgroundColorImage('color__orange')}>Naranja
                </button>
                <button type="button" className="btn color__yellow"
                        onClick={() => onChangeBackgroundColorImage('color__yellow')}>Amarillo
                </button>
                <button type="button" className="btn color__green"
                        onClick={() => onChangeBackgroundColorImage('color__green')}>Verde
                </button>
                <button type="button" className="btn color__white"
                        onClick={() => onChangeBackgroundColorImage('color__white')}>Blanco
                </button>
            </div>
        </>
    );
}
