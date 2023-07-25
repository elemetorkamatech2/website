import axios from 'axios';

export const GetWebsitesApi = async (userId) => {
	try {
		const response = await axios.get(`${import.meta.env.VITE_URL_API}website/${userId}`);
		return response.data;
	}
	catch (err) {
		console.log(err);
		return null;
	}
}