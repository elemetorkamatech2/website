import React from "react";
const ViewWebsites =({websites})=>{
  return(
    <div>
 {websites.map((website)=>{
    return(
    <div key={website.id}>
      <p>{website.name}</p>
      <p>{website.url}</p>
      <p>{website.icon}</p>
    </div>
      );
    })}
  </div>
);
};
export default ViewWebsites;