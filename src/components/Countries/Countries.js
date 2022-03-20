import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
          const [countryes ,setCountryes] = useState([])
          useEffect(()=>{
                    fetch('https://restcountries.com/v3.1/all')
                    .then(res => res.json())
                    .then(data=>setCountryes(data))
          },[])
          return (
                    <div className='allcountries'>
                           {
                              countryes.map(country => <Country country = {country} key = {country.cca3}> </Country> )
                           }   
                    </div>
          );
};

export default Countries;