const GetInfo = (valLocation) => {
    
    const url = `https://rickandmortyapi.com/api/location/${valLocation}`

    return fetch(url,{method:'GET'}).then (res => res.json())

}

export default GetInfo