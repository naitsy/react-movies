import { MovieCard } from './MovieCard';
// import movies from '../movies.json';
import styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from './spinner';
import { useQuery } from '../utils/hooks';


export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);   

    const query = useQuery();
    const search = query.get("search");

    // useEffect -> efecto secundario, se ejecuta despues del render del componente
    useEffect(() => {
        const url = search ? "/search/movie?query="+ search : "/discover/movie";

        get(url).then((data)=>{
            setMovies(data.results);
            setIsLoading(false);
        })

    }, [search]);

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