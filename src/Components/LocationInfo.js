import { useEffect, useState } from "react"

const LocationInfo = ({info, isNumber}) => {

    const [nameLocation, setNameLocation] = useState()
    const [typeLocation, setTypeLocation] = useState()
    const [dimensionLocation, setDimensionLocation] = useState()
    const [limitResident, setLimitResident] = useState()

    useEffect(() => {
        if(info && isNumber===false) {
            setNameLocation(info[0].name)
            setTypeLocation(info[0].type)
            setDimensionLocation(info[0].dimension)
            setLimitResident(info[0].residents.length)
        } 
        if(info && isNumber===true){
            setNameLocation(info.name)
            setTypeLocation(info.type)
            setDimensionLocation(info.dimension)
            setLimitResident(info.residents.length)
        }
    },[info])

    return(
        <div>
            <h4>NOMBRE: {nameLocation}</h4>
            <h4>TYPE: {typeLocation}</h4>
            <h4>DIMENSION: {dimensionLocation}</h4>
            <h4>RESIDENTES:{limitResident}</h4>
        </div>
    )
}

export default LocationInfo