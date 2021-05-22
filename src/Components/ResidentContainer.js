import { useEffect, useState } from 'react'

import ResidentInfo from './ResidentInfo'

import GetCharacter from '../Services/GetCharacter'

const ResidentContainer = ({info, isNumber}) => {

    const [getCharacter, setGetCharacter] = useState()
    const [characters, setCharacters] = useState([])

    useEffect(() => {

        if(info && isNumber === true) {
            
            setGetCharacter(info.residents.slice(0,10))
    
        } if(info && isNumber === false) {

            setGetCharacter(info[0].residents.slice(0,10))
    
        }

    },[info])

    useEffect (() => {

        if(getCharacter) {
            for(var i = 0; i<getCharacter.length; i++)
                GetCharacter(getCharacter[i]).then(res => {
                    setCharacters(characters => [...characters,res])
            })
        }
    },[getCharacter])

    const list = characters.map((value, index) => {
        return <ResidentInfo info={value} key={value.name}/>
    })

    return(
        <div id="containeCard">
            <h2>Residents</h2>
            {list}
        </div>
    )

}

export default ResidentContainer