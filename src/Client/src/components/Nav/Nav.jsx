import SearchBar from '../Searchb/SearchBar.jsx';
import { NavLink,} from 'react-router-dom';
import style from './Nav.module.css'
const Nav = ({ onSearch,setAccess }) => {


    const handelLogOut = ()=>{
        setAccess(false);        
    }
    return (
        <nav className={style.navegar} >
            <button className={style.logOut}  onClick={handelLogOut} >Log Out</button>
            <NavLink to="/home" className={style.home}>Home</NavLink>
            <NavLink className={style.about} to="/about">About</NavLink>
            <NavLink className={style.favorite} to="/favorite">Favorite</NavLink>
            <h2 className={style.title}>Rick and Morty Project</h2>   
            <SearchBar onSearch={onSearch}/>
            
        </nav>
        
        
    )
}

export default Nav;