import React from 'react'

const Navbar=()=>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand"  href="/">ParsoTak</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page"  href="/general">Home</a>
                    </li>
                    <li className="nav-item"><a  href="/business" className="nav-link">Business</a></li>
                    <li className="nav-item"><a  href="/entertainment" className="nav-link">Entertainment</a></li>
                    <li className="nav-item"><a  href="/health" className="nav-link">Health</a></li>
                    <li className="nav-item"><a  href="/science" className="nav-link">Science</a></li>
                    <li className="nav-item"><a  href="/sports" className="nav-link">Sports</a></li>
                    <li className="nav-item"><a  href="/technology" className="nav-link">Technology</a></li>
                </ul>
                </div>
            </div>
            </nav>
      </div>
    )
}

export default Navbar