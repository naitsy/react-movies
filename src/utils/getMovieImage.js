import placeholder from "../film-poster-placeholder.png";

export function getMovieImage(path, width){
    // debugger;
    return path ? "https://image.tmdb.org/t/p/w"+ width + path: placeholder;

}