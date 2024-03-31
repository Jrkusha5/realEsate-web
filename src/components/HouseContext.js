import { createContext, useEffect, useState } from "react";


import {housesData} from '../data'

export const HouseContext = createContext();
const HouseContextProvider = ({children}) => {

const [houses, setHouses]=useState(housesData);
const [country, setCountry]=useState('Location (any)');
const [countries, setCountries]=useState([]);
const [property, setProperty]=useState('property type (any)')
const [properties, setProperties]=useState([])
const [price ,setPrice]=useState('price ranfe (any)')
const [loading, setLoding]=useState(false);

useEffect(()=>{
  const allCountries = houses.map((house)=>{
    return house.country;
  })
// remove duplicates
  const uniqueCountries =['Location (any)', ... 
    new Set(allCountries)]

    //set countries state
    setCountries(uniqueCountries);
},[])

  return <HouseContext.Provider value={{
    country,setCountry,countries,property,setProperty,
    properties,price,setPrice,houses,loading,
  }}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
