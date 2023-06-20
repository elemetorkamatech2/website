import { Route, Routes } from "react-router-dom"
import { Main_Page } from "./Components/main_page"

export const MyRoutes = () => {
    return <>
        <Routes>
          
                 <Route path="Main_Page1" element={<Main_Page />}></Route> 

        </Routes>

    </>
}