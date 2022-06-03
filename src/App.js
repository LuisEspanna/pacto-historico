import './App.scss';
import React, {useState} from 'react';
import Letter from './components/Letter/Letter';
import Logo from './components/Logo';
import DownloadIcon from './components/DownloadIcon';
import Footer from './components/Footer';
import logoPacto from './assets/png/logo.png';
import {handleDownloadImage} from './imageCreator';

function App() {
    const printableRef = React.useRef();
    const [text, setText] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [backgroundColorImage, setBackgroundColorImage,] = useState('color__white');
    const onTextChange = (event) => setText(event.target.value.toLowerCase());
    const onHashtagChange = (event) => setHashtag(event.target.value.replace(' ', ''));
    const onChangeBackgroundColorImage = (colorClassName) => setBackgroundColorImage(colorClassName);

    return (
        <div className='App'>
            <nav className="navbar navbar-dark bg-dark sticky-top bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand">Nombre mamerto generator</div>
                </div>
            </nav>
            <div className='inputs-container mt-4'>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="name"
                        placeholder="Ingresa tu nombre"
                        onChange={onTextChange}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="hashtag"
                        placeholder="#"
                        onChange={onHashtagChange}
                    />
                </div>
            </div>
            <div className="color-selector">
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
            <div ref={printableRef} className={backgroundColorImage}>
                <div className='letter-box'>
                    {text.split('').map((l, i) => (
                        <Letter
                            key={i}
                            letter={l === 'o' && i < text.length - 1 ? 'O' : l}
                            index={i}
                        />
                    ))}
                    {text.charAt(text.length - 1) !== 'o' && (
                        <Logo className={'loguito'}/>
                    )}
                </div>
                <div className='hashtag'>{hashtag}</div>
                <img src={logoPacto} alt='' className='logoPacto'/>
            </div>
            <DownloadIcon className='download-icon'
                          onClick={() => handleDownloadImage(printableRef)}/>
            <Footer/>
        </div>
    );
}

export default App;
