import React from 'react'
import './nav.css'

function Navbar() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/myComera_logo.png" alt='logo'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Download</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Security</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">FAQs</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </header>
    )
}

export default Navbar
