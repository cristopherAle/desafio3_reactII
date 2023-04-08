import userEvent from '@testing-library/user-event'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'
import ListPokemon from '../pages/ListPokemon'
const PokePage = () => {

const {dataPoke, setDataPoke} = useContext(MyContext)

const navigate = useNavigate()
  
 const prueba =()=>{
    navigate(`listPokemon/${dataPoke.id}`)
  //console.log(dataPoke.id)
    //console.log('Me diste clic', dataPoke.id)
  }  
    return (
    <div className='container'>
        <h1>Selecciona un Pokemón</h1>
        <hr />
      <div className='cboPokemon'>
          <div className="dropdown">
            <button  className="btn btn-secondary btn-lg dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pokemones 
            </button>
            <ul className="dropdown-menu">
              {dataPoke.map(Poke=><li onClick={prueba}         
              key={Poke.id}><a className='dropdown-item'>{Poke.name}</a></li>)}
              
            </ul>
          </div>
      </div>
      <hr />
      <div>
        <ListPokemon />
      </div>

</div>
  )
}

export default PokePage
