import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import { GetWebsitesApi } from '../Api/api';
import { SetUsers } from '../Redux/action/';

export function AllUser() {
	const dispcath = useDispatch();
	useEffect(() => {
		async function fetchData() {
			const usersFromServer = await getUsersApi();
			dispcath(SetUsers(usersFromServer));
		}
		fetchData();
	}, []);
	const usersFromStore = useSelector((myStoer) => myStoer.users);
	return (
		<>
			{
				usersFromStore !== undefined && usersFromStore.length > 0
        && (
        	<h1>
        	{' '}
          num users:
          { usersFromStore.length }
</h1>
        )
			}
		</>
	);
}
