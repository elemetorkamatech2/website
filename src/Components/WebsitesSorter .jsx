import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import getWebsitesApi from '../Api/api';
import { SortWebsite } from '../Redux/action/';

export const WebsitesSorter = () => {
	const dispcath = useDispatch();
	useEffect(() => {
		async function fetchData() {
			const websitesFromServer = await getWebsitesApi();
			dispcath(SortWebsite(websitesFromServer));
		}
		fetchData();
	}, []);
	const websitesFromStore = useSelector((myStoer) => myStoer.Websites);
	const listSortWebsite = { ...[websitesFromStore].sort((a, b) => a.name.localeCompare(b.name)) };

	return (

		<>
			{
				websitesFromStore !== undefined && websitesFromStore.length > 0
                && (

                	(

				// <h1>
				//     {' '}
				//     WebsitesAftarSort:
				//     {listSortWebsite}
				// </h1>
                		<ul>
                			{
                				listSortWebsite.map((website) => (
                					<li key={website.id}>{website.name}</li>
                				))}
                		</ul>
                	)
				// )
				// && (
                )
			}
		</>
	);
};

