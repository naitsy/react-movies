import React from "react";
import { MoviesGrid } from "../components/MoviesGrid";
import { SearchBar } from "../components/SearchBar";
import useDebounce, { useQuery } from "../utils/hooks";

export function Landing(){
    const query = useQuery();
    const search = query.get("search");

    const debounced = useDebounce(search, 400);

    return (
        <React.Fragment>
            <SearchBar />
            <MoviesGrid key={ debounced } search={ debounced } />            
        </React.Fragment>
    )
}