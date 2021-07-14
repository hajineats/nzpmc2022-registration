import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="navbar bg-dark navbar-dark">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand">The NZPMC</span>
                </Link>
            </div>
        </nav>
    );
}