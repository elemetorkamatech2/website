import React,{useState,useEffect} from 'react';
import {GetWebsitesApi} from '../Api/api'


export const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await GetWebsitesApi();
      console.log(data);
			setWebsites(data);
		};
		fetchData();
	}, []);
  
  return <>
  {
    websites.map((w)=><>
    <div>{w.name}</div>
    </>
    )
  }
  </>
  
  
};
