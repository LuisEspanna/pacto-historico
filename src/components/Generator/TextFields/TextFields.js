import React from 'react';
import './TextFields.scss';

export default function TextFields(props) {
    const {setText, setHashtag} = props;

    const onTextChange = (event) => setText(event.target.value.toLowerCase());
    const onHashtagChange = (event) => setHashtag(event.target.value.replace(' ', ''));

    return (
        <div className='text-fields mt-4'>
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
    );
}
