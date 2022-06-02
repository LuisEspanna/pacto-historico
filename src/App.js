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
  const [hashtag, setHashtag] = useState('');
  const onTextChange = (event) => {
    setText(event.target.value.toLowerCase());
  };
  const onHashtagChange = (event) => {
    setHashtag(event.target.value.replace(' ', ''));
  };

  return (
    <div className='App'>
      <nav class="navbar navbar-dark bg-dark sticky-top bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Nombre mamerto generator</div>
        </div>
      </nav>
      <Header />
      <div className='inputs-container'>
        <div class="mb-3">
          <input
            type="text"
            class="form-control mb-3"
            id="name"
            placeholder="Ingresa tu nombre"
            onChange={onTextChange}
          />
          <input
            type="text"
            class="form-control"
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
            <Logo className={'loguito'} />
          )}
        </div>
        <div className='hashtag'>{hashtag}</div>
        <img src={logoPacto} alt='' className='logoPacto' />
      </div>
      <DownloadIcon 
          className='download-icon'
          onClick={() => handleDownloadImage(printableRef)}
       />
       <div className='row footer p-0'>
            <div className='col-2 p-4'>Colaboradores</div>
            <div className='col p-3'>
              <div className='row'>Luis </div>
              <div className='row'>Juan</div>
              <div className='row'>Daniel </div>
            </div>
       </div>
    </div>
  );
}

export default App;
