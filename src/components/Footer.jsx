import { NavLink } from 'react-router-dom'
import HomeIcon from '../assets/home.svg?react'

function Footer(){
    return(
        <section class="footer">
            <NavLink to="/" className={({ isActive }) => isActive ? "itemFooter active" : "itemFooter"}>
                <HomeIcon width={30} height={30} />
                <p>Rotina</p>
            </NavLink>
            <NavLink to="/a" className={({ isActive }) => isActive ? "itemFooter active" : "itemFooter"}>
                <HomeIcon width={30} height={30} />
                <p>Teste</p>
            </NavLink>
            <NavLink to="/b" className={({ isActive }) => isActive ? "itemFooter active" : "itemFooter"}>
                <HomeIcon width={30} height={30} />
                <p>Teste2</p>
            </NavLink>
            <NavLink to="/c" className={({ isActive }) => isActive ? "itemFooter active" : "itemFooter"}>
                <HomeIcon width={30} height={30} />
                <p>Mabi</p>
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? "itemFooter active" : "itemFooter"}>
                <HomeIcon width={30} height={30} />
                <p>Perfil</p>
            </NavLink>
        </section>
    )
}

export default Footer