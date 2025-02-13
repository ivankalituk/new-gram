import { FC, useState } from "react";
import './searchBar.scss'
import SearchSVG from "../../assets/controled images/searchSVG";

const SearchBar: FC = () => {

    // смена цвета при фокусировке на сёрчбар
    const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false)

    const searchBarOnFocus = () =>{
        setSearchBarFocus(true)
    }

    const searchBarOnBlur = () =>{
        setSearchBarFocus(false)
    }


    return(
        <div className={searchBarFocus? "searchBar searchBar_focus" : "searchBar"}>
            <div className="searchBar_searchSvg">
                <SearchSVG color={searchBarFocus? "#766ac8" : "#6b6b6b"}/>
            </div>
            <input type="text" placeholder="Search" onFocus={searchBarOnFocus} onBlur={searchBarOnBlur}/>
        </div>
    )
}

export default SearchBar