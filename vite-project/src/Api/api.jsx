import axios from 'axios';

const getUsersApi = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_URL_API);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export default getUsersApi;