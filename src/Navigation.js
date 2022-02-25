
import Favicon from './favicon.png'
export function Navigation() {
    return (
        <nav className="navbar bg-dark navbar-dark">
            <div className="container">
                <a href={"https://www.nzpmc.com"} className="navbar-brand" style={{display:"flex", alignItems:"center"}}>
                    <img src={Favicon} width={40} height={40} style={{marginRight:"10px"}}/>
                    The NZPMC
                </a>
            </div>
        </nav>
    );
}