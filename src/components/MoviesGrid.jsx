import { MovieCard } from './MovieCard';
// import movies from '../movies.json';
import styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    
    // useEffect -> efecto secundario, se ejecuta despues del render del componente
    useEffect(() => {
        get("/discover/movie").then((data)=>{
            console.log(data);
            setMovies(data.results);
        })

    }, []);


    return (
        <ul className={ styles.moviesGrid } >
            {
                movies.map((movie) => {
                    return <MovieCard key = {movie.id} movie = {movie} />
                })
            }
        </ul>
    )
}