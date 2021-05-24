import React, {useState, createContext} from 'react';

export const MovieContext = createContext();


export const MovieProvider = (props) =>{

    const [movies, setMovies] = useState([
        {
            name: 'Scarface',
            price: '100$',
            id: 1
        },
        {
            name: 'The Godfather',
            price: '100$',
            id: 2
        },
        {
            name: 'Scent of a Woman',
            price: '100$',
            id: 3
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
