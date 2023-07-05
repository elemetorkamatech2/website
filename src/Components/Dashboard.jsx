import { Button } from "./Button"
import {  useNavigate } from "react-router"

export const Dashboard = ()=>{
    let navigate = useNavigate()

    return<>
 <Button size="small" onClick={() =>navigate("/Details")} label="toDetails" />

    </>
    }  
