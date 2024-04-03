import { useState, useContext, createContext } from "react" // React, useEffect, 
import horoscopeData from "../datas/horoscope.json"

const HoroscopeContext = createContext()

// function useHoroscope() {
    // On crée un contexte
    // const someContext = createContext()
    

    //Composant fournisseur qui charge le fichier JSON -> fournit les données via le contexte 
    export function HoroscopeProvider({children}){
        // const [data, setData] = useState([])
        const [horoscope, setHoroscope] = useState(horoscopeData)
        const [currentIndex, setCurrentIndex] = useState(0)
  

  /*  useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("/datas/horoscope.json")
                if(!response.ok){
                    throw new Error("Failed to fetch data")
                }
                const jsonData = await response.json()
                setData(jsonData)
                console.log("Data retrieved")
            } catch (err) {
                console.error("Erreur est survenue:", err) 
            }
        }
        fetchData()
    }, []) */

/*
    return(
        // Display data here
        <MyContext.Provider value={data}>
        {children}
        </MyContext.Provider>
    )
}*/

    return(
        <HoroscopeContext.Provider value={{horoscope, currentIndex, setCurrentIndex}}>
            {children}
        </HoroscopeContext.Provider>
    )
}


// export default ContextProvider
export function useHoroscope(){
    return useContext(HoroscopeContext)
}