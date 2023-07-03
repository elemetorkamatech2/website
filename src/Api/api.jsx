import axios from 'axios';

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



