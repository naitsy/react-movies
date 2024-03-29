import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
//import movie from './movie.json';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from '../components/spinner';
import { getMovieImage } from '../utils/getMovieImage';
//import { Link } from 'react-router-dom';


export function MovieDetails() {
    
    const { movieId } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movie, setMovie] = useState(null); // por que null?

    useEffect(()=>{
        get("/movie/"+ movieId ).then((data) => {
            setMovie(data);
            setIsLoading(false);            
        })
    },[movieId]);

    if( isLoading ) return <Spinner />
    // if( !movie ) return null;

    const imageUrl = getMovieImage(movie.poster_path, 500); // 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    return (
        <div className={ styles.detailsContainer } >
            <img className={`${styles.col} ${styles.movieImage}`} src={ imageUrl } alt={ movie.title } />
            <div className={`${styles.col} ${styles.movieDetails}`} >
                <p className={ styles.firstItem }>
                    <strong>Title:</strong> { movie.title }
                </p>
                <p>
                    <strong>Genres: </strong>
                    {
                        movie.genres.map((genre) => {                            
                            return genre.name;
                        }).join(' | ')
                    }
                </p>
                <p>
                    <strong>Web: </strong>
                    <a href={movie.homepage}>
                        {movie.homepage}
                    </a>
                </p>

                <p>
                    <strong>Description: </strong> { movie.overview }
                </p>
            </div>
        </div>
    )
}