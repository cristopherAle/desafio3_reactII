import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'



const PokePage = () => {

const {dataPoke} = useContext(MyContext)
const [pokeNombre, setPokeNombre] = useState('')
//console.log(pokeNombre)
const navigate = useNavigate()


const verPokemon = (e) => {
  e.preventDefault();
  navigate(`/listPokemon/${pokeNombre}`);
};

 return (
    <div className='container'>
      <h1>Selecciona un Pokemón</h1>
        <hr />
     

      <div className='container'>
          <div className="dropdown" id="dropPoke">
            <button  className="btn btn-secondary btn-lg dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             Seleccione
            </button>
            <ul className="dropdown-menu">
              {dataPoke.map(Poke=><li 
              key={Poke.id}><button className='dropdown-item' onClick={({ target }) =>(setPokeNombre(target.value))} value ={Poke.name}>{Poke.name} </button></li>)}
              
            </ul>
          </div>
          <hr/>
          <hr/>
          <button onClick={verPokemon}>Ver Pokemon</button>
        </div>  

    </div>
  )
}
export default PokePage
