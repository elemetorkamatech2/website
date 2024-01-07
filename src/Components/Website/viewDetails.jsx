import { useNavigate } from 'react-router';
import { Button } from '../Button/Button';
import { useLocation } from 'react-router-dom';
import React from 'react';

export const Details = () => {
	const location = useLocation();
	const website = location.state.website;
	let navigate = useNavigate();
	return (
		<>
			<div id='Details'>
					<div key={website.userId}>
						<h2>title: {website.title}</h2>
						<p>description: {website.description}</p>
						<p>status: {website.status}</p>
						<p>memory: {website.memory}</p>
						<p>cpu: {website.cpu}</p>
					</div>
			</div>
			<Button  primary size="small" onClick={() =>navigate('/EditDetails')} label="edit" />
		</>
	);
};
