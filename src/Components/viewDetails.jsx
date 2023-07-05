import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from './Button';
import './Details.css';
import React from 'react';

export const Details = () => {
	const data = useSelector(state => state.web);
	let navigate = useNavigate();
	console.log(data);
	return (
		<>
			<div id='Details'>
				{data.map(item => (
					<div key={item.id}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
					</div>
				))}
			</div>
			<Button  primary size="small" onClick={() =>navigate('/EditDetails')} label="edit" />
		</>
	);
};
