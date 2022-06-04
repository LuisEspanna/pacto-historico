import React from 'react';
import Letter from "../../Letter";
import Logo from "../../Logo";
import LogoPacto from "../../../assets/png/logo.png";
import './Printable.scss';

export default function Printable(props) {
    const {text, hashtag, backgroundColorImage, printableRef} = props;

    return (
        <div className={backgroundColorImage} ref={printableRef}>
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
            <img src={LogoPacto} alt='' className='logoPacto'/>
        </div>
    );
}
