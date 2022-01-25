import { Link } from "react-router-dom";
const Navbar = ()=>{
  const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
  return(
    <nav className="navbar navbar-expand-lg navbar-light backgroundColour">
      <div className="container-fluid">
        <Link className="navbar-brand logoText fw-bold" to="/">
          <img src={require("../logo.png")} alt="" width="30" height="30" className="d-inline-block align-text-top me-3"  />
          Egerton Bites
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        {
          !authenticatedUser
          ?
            (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <i className="fa fa-home"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/customer/login">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/customer/register">Sign Up</Link>
                </li>
              </ul>
            )
          :
            (
              <ul className="navbar-nav ms-auto" >
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/manager/home">
                    <i className="fa fa-home"></i>
                  </Link>
                </li>
                <li className="nav-item text-uppercase">
                  <p className="lead ms-2"> <i className="fa fa-user"></i> {authenticatedUser.username}</p>
                </li>
              </ul>
            )
        }

        </div>
      </div>
      </nav>
  )
}

export default Navbar;
