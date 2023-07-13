import axios from 'axios';
import { useDispatch } from "react-redux";


 export const postWebApi = async (web) => {

    	try {

    const response = await axios.post(import.meta.env.VITE_URL_API,web);
    return response.data;
    } catch (err) {
		console.log(err);
		return null;
	}
};
export default postWebApi;
