import { Route, Routes } from "react-router-dom"
import { Main_Page } from "../Components/Main_Page/main_page"
import { Singnin } from "../Components/SingIn/singnin"
import { Login } from "../Components/Login/login"
import { EditDetails } from "../Components/EditDetails/editDetails"
import { Details } from "../Components/Website/viewDetails"
<<<<<<< HEAD
import { FormCreatingWebsite } from '../Components/FormCreatingWebsite/FormCreatingWebsite';
=======
import { AllWebsite } from "../Components/Website/allWebsite"
>>>>>>> c12f8f0920c95043bed87892fe390c3e5d0f454f
export const MyRoutes = () => {
    return <>
        <Routes>
                 <Route path="Main_Page1" element={<Main_Page />}></Route> 
                 <Route path="Singnin"    element={<Singnin />}></Route> 
                 <Route path="Login"      element={<Login />}></Route> 
                 <Route path="EditDetails"      element={<EditDetails />}></Route> 
<<<<<<< HEAD
                 <Route path="Details"      element={<Details />}></Route> 
                 <Route path="FormCreatingWebsite" element={<FormCreatingWebsite />} />    
=======
                 <Route path="Details"      element={<Details />}></Route>    
                 <Route path="AllWebsite"   element={<AllWebsite />}></Route>     
 
>>>>>>> c12f8f0920c95043bed87892fe390c3e5d0f454f
        </Routes>

    </>
}
