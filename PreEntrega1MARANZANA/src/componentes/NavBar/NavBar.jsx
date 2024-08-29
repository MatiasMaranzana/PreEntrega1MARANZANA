import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
return (
    <header >
        <div>
            <img src="../public/logo.gif" alt="logo" />
        </div>

        <nav >
            <ul >
                <li>Todos los productos</li>
                <li>Proteinas</li>
                <li>Creatinas</li>
                <li>Aminoacidos</li>
                <li>Multivitaminicos</li>
                <li>Accesorios</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
)
}

export default NavBar