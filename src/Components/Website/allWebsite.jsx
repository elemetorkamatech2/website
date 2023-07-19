import {React, useState, useEffect } from 'react';
import { GetWebsitesApi } from '../../Api/api';
import { useSelector } from 'react-redux';
import '../EditDetails/editDetails.css';
import { useNavigate } from 'react-router-dom';

export const AllWebsite = () => {

	let navigate = useNavigate();
	const userId = useSelector((myStoer) => myStoer.userId);
	const [websites, setWebsites] = useState([]);
	
	useEffect(() => {
		const fetchData = async () => {
			const data = await GetWebsitesApi(userId);
			setWebsites(data);
		};
		fetchData();
	}, []);

	const viewDetails = (w) => {
		navigate('/Details', { state: { website: w } });
	  };
	return <>
		{
			(websites !== null && websites.length > 0) ? (
				websites.map((w) => <button onClick={() => viewDetails(w)} key={w._id}>{w.title}</button>)
			) : (
				<>
					<h1>אין נתונים</h1>
				</>
			)
		}
	</>;
};
