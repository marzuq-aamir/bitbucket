import React,{useState} from 'react';
import './Country.css';

const Country = () => {
    
    const [state,setState] = useState({
        Country : ["IN", "US", "CA"],
        States : []
    });

    const CountryLists = state.Country.map((item) =>
        <option key={item} value={item} >{item}</option>
    );

    const StateLists = state.States.map((item) =>
        <option key={item} value={item} >{item}</option>
    );

    const CountryChange = (event) => {
       let Selectvalue = event.target.value;
       const INStates = ['KA', 'KL', 'TN', 'MH'];
       const USStates = ['AL', 'DE', 'GA'];
       const CAStates = ['ON', 'QC', 'BC'];

       if(Selectvalue != ''){

        if(Selectvalue == 'IN'){
            setState(prev=>({
                ...prev,
                States : INStates
            }));
        }else if(Selectvalue == 'US'){
            setState(prev=>({
                ...prev,
                States : USStates
            }));
        }else{
            setState(prev=>({
                ...prev,
                States : CAStates
            }));
        }

       }else{
        setState(prev=>({
            ...prev,
            States : []
        }));
       }

    };

    return (
        <div className='mainDiv2'>
            <div>
                <label> Countries :  </label>
                <select className="selectBox" onChange={CountryChange}>
                    <option value=""> Select a country </option>
                    {CountryLists}
                </select>
            </div>
        
            <div>
                <label> States :  </label>   
                <select className="selectBox">
                    {StateLists}
                </select>
            </div>

        </div>
    );
};

export default Country;