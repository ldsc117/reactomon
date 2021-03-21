import '../App.css';
import { Link } from "react-router-dom";

function NavBar() {

    const navStyle = {
        color: "white"
    }
   
    return (

        <nav>

        <Link style={navStyle} to ='/'>
        <h1>Home</h1>
        </Link>
        <ul className= "Nav-links">
            <Link style={navStyle} to='/pokemons'>
            <li>Pokemons</li>
            </Link>
            <Link style={navStyle} to='/types'>
            <li>Pokemon Types</li>
            </Link>
        </ul>
        </nav>
    );
    }

export default NavBar;
