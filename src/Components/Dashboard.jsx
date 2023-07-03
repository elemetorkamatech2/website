import {Button} from './Button';
import { useNavigate } from 'react-router';
import React from 'react';

export const Dashboard = ()=>{
	let navigate = useNavigate();

	return<>
		<Button size="small" onClick={() =>navigate('/Details1')} label="Details" />
		
	</>;
};  
