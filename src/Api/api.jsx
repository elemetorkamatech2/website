import axios from 'axios';

export const GetWebsitesApi = async (userId) => {
	try {
		const response = await axios.get(`${import.meta.env.VITE_URL_API}website/${userId}`);
		return response.data;
	}
	catch (err) {
		return null;
	}
}
//פונקציה לבדיקה-- לא למחוק!
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
