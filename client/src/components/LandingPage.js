import Navbar from "./Navbar";
import { Link } from "react-router-dom"
const LandingPage = ()=>{
  return(

    <div className="row">
      <div className="col-lg-12 bg-image backgroundImage overflow-hidden">
        <div className="container ">
        <Navbar />
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
          <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4 logoText  fw-bolder"> Welcome To Egerton Bites</h1>
                <p className="lead jumboTronText  fw-bold text-normal">
                  Cooking is all about people.
                  Food is maybe the only universal thing that really has the power to bring everyone together.
                  No matter what culture, everywhere around the world, people eat together.
                </p>
                <p className="text-end"><em className="fw-bold"> Qoute By Chef Guy Fieri.</em></p>
                <hr className="my-4" />
                <p className="fw-bold">
                  Check out our E-Menu for the most delicious, luscious food.
                </p>
                <Link className="btn btn-outline-success" to="/emenu">E-Menu</Link>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default LandingPage;
