import React from 'react';
import {createContext , useState } from 'react' ;



export const AppContext = createContext();

export const AppContextProvider = ( {children} )=>{

    const [test , settest ] = useState("test");


    const [waterLevel , setWaterLevel ] = useState(0);
    const [Temperature , setTemperature ] = useState(0);
    const [salinity , setsalinity ] = useState(0);
    const [Tds , setTds ] = useState(0);
    const [Ph , setPh ] = useState(0);

    const [Turbidity , setTurbidity ] = useState(0);

    const [Latitude , setLatitude ] = useState(0);
    const [Longitude , setLongitude ] = useState(0);


    const contextValue = {
        test,settest,

        waterLevel,setWaterLevel,
        Temperature , setTemperature,
        salinity , setsalinity,
        Tds , setTds,
        Ph , setPh,
        Turbidity , setTurbidity ,

        Latitude , setLatitude ,
        Longitude , setLongitude ,

    
    }

    

    return(
        <AppContext.Provider value={contextValue} >
            {children}
        </AppContext.Provider>
    )
}  