import React, {useState} from 'react';
import TextFields from "./TextFields";
import Letter from "../Letter";
import Logo from "../Logo";
import {handleDownloadImage} from "../../imageCreator";
import DownloadIcon from "../DownloadIcon";
import logoPacto from "../../assets/png/logo.png";
import ColorSelectors from "./ColorSelectors";
import './Generator.scss';

export default function Generator() {
    const printableRef = React.useRef();

    const [text, setText] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [backgroundColorImage, setBackgroundColorImage,] = useState('color__white');

    return (
        <>
            <TextFields setText={setText} setHashtag={setHashtag}/>
            <ColorSelectors setBackgroundColorImage={setBackgroundColorImage}/>
            <button className="button-download__desktop btn btn-primary mb-3"
                    onClick={() => handleDownloadImage(printableRef)}>
                Descargar
            </button>
            <DownloadIcon className='button-download__mobile' onClick={() => handleDownloadImage(printableRef)}/>
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
        </>
    );
}
