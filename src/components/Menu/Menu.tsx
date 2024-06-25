import { Link } from "react-router-dom";


const Menu = () => (
    <nav className="navbar navbar-light navbar-expand-lg bg-success">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <span className="ml-1 text-light">
                    DIO Study
                </span>
            </Link>
        </div>
    </nav>
)

export default Menu;