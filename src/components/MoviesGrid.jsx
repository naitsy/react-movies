import { MovieCard } from './MovieCard';
// import movies from '../movies.json';
import styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from './spinner';

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);
    
    // useEffect -> efecto secundario, se ejecuta despues del render del componente
    useEffect(() => {
        get("/discover/movie").then((data)=>{
            setMovies(data.results);
            setIsLoading(false);
        })

    }, []);

    if(isLoading)return <Spinner />

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