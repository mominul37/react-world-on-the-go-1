
import React ,{ use } from 'react'
import Country from '../Country/Country'
import './countries.css'

const Countries = ({countriesPromise}) => {
    const CountriesData =use(countriesPromise);
    const Countries = CountriesData.countries;
    console.log(Countries)
    return (
        <div className='country1'>
            <h1>In the countries:{Countries.length}</h1>
           <div className='countries'>
            {
                Countries.map(country => <Country country={country}></Country>)
            }
           </div> 
        </div>
       
    );
};

export default Countries;