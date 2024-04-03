import Header from "../components/Header"
import { Link } from "react-router-dom"
import "../styles/Home.css"
// import GetDatas from "../GetDatas"
import { useContext } from "react"
import { useHoroscope } from "../components/ContextProvider"

function Home() {

    // const data = useContext(ContextProvider)
    const {horoscope, currentIndex, setCurrentIndex} = useHoroscope()

    const changeTop = (direction) => {
        if(direction === "left"){
            setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1)
            return
        }
        setCurrentIndex(currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0)
    }

    return(
        <>
        <Header />
        <main>
        <section>
            <div>
                <Link className="left-horoscope" onClick={() => changeTop("left")} to="#" />{horoscope[currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1].signe}<span>{horoscope[currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1].date}</span>
                <Link className="right-horoscope" onClick={() => changeTop("right")}  to="#" />{horoscope[currentIndex < horoscope.length-1 ? currentIndex + 1 : 0].signe}<span>{horoscope[currentIndex < horoscope.length-1 ? currentIndex + 1 : 0].date}</span>
            </div>
            <article>
                <p id="datejour">-- HOROSCOPE DU {new Date().toLocaleDateString()}</p>
                <h1>{horoscope[currentIndex].signe}</h1>
                <span id="date">{horoscope[currentIndex].date}</span>
                <div>
                    <p id="amour"><span>Amour : {horoscope[currentIndex].amour}</span></p>
                    <p id="travail"><span>Travail : {horoscope[currentIndex].travail}</span></p>
                    <p id="argent"><span>Argent : {horoscope[currentIndex].argent}</span></p>
                    <p id="sante"><span>Santé : {horoscope[currentIndex].sante}</span></p>
                    <p id="famille"><span>Famille et amis : {horoscope[currentIndex].famille}</span></p>
                    <p id="conseil"><span>Conseil : {horoscope[currentIndex].conseil}</span></p> 
                </div>
            </article>
        </section>
        <aside>
            <img src={horoscope[currentIndex].image} alt={horoscope[currentIndex].signe} />
        </aside>
    </main>
    {/* <GetDatas /> */}
    </>
    )
}

export default Home