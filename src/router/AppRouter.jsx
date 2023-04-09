import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import PokePage from '../pages/PokePage'
import ListPokemon from '../pages/ListPokemon'

const AppRouter = () => {
  return (
    <div>
      <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='home' element={<HomePage/>}/>
            <Route path='pokepage' element={<PokePage/>}/>
            <Route path='listPokemon/:name' element={<ListPokemon/>}/>
            <Route path='*' element={<NotFound/>}/> 
          </Routes>
    </div>
  )
}

export default AppRouter
