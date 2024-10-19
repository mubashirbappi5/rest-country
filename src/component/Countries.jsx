import { useEffect, useState } from "react";
import Countrya from "./Countrya";
import '../css/countries.css'


const Countries = () => {

    const [countries, setcountry] = useState([])
    const [visitendcountry, setvisitedcountry] = useState([])
    const [visitadflag, setvisitedflag] =useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=> res.json())
        .then(data=> setcountry(data)
        )
    },[])
    const handlevisitedcountry = (country) => {
        
        const newvisitendcountry = [...visitendcountry,country]
        setvisitedcountry(newvisitendcountry)
    }
    const handleflag = (country) =>{
        console.log("add item chacker")
        const newflag = [...visitadflag,country]
        setvisitedflag(newflag)
    }
   
    return (
     <div>
        <p>visited country:{visitendcountry.length}</p>
        
        <div>
           {
            visitendcountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
           }
           {
            visitadflag.map(country => <div key={country.cca3} > <img src={country.flags.png} alt="" /></div> )
           }
        </div>
        <div className="countries-container">
        
        {
            countries.map(country=> <Countrya key={country.cca3}
                handlecountry ={handlevisitedcountry}
                handleflag ={handleflag}
                country={country}></Countrya>)
        }

     </div>
     </div>
    );
};

export default Countries;