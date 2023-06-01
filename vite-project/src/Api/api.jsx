import axios from 'axios';

const getUsersApi = async () => {
  try {
    const response = await axios.get('http://localhost:3003/UserRoute/getAll');
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export default getUsersApi;