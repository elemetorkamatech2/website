import { useSelector, useDispatch } from "react-redux"

export const AllUser = () => {
    const usersFromStore = useSelector((store)=>  {
         return store.users
    })
    return<>
    {
        usersFromStore != undefined && usersFromStore.length>0 &&
        <>
        <h1> num users: {usersFromStore.length}</h1>
        </>
    }
    </>
};

