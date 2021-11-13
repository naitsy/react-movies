import styles from './SearchBar.module.css';
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router';
import { useQuery } from '../utils/hooks';
import { useEffect } from 'react';

export function SearchBar() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);


    const submitHandle = (e) => {      
        e.preventDefault();
        history.push("/?search="+ searchText);
    }


    return (
        
        <form className={ styles.searchContainer } onSubmit={ submitHandle }>
            <div className={ styles.searchBox }>
                <input type="text" className={ styles.searchInput } value={searchText} onChange={(e) => setSearchText(e.target.value)}  />
                <button type="submit" className={ styles.searchButton }>
                    <FaSearch size={20}/>                    
                </button>
            </div>
        </form>
        
    )
}
