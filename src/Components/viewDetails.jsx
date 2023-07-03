import { Button } from "./Button"
import {  useNavigate } from "react-router"

export const Details = ()=>{
    let navigate = useNavigate()

    return<>
        <Button  primary size="small" onClick={() =>navigate("/EditDetails")} label="edit" />
    </>
    }