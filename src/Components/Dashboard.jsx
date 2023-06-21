import React from "react";
import { useSelector } from 'react-redux';
// import {ViewWebsites} from "./ViewWebsites";
import {WebsiteFilter} from "./WebsitesFilter";
import { WebsiteSorter } from "./WebsitesSorter";
import { SearchWebsites } from "./SearchWebsites";
import { WebsiteActionsAndInformation } from "./WebsiteActionsAndInformation";

const Dashboard=({ userName, websites })=>{
    const username = useSelector((state) => state.username);
  
    return (
        <div>
            <h1>`Websites of ${userName}`</h1>
            <p>Hello, {username} </p>
            {/* <ViewWebsites websites={websites}/> */}
            <WebsiteFilter/>
            <WebsiteSorter/>
            <SearchWebsites/>
           <WebsiteActionsAndInformation/>
        </div>
    );
};
export default Dashboard;