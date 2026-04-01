import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MenuIcon from '../assets/menu-burger.svg?react'
import HomeIcon from '../assets/home.svg?react'

function Footer(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <section className={`footer ${isOpen ? 'open' : ''}`}>
            <button className="menu_toggle" onClick={()=>setIsOpen(!isOpen)}>
                <MenuIcon width={30} height={30}></MenuIcon>
            </button>
            <div className="footerItems">
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
            </div>
        </section>
    )
}

export default Footer