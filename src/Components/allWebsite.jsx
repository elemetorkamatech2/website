import React, { useState, useEffect } from 'react';
import { GetWebsitesApi } from '../Api/api';

export const AllWebsite = () => {
    
	const [websites, setWebsites] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await GetWebsitesApi();
			console.log(data);
			setWebsites(data);
		};
		fetchData();
	}, []);
	console.log(websites);
	
	return <>
		{
			(websites !== undefined && websites.length > 0) ? (
				websites.map((w) => <><div>{w.id}</div><div>{w.name}</div></>)
			) : (
				<>
					<h1>אין נתונים</h1>
				</>
			)
		}
	</>;
};