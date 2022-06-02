import React from 'react';
import './Linkedin.scss';

export default function Linkedin(props) {
    const {linkedinUrl} = props;

    return (
        <a href={linkedinUrl} target={'_blank'} rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" className="linkedin"/>
        </a>
    );
}
