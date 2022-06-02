import './App.scss';
import React, { useState } from 'react';
import Letter from './Letter';
import Header from './Header';
import Logo from './Logo';
import logoPacto from './logo.png';
import { handleDownloadImage } from './imageCreator';

function App() {
  const printableRef = React.useRef();
  const [text, setText] = useState('');
  const onTextChange = (event) => {
    setText(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <Header />
      <div className="inputs-container">
        <input
          type="text"
          className="nameField"
          placeholder="Ingresa tu nombre"
          onChange={onTextChange}
        />
        <button
          className="download-button"
          type="button"
          onClick={() => handleDownloadImage(printableRef)}
        >
          Descargar imagen
        </button>
      </div>
      <div ref={printableRef} className="container">
        <div className="letter-box">
          {text.split('').map((l, i) => (
            <Letter
              key={i}
              letter={l === 'o' && i < text.length - 1 ? 'O' : l}
              index={i}
            />
          ))}

          {text.charAt(text.length - 1) !== 'o' && (
            <Logo className={'loguito'} />
          )}
        </div>
        <img src={logoPacto} alt="" className="logoPacto" />
      </div>
    </div>
  );
}

export default App;
