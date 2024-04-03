import { useState, createContext } from "react"

function GetDatas() {
        // On définit var d'état
        const someContext = createContext()
        const contextProvider = ({ elements }) => {
            const [datas, setData] = useState([])
        }


        const fetchData = async() => {
            try {
                const response = await fetch("/datas/horoscope.json")
                const jsonData = await response.json()
                setData(jsonData)
                console.log("Data retrieved")
            } catch (err) {
                console.error("Erreur est survenue:", err) 
            }
        }
    return(
        // Affichage un élément
        <>
        <div>Data loading</div>
        </>
    )
}

export default GetDatas()