import React from 'react';

const Country = ({country}) => {
    console.log(country.languages.languages)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.png}/>
            <h1>Name:{country.name.common}</h1>
            <p>Population:{country.population.population}</p>
            <h2>Capital:{country.capital.capital}</h2>
            <h3>language:{country.languages.languages.eng}</h3>
            <p>Area:{country.area.area}</p>
            <p>CCN3:{country.ccn3.ccn3}</p>
            <h4>Region:{country.region.region}</h4>
        </div>
    );
};

export default Country;