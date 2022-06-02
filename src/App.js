import './App.scss';
import React, { useState } from 'react';
import Letter from './components/Letter';
import Header from './components/Header';
import Logo from './components/Logo';
import DownloadIcon from './components/DownloadIcon';
import logoPacto from './assets/logo.png';
import { handleDownloadImage } from './imageCreator';

function App() {
  const printableRef = React.useRef();
  const [text, setText] = useState('');
  const onTextChange = (event) => {
    setText(event.target.value.toLowerCase());
  };

  return (
    <div className='App'>
      <Header />
      <div className='inputs-container'>
        <input
          type='text'
          className='name-field'
          placeholder='Ingresa tu nombre'
          onChange={onTextChange}
        />
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
            <Logo className={'loguito'} />
          )}
        </div>
        <img src={logoPacto} alt='' className='logoPacto' />
        <DownloadIcon 
          className='download-icon'
          onClick={() => handleDownloadImage(printableRef)}
        />
      </div>
    </div>
  );
}

export default App;
