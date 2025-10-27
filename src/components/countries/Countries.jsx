
import React ,{ use } from 'react'
import Country from '../Country/Country'

const Countries = ({countriesPromise}) => {
    const CountriesData =use(countriesPromise);
    const Countries = CountriesData.countries;
    console.log(Countries)
    return (
        <div>
            <h1>In the countries:{Countries.length}</h1>
            {
                Countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;