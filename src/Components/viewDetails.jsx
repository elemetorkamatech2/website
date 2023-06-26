import { Button } from "./Button"
import {  useNavigate } from "react-router"

export const Details = ()=>{
    let navigate = useNavigate()

    return<>
        <Button size="small" onClick={() =>navigate("/EditDetails")} label="edit" />
    </>
    }