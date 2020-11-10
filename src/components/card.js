import React from 'react';

function Card(props) {
    const { color } = props;
    return (
        <div>
            <p>{color}</p>
        </div>
    );
}

export default Card;