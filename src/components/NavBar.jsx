import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning mb-4" >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"> <img className='imgPokemon' alt="pokemon logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'></img> Bienvenido</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'activo' : ''} aria-current="page" to="home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'activo' : ''} to="pokepage">Favoritos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div> 

            </div>
        </nav>
    </div>
  )
}

export default NavBar
