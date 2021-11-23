import { MovieCard } from './MovieCard';
// import movies from '../movies.json';
import styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from './spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MoviesGrid( {search} ){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // useEffect -> efecto secundario, se ejecuta despues del render del componente
    useEffect(() => {
        // debugger;
        const url = search ? "/search/movie?query="+ search +"&page="+ page : "/discover/movie?page="+ page;

        get(url).then((data)=>{
            setMovies((_prev) => _prev.concat(data.results));
            setHasMore( data.total_pages > page );
            setIsLoading(false);
        })

    }, [search, page]);

    //if(isLoading)return <Spinner />

    return (
        <InfiniteScroll
            dataLength={movies.length} 
            next={ () => setPage((_prev) => _prev + 1) }
            hasMore={ hasMore } 
            loader={<Spinner />}>
            <ul className={ styles.moviesGrid } >
                {
                    movies.map((movie) => {
                        return <MovieCard key = {movie.id} movie = {movie} />
                    })
                }
            </ul>
        </InfiniteScroll>
    )
}