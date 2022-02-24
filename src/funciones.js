
export const obtenerTodo = async (url, setNext, setPrev, setTotal, setPages, setMorty) => {

    const peticion = await fetch(url)
    const { info, results } = await peticion.json()
    setNext(info.next)
    info.prev !== null ? setPrev(info.prev) : setPrev(null)
    setPages(info.pages)
    setTotal(info.count)
    setMorty(results)
    //console.log(info, results);
}

export const obtenerPersonaje = async (id, setPersonaje) => {
    const peticion = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const resultado = await peticion.json()
    setPersonaje(resultado)
}