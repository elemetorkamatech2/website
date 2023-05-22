import axios  from "axios";

export const getUsersApi= async()=>{
    try{
        let response = await axios.get('http://localhost:3002/UserRoute/getAll')
        return response.data
    }
    catch(err)
    {
        console.log(err)
    }
}