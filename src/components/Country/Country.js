import React from 'react';
import './Country.css'
const Country = (props) => {
          const {name,region,population,area,flags} = props.country
          return (
                    <div className='country' title={name.common}>
                          <img src={flags.png} alt="" />    
                          <h1>Name : {name.common}</h1>  
                          <h3>Population: {population}</h3>    
                          <h4>Area: {area}</h4>    
                          <h5>Region: {region}</h5>    
                    </div>
          );
};

export default Country;