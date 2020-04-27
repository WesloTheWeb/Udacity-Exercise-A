import React from 'react';

const movies = {
    1: {
        id: 1,
        name: 'Planet Earth',
    },
    2: {
        id: 2,
        name: 'Selma',
    },
    3: {
        id: 3,
        name: 'Million Dollar Baby',
    },
    4: {
        id: 4,
        name: 'Forrest Gump',
    },
    5: {
        id: 5,
        name: 'Get Out',
    },
};

// convert obj to array
const movieObj = Object.keys(movies).map(i => movies[i]);


const MovieList = (props) => {
    return (
        <ol className="movieStyling">
            {movieObj.map(movie => {
                return (
                    <li key={movie.id}>{movie.name}</li>
                )
            })}
        </ol>
    );
};



export default MovieList;