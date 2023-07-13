import axios from 'axios';

export const GetWebsitesApi = async () => {
	try {
		const response = await axios.get('http://localhost:3000/website' , config);
		return response.data;
	}
	catch (err) {
		return null;
	}
}
