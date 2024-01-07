import axios from 'axios';
import { useDispatch } from "react-redux";
import { SetWeb } from '../Redux/action';

 export const putWebApi = async (web) => {
    	try {

    const response = await axios.put(import.meta.env.VITE_URL_API,web);
   // return response.data;
		dispatch(SetWeb(response.data))
    } catch (err) {

		console.log(err);
		return null;
	}
};
export default putWebApi;
