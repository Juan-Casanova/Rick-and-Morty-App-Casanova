import SearchBox from './SearchBox'
import LocationInfo from './LocationInfo'
import ResidentContainer from './ResidentContainer'

import { useState, useEffect } from 'react'

import GetInfo from '../Services/GetInfo'

const LocationContainer = () => {

    const [valLocation, setValLocation] = useState()
    const [dataInfo, setDataInfo] = useState()
    const [isNumber, setIsNumber] = useState()

    useEffect(()=>{
        setValLocation(Math.floor(Math.random()*108))
    },[])

    useEffect(()=>{
        if(valLocation && typeof valLocation === "number") {
            GetInfo(valLocation).then( data => {
                setIsNumber(true)
                setDataInfo(data)
            })
        }
        if(valLocation && typeof valLocation === "string") {
            let url = "?name="+valLocation
            GetInfo(url).then( data => {
                setIsNumber(false)
                setDataInfo(data.results)
            })
        }
    },[valLocation])

    return (
        <div id= "mainContainer">
            <SearchBox changeVal={setValLocation}/>            
            <h1>Ricky And Morty App Casanova</h1>
            <LocationInfo info={dataInfo} isNumber={isNumber}/>
            <ResidentContainer info={dataInfo} isNumber={isNumber}/>
        </div>
    )

}

export default LocationContainer