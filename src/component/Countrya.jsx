
import { useState } from 'react';
import '../css/contry.css'
const Countrya = ({country,handlecountry,handleflag}) => {
    console.log(country)
    const {name,flags,population,region,cca3} = country
    const [visited,setvisited] = useState(false)
    const hanleclick = () =>{
        setvisited(!visited)
    }
    
    return (
        <div className={visited ? 'visted':"country"}>
            <h3>{name.common}</h3>
            <img src={flags.png} alt=""/>
            <p> population:{population}</p>
            <p>region:{region}</p>
            <p>code:{cca3}</p>
            <button onClick={hanleclick}>{ visited? "visited":"visit"}</button>
            <button onClick={()=>handlecountry(country)}>mark visited</button>
            <button onClick={()=>handleflag(country)}>flags</button>

        </div>
    );
};

export default Countrya;