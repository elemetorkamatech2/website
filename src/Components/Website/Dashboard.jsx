import {Button} from '../Button/Button';
import { useNavigate } from 'react-router';
import React from 'react';

export const Dashboard = ()=>{
	let navigate = useNavigate();

	return<>
		<Button size="small" onClick={() =>navigate('/Details')} label="Details" />
		<Button size="small" onClick={() =>navigate('/AllWebsite')} label="All Website" />
	</>;
};  
