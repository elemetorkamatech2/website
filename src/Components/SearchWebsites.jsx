import React from "react";
import { userSelector } from "react-redux";
const SearchWebsites=()=>{
    const websites =userSelector(state=>state.websites);
    return(
        <div>
            <label htmlFor="search" name="search"></label>
            <input type="text" id="search" name="search"/>
            <p>Number of websites: {websites.length}</p>
        </div>
    );
};
export default SearchWebsites;