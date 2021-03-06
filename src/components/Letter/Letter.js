import React from 'react';
import Logo from '../Logo';

export default function Letter({letter, index}) {
    const classes = `letter letter-${letter.toLowerCase()} letter-${index % 5}`;

    return (
        <>
            {letter !== 'o' ? (
                <div className={classes}>{letter}</div>
            ) : (
                <Logo className={'logo'}/>
            )}
        </>
    );
}
