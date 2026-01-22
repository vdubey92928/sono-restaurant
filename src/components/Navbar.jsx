import React from 'react'
import logo from "../assets/image/logo.svg"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-sm-9 mx-auto" id="nav">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
                                <li className="nav-item my-auto">
                                    <Link className="nav-link active" aria-current="page" to="#">Reservations</Link>
                                </li>
                                <li className="nav-item dropdown my-auto">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menus
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown my-auto">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Restaurant
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link" to="#">Events</Link>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="navbar-brand" to="#">
                                        <img src={logo} alt="logo" className='img-fluid' style={{ height: "100px" }} />
                                    </Link>
                                </li>

                                <li className="nav-item my-auto">
                                    <Link className="nav-link " >Sono Sukaru</Link>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link " >Gift Card</Link>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link " >Contact</Link>
                                </li>
                                <li className="nav-item my-auto">
                                    <Link className="nav-link active" >77068 92928</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
