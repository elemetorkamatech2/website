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
	
	return <>
		{
			(websites !== null && websites.length > 0) ? (
				websites.map((w) => <div key={w._id}>{w.title}</div>)
			) : (
				<>
					<h1>אין נתונים</h1>
				</>
			)
		}
	</>;
};