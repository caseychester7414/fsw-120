
import React from 'react';

const Card = ({ fullName }) => {

    return (
        <div>
            <li>
                <h1>{fullName}</h1>
            </li>
        </div>
    );
}

export default Card