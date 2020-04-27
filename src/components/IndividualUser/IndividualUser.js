import React from 'react';

const individualUser = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p className='contactInfo'>@{props.username}</p>
            <p>Favorite Movie: {props.favoriteMovie}</p>
        </div>
    );
};


export default individualUser;