const GetCharacter = (valId) => {

    return fetch(valId,{method:'GET'}).then (res => res.json())

}

export default GetCharacter