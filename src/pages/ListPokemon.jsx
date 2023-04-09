import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'


const ListPokemon = () => {

const {dataPoke} = useContext(MyContext)

const pokeNombre = useParams()
const PokemonDetail = dataPoke.find(detallepoke => detallepoke.name === pokeNombre.name)


const [dataPoke1, setDataPoke1] = useState([])

const getData = async()=>{
   const response = await fetch(PokemonDetail.url)
   const data = await response.json()
   setDataPoke1(data)
  
   console.log(dataPoke1.sprites)
   console.log(data.name)
   console.log(data.sprites.other.dream_world)
   console.log(data.stats)
   
}
useEffect(()=> {
  getData()
},[])

  return (
    <div>
        <h2>Muestra la Información de los pokemones</h2>
        <hr />
           <h2>
              {dataPoke1.name}
           </h2>
    </div>
  )
}

export default ListPokemon
