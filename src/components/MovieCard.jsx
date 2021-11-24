import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
//import { MovieDetails } from '../pages/MovieDetails';
import { getMovieImage } from '../utils/getMovieImage';

export function MovieCard({ movie }){
    //const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    const imageUrl = getMovieImage(movie.poster_path, 300);

    return (
        <Link to={ "/movies/" + movie.id }>
            <li className={styles.MovieCard}>
                <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title} />
                <div>{ movie.title }</div>
            </li>   
        </Link>
    )
}
