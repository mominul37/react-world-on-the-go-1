import React from 'react';
import  './country.css'

const Country = ({country}) => {
    console.log(country.languages.languages)

    const handleVisited = () =>{
        console.log('btn click')
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.png}/>
            <h1>Name:{country.name.common}</h1>
            <p>Population:{country.population.population}</p>
            <h2>Capital:{country.capital.capital}</h2>
            <h3>language:{country.languages.languages.eng}</h3>
            <p>Area:{country.area.area} {country.area.area > 300000 ? "Big Country":"Small Country"}</p>
            <p>CCN3:{country.ccn3.ccn3}</p>
            <h4>Region:{country.region.region}</h4>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;