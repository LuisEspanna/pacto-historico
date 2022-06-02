import './App.scss';
import React, {useState} from 'react';
import Letter from './components/Letter';
import Header from './components/Header';
import Logo from './components/Logo';
import DownloadIcon from './components/DownloadIcon';
import Footer from './components/Footer';
import logoPacto from './assets/png/logo.png';
import {handleDownloadImage} from './imageCreator';

function App() {
    const printableRef = React.useRef();
    const [text, setText] = useState('');
    const [hashtag, setHashtag] = useState('');
    const onTextChange = (event) => {
        setText(event.target.value.toLowerCase());
    };
    const onHashtagChange = (event) => {
        setHashtag(event.target.value.replace(' ', ''));
    };

    return (
        <div className='App'>
            <nav className="navbar navbar-dark bg-dark sticky-top bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand">Nombre mamerto generator</div>
                </div>
            </nav>
            <Header/>
            <div className='inputs-container'>
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
                        id="hastag"
                        placeholder="#"
                        onChange={onHashtagChange}
                    />
                </div>
            </div>
            <div ref={printableRef} className='container'>
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
            <DownloadIcon
                className='download-icon'
                onClick={() => handleDownloadImage(printableRef)}
            />
            <Footer/>
        </div>
    );
}

export default App;
