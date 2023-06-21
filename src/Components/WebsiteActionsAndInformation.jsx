import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deleteWebsite } from "../actions/websiteActions";


const WebsiteActionsAndInformation = ({ websiteId }) => {
  const website = useSelector(state => state.websites.find(w => w.id === websiteId));
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWebsite(websiteId));
  }

  return (
    <div>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <p>Information about the website: {website.creationDate}</p>
    </div>
  );
};

export default WebsiteActionsAndInformation;