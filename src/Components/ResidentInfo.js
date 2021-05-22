import { useState, useEffect } from "react"

const ResidentInfo = ({ info }) => {

    return(
        <div className="card">
            <img src={info.image} alt="no funciona el link"/>
            <h5>NOMBRE: {info.name}</h5>
            <h5>STATUS: {info.status}</h5>
            <h5>ORIGEN: {info.origin.name}</h5>
            <h5># DE EPISODIOS:{info.episode.length}</h5>
        </div>
    )

}

export default ResidentInfo