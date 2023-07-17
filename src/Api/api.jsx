import axios from 'axios';

<<<<<<< HEAD
export const GetWebsitesApi = async () => {
	try {
		const response = await axios.get(import.meta.env.VITE_URL_API + 'website');
=======
export const GetWebsitesApi = async (userId) => {
	try {
		const response = await axios.get(`${import.meta.env.VITE_URL_API}website/${userId}`);
>>>>>>> c12f8f0920c95043bed87892fe390c3e5d0f454f
		return response.data;
	}
	catch (err) {
		console.log(err);
		return null;
	}
}