import axios from 'axios';
import { useSelector } from 'react-redux';

//const api = axios.create();

export const GetWebsitesApi = async () => {
	try {
		const response = await axios.get(import.meta.env.VITE_URL_API + 'website');
		return response.data;
	}
	catch (err) {
		console.log(err);
		return null;
	}
};

export const cheackInReact = async () => {
	try {
		debugger
		const response = await axios.get('http://localhost:3003/website/protected');
		console.log(" 👨🏼הפונקציה בריאקט");
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}
