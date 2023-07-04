import React from 'react';
// import {AllWebsite} from './allWebsite'
import { useState, useEffect } from 'react';
import { GetWebsitesApi } from '../Api/api';
import { Button } from './Button';
// import { WebsitesSorter } from './WebsitesSorter';
import { createBrowserHistory } from 'history';
import './WebsitesSorter.css'
// import { Button } from './Button';
export const Dashboard = () => {
    const history = createBrowserHistory();
    const [data, setData] = useState([]);
    const [showComponent, setShowComponent] = useState(false);
    const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
    useEffect(() => {
      async function fetchData() {
        const response = await GetWebsitesApi(); // Replace this with the URL of your server
       
        setData(response);
      }
  
      fetchData();
    }, []);
    function ShowAllWebsites() {
      const showData = [...data]
      setData(showData);
  }
  function SortByName() {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
}
function sortByDate() {
    const sortedData = [...data].sort((a, b) => {

        return new Date(a.date) - new Date(b.date);
    });
    setData(sortedData);
}
    const handleClick = () => {
      setShowComponent(!showComponent);
    };
    const handleClick1 = () => {
      setShowAdditionalButtons(!showAdditionalButtons);
  };
 const handleButtonClick = (itemId) => {
  history.push(`/item/${itemId}`);
};
 
    return (
    <div>
      
      <Button primary size="large" onClick={handleClick} label="Show All Websites"></Button>
       {showComponent && 
          <ul>
            {data.map(item => (
              <li key={item.id}>
                👉 Name:{item.name} | 📅 Date:{item.date} |  <Button primary size="small" onClick={() => handleButtonClick(item.id)} label="Edit"> 
                
              </Button>
                </li>
            ))}
          </ul>
       }
        <div>
            <Button primary size="large" onClick={handleClick1} label="Show Sorting Options"></Button>
           
            {
                showAdditionalButtons && (

                    <div >
                        <Button primary size="small" onClick={SortByName}  label="Sort By Name" ></Button>
                        <Button primary size="small" onClick={sortByDate}  label="Sort By Date" ></Button>
                    </div>
                )
            }
            </div>
       {/* <WebsitesSorter></WebsitesSorter> */}
        </div>
      );
    
}
