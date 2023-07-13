import { Route, Routes } from "react-router-dom";
import { Main_Page } from "./Components/main_page";
import { Singnin } from "./Components/singnin";
import { Login } from "./Components/login";
import { EditDetails } from "./Components/editDetails";
import { Details } from "./Components/viewDetails";
import { FormCreatingWebsite } from './Components/FormCreatingWebsite';
import { CreatingWebsite } from './Components/CreatingWebsite';

export const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="FormCreatingWebsite" element={<FormCreatingWebsite />} />
        <Route path="Main_Page1" element={<Main_Page />} />
        <Route path="Singnin" element={<Singnin />} />
        <Route path="Login" element={<Login />} />
        <Route path="EditDetails" element={<EditDetails />} />
        <Route path="Details" element={<Details />} />
      </Routes>
    </>
  );
};
