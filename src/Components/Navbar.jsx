
const Navbar = ({setCategory}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News App</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav  ms-auto">
                            <li className="nav-item">
                                <div className="nav-link" style={{cursor:"pointer"}} onClick={()=>setCategory("technology")}>Technology</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link" style={{cursor:"pointer"}} onClick={()=>setCategory("business")}>Buisness</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link" style={{cursor:"pointer"}} onClick={()=>setCategory("health")}>Health</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link" style={{cursor:"pointer"}} onClick={()=>setCategory("sports")}>Sports</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link" style={{cursor:"pointer"}} onClick={()=>setCategory("entertainment")}>Entertainment</div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
