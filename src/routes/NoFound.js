import { Link } from "react-router-dom"

function NoFound (){
    return (
        <div>
            <h2>404</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NoFound;
