import { useSelector, useDispatch } from "react-redux"
import {getUsersApi} from '../Api/api';
import {SetUsers} from '../Redux/Action';
import {  useEffect } from "react"

export const AllUser = () => {
    let dispcath = useDispatch()
    //מיד בעת טעינה שולף מהשרת ומכניס לסטור
    useEffect(() => {
        async function fetchData() {
          const usersFromServer = await getUsersApi();
          dispcath(SetUsers(usersFromServer))
        }
        fetchData();
      }, []);
    //שליפת המשתמשים (המעודכנים) מהסטור
    let usersFromStore = useSelector((myStoer) => {
        return myStoer.users;
    })

    return <>
    {
        usersFromStore != undefined && usersFromStore.length>0 &&
        <>
        <h1> num users: {usersFromStore.length}</h1>
        </>
    }
    </>
}