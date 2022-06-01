import React from 'react';
import Logo from './Logo'

function Letter({letter, index}) {
  const color = () => {
    let counter = 0;
    for (let i = 0; i < index; i++) {
      if(counter < 3) counter += 1;
      else counter = 0;
    }

    return counter;
  };


  return (
      <>
      {
        letter !== 'o' ?
        <div className={`letter letter-${letter.toLowerCase()} letter-${color()}`}>
            {
            letter
            }
        </div>
        :
        <Logo className={'logo'}/>
      }
      </>
    
  )
};

export default Letter;
