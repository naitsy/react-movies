const API = "https://api.themoviedb.org/3";

export function get(url, ){
    return fetch(API + url, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzYzMzZjMTQ4MGQ0OWQ3YTFlNDhmZDU4NGY1OGM0NSIsInN1YiI6IjYxNjg3ZTRhODFjN2JlMDA5MjdmZWM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mp2eZtuXXmQOZFbz0csAC9K6KtPIUy2LAGhG9Z3-ZxY",
            "Content-type" : "application/json;charset=utf-8"
        }
    })
    .then((result) => result.json())

}