import React, {useState, useEffect} from 'react';
import Select from '@material-ui/core/Select';

function Countries({ countryConfig }) {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        async function getCountires(){
            const resp = await fetch("https://restcountries.eu/rest/v2/all?fields=name", 
                {
                    "method": "GET",
                });
            const data = await resp.json()
            //console.log(data);
            setCountry(data);
        }
        getCountires();
    }, []);

    const handleChange = (event) => {
        countryConfig[1](event.target.value);
    };
    
    return (
        <Select native value={country.name} onChange={handleChange}> 
            <option key="0">Global</option>       
            { country.map((val, index) => <option key={index}>{val.name}</option>) }         
        </Select>
    );
}

export default Countries;