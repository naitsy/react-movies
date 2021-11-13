import React from "react";
import { MoviesGrid } from "../components/MoviesGrid";
import { SearchBar } from "../components/SearchBar";

export function Landing(){
    return (
        <React.Fragment>
            <SearchBar />
            <MoviesGrid />            
        </React.Fragment>
    )
}