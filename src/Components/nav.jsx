import "./Nav.css"
import { Link } from "react-router-dom"

export const Nav = () => {
    return <>
        <div class="w3-bar w3-black">
            <Link  class="w3-bar-item w3-button tablink w3-red" to="Main_Page1"> Main_Page1</Link>
            <Link  class="w3-bar-item w3-button tablink " to="Singnin"> Singnin</Link>
            <Link  class="w3-bar-item w3-button tablink " to="formCreatingWebsite"> formCreatingWebsite</Link>
            {/* <Link class="active" to="Singnin"><i class="fa fa-fw fa-search"></i> GOOG BYE </Link>
            <Link class="active" to="Login"><i class="fa fa-fw fa-search"></i> GOOG BYE </Link> */}

        </div>
    </>
}
