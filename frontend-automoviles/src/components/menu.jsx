import React from "react";
function Menu()
{
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
            <a className="navbar-brand">
                <link to="/automoviles"></link>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span className="navbar-toggler-icon">Automoviles</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                </ul>


                <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <a className="nav-link">Login</a>
                        </li>
                            <li className="nav-item">
                                <a className="nav-link">Register</a>
                            </li>
                   
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default Menu;