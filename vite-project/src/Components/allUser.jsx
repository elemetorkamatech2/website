import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { ourStore } from "../Redux/Store";
import {AddNewUser, SetUsers, SetDtailsUser} from '../Redux/Action';

export const AllUser = () => {
    useEffect(() => {
        const usersFromStore = useSelector((store) => {
            return store.currentUser;
        });

        return  <>
                <h1>hellow </h1>
         </>
       
    }, []);
};

