import { useState, useEffect } from "react"

const ResidentInfo = ({ info }) => {

    return(
        <div className="card">
            <img src={info.image} alt="no funciona el link"/>
            <h5>{info.name}</h5>
            <h5>{info.status}</h5>
            <h5>{info.origin.name}</h5>
            <h5>{info.episode.length}</h5>
        </div>
    )

}

export default ResidentInfo