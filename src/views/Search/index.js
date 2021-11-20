import { useState } from "react";
import SearchBox from "./components/SearchBox/index";

import data from "../../data/users.json"
import "./style.css"


export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [userData, setUserData] = useState(data);
    const [results, setResults] = useState("");

    const handleCloseOpenSearch = () => setIsAtTop(!isAtTop);
    const handleSearchClick = (searchText) => {
        if (userData?.length) {
            const filteredData = userData.filter((value) => {
                return (
                    value.name.includes(searchText) || 
                    value.phone.includes(searchText) ||
                    value.email.includes(searchText) ||
                    value.username.includes(searchText)
                    )
            });
            setResults(filteredData)
        }
    }

    console.log(userData)
    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseOpenSearch} />
        </div>
    );
}