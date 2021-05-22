import { useState } from "react"

const SearchBox = ({changeVal}) => {

    const [value, setValue] = useState()

    return(
        <div id="containerSearch">
            <input value = {value} onChange={ e => setValue(e.target.value)}/>
            <button 
            onClick = {() => {
                changeVal(value)
            }}>Search</button>
        </div>
    )

}

export default SearchBox