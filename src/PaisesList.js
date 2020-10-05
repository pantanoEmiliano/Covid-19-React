import React, { useState, useEffect } from "react"

const PaisesList = () => {
    const [data, setData] = useState([])
    const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort"

    useEffect(()=>{

        const fetchData = async () => {
            await fetch(`${url}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(e => console.log(e))
        }
        fetchData()
    })

    return(
        <>
        <h1 className="container ">Paises Infectados: {data.length}</h1>
        {data.map((paises, idx)=>(

<div className="col-3" key={`key_${paises.id}`}>{idx+1} - 
            
    <div className="card bg-dark text-white">
        <img src={paises.countryInfo.flag} alt="bandera" className="card-img" />
        <div className="card-img-overlay">
                <h4 className="card-title">Pais: {paises.country}</h4>
                <p className="card-text">Casos: {paises.cases}</p>
                <p className="card-text">Muertos:  {paises.deaths}</p>
        </div>
    </div>
</div>
            
        ))}
        
        </>
    );



}
export default PaisesList;