import { Link } from "react-router-dom"

function Header(){
    return(
       
        <header>
        <Link to="#" /><img src="../img/logo-oraculus.png" alt="Logo Oraculus" />
        <nav>
            <ul>
                <li><Link className="active" to="#" />Horoscope</li>
                <li><Link to="#" />A propos</li>
                <li><Link to="#" />Contact</li>
            </ul>
        </nav>
        <div className="arrow">
            <Link className="arrow-left" to="#"><i className="fa-solid fa-chevron-left"></i></Link>
            <Link className="arrow-right" to="#"><i className="fa-solid fa-chevron-right"></i></Link>
        </div>
    </header>
    )
}

export default Header