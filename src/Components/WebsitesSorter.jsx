import React from "react";
const WebsiteSorter=()=>{
    return(
        <div>
            <label htmlFor="sorter">sort by:</label>
            <select id="sorter" name="sorter">
                <option value="name">Name</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
        </div>
    );
};
export default WebsiteSorter;