import React from 'react';
import {AllWebsite} from './allWebsite'
import { useState, useEffect } from 'react';
import { GetWebsitesApi } from '../Api/api';
export const Dashboard = () => {


    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await GetWebsitesApi(); // Replace this with the URL of your server
        const json = await response.json();
        setData(json);
      }
  
      fetchData();
    }, []);
    return (
        <div>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    
}
