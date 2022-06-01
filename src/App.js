import './App.scss';
import React, {useState} from 'react';
import Letter from './Letter';
import Logo from './Logo';
import logoPacto from './logo.png'
function App() {

  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <div className='header'>
        <a 
          href="https://www.linkedin.com/in/luis-angel-espa%C3%B1a-yepez-a384471a5/"
          target={'_blank'} rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" className='linkedin'/>
        </a>       
      </div>
      <input 
        type="text"
        className='nameField'
        placeholder='Ingresa tu nombre'
        onChange={onChange}
      />

      <div className='letter-box'>
        {
          text.split('').map((l, i) => 
            <Letter
              key={i}
              letter={l === 'o' && i < text.length -1 ? 'O' : l}
              index={i}/>
          )
        }

        {
          text.charAt(text.length-1) !== 'o' && 
          <Logo className={'loguito'}/>
        }
      </div>
      <img src={logoPacto} alt="" className='logoPacto'/>
    </div>
  );
}

export default App;
