import React from "react";

const WebsitesFilter=()=>{
    return(
        <div>
 <label htmlFor="filter">Filter by:</label>
  <select id="filter" name="filter">
               <option value="all">All</option>
               <option value="read">Read</option>
               <option value="write">Write</option>
               <option value="user">User</option>

           </select>
        </div>
  );
};

export default WebsitesFilter;