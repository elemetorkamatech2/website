import { Route, Routes } from "react-router-dom"
import { Main_Page } from "./Components/main_page"
import { Singnin } from "./Components/singnin"
import { Login } from "./Components/login"
export const MyRoutes = () => {
    return <>
        <Routes>
          
                 <Route path="Main_Page1" element={<Main_Page />}></Route> 
                 <Route path="Singnin"    element={<Singnin />}></Route> 
                 <Route path="Login"      element={<Login />}></Route> 

        </Routes>

    </>
}