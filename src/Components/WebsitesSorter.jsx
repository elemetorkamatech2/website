import React, { useState, useEffect } from 'react';
import { GetWebsitesApi } from '../Api/api';
import { format, parseISO } from 'date-fns';
import './WebsitesSorter.css'
import { Button } from './Button';
export const WebsitesSorter = () => {
    const [data, setData] = useState([])
    const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const response = await GetWebsitesApi();

            setData(response);
        }
        fetchData();
    }, []);

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
        setShowAdditionalButtons(!showAdditionalButtons);
    };
    return (
        <>
        
            <div>
            <Button primary size="large" onClick={handleClick} label="Show Sorting Options"></Button>
           
            {
                showAdditionalButtons && (

                    <div >
                        <Button primary size="small" onClick={SortByName}  label="Sort By Name" ></Button>
                        <Button primary size="small" onClick={sortByDate}  label="Sort By Date" ></Button>
                    </div>
                )
            }
            </div>
            <div className='all-websites'>
            <ul>
                {data.map(item => (
                    <>
                     {console.log(item)}
                    <li key={item.id}>👉 Name: {item.name} |📅 Date: {item.date}</li>
                   </>
                ))}

            </ul>
            </div>
         </>
    )
};