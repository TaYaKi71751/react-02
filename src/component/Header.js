import { Link } from "react-router-dom"
export default function Header(){
    return(
        <div className="header">
            <h1>
                <Link to="/">단어장</Link>
            </h1>
            <div className="menu">
                <Link to="/" className="link">단어장</Link>
                <Link to="/"  className="link">단어장</Link>
            </div>
        </div>
    )

}
