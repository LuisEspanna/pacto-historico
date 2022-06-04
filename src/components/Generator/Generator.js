import React, {useState} from 'react';
import TextFields from "./TextFields";
import {handleDownloadImage} from "../../imageCreator";
import DownloadIcon from "../DownloadIcon";
import ColorSelectors from "./ColorSelectors";
import Printable from "./Printable";
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
            <Printable text={text} hashtag={hashtag} backgroundColorImage={backgroundColorImage}
                       printableRef={printableRef}/>
        </>
    );
}
