
const Error = (props)=>{
  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
            <div className="alert alert-danger">
              <h4 className="alert-heading">There was an error whilst connecting to the API</h4>
              <p className="fw-bold">{props.error}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Error;
