import {React, useState, useEffect } from 'react';
import { GetWebsitesApi } from '../../Api/api';
import { useSelector } from 'react-redux';
import '../EditDetails/editDetails.css';

export const AllWebsite = () => {
	const userId = useSelector((myStoer) => myStoer.userId);
	const [websites, setWebsites] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await GetWebsitesApi(userId);
			console.log(data);
			setWebsites(data);
		};
		fetchData();
	}, []);
	return <>
		{
			(websites !== null && websites.length > 0) ? (
				websites.map((w) => <button key={w._id}>{w.title}</button>)
			) : (
				<>
					<h1>אין נתונים</h1>
				</>
			)
		}
	</>;
};
