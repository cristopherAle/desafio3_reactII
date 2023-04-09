import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { MyContext } from './context/MyContext';
import AppRouter from './router/AppRouter';
import { getId } from './helpers/getId'



//const urlPokeApi = 'https://pokeapi.co/api/v2/'
const urlPokeApi = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'

function App() {

const [dataPoke, setDataPoke] = useState([])


const getData = async()=>{
    const response = await fetch(urlPokeApi)
    let { results }= await response.json()
    const data = results.map((dat) =>
      ({
        name: dat.name,
        url: dat.url,
        id:getId()
      })
      )
    setDataPoke(data)

}
useEffect(()=> {
  getData()
},[])

  return (

  <>

      <div>
            <MyContext.Provider value={{dataPoke, setDataPoke}}>
                <NavBar />
                  <AppRouter />
            </MyContext.Provider>        
        </div>  

  </>
  );
}
export default App;


// let { results }= await response.json()
// //console.log(results)
//    const data = results.map((dat) =>({
//      name: dat.name,
//      url: dat.url,
//      id:getId()
//    }))
//  setDataPoke(data)