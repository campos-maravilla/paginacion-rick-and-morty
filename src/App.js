import { useEffect, useState } from "react";
import { obtenerTodo, obtenerPersonaje } from "./funciones";


function App() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")
  const [siguiente, setNext] = useState(null)
  const [anterior, setPrev] = useState(null)
  const [paginas, setPages] = useState(null)
  const [total, setTotal] = useState(null)
  const [personajes, setMorty] = useState(null)
  const [personaje, setPersonaje] = useState(null)

  const irSiguiente = (url) => {
    setUrl(url)
  }
  const irAnterior = (url) => {
    setUrl(url)
  }

  useEffect(() => {
    obtenerTodo(url, setNext, setPrev, setTotal, setPages, setMorty);
  }, [url])

  return (
    <>

      <div className='header'>
        <h2>Bienvenidos a la API rick and morty</h2>
        {/*  <p>Total de personajes: {total}</p>
          <p>Cantidad de páginas: {paginas}</p> */}
        {anterior !== null ? (
          <button className="btnAnterior" onClick={() => irAnterior(anterior)}>Anterior</button>
        ) : ('')}

        {siguiente !== null ? (
          <button className="btnSiguiente" onClick={() => irSiguiente(siguiente)}>Siguiente</button>
        ) : ('')}


      </div>



      <div className="container2">

        <div className="personajes">

          {personajes !== null ? (
            personajes.map(personaje => (


              <p onClick={() => obtenerPersonaje(personaje.id, setPersonaje)} key={personaje.id}><img src={personaje.image}
              />

              </p>


            ))
          ) : ('')}
        </div>
      </div>
      <div className="container">
        {/*  */}
        <div className='personaje'>
          {personaje !== null ? (
            <>
              <h2>{personaje.name}</h2>
              <img src={personaje.image} alt={personaje.name} />

              <p>{personaje.species}</p>
              <h3>{personaje.status}</h3>
            </>
          ) : ('')}
        </div>
        {/*  */}
      </div>
    </>
  );
}

export default App;
