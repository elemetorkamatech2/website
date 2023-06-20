import "./Nav.css"
import { Link } from "react-router-dom"

export const Nav = () => {
    return <>
        <div class="navbar">
            <Link class="active" to="Main_Page1"><i class="fa fa-fw fa-search"></i> GOOG BYE </Link>
            
        </div>
    </>
}