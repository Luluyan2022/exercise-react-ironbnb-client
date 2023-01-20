import { NavLink } from "react-router-dom"


export default function NavBar(){
    return(
        <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/apartments">Apartments</NavLink>
           <NavLink to="/apartments/create">Create</NavLink>
        </nav>
    )
}