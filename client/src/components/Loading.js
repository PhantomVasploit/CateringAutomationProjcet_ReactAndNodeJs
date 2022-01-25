const Loading = ()=>{
  return(
    <div className="container mt-4">
      <div className="row">
      <div className="d-flex justify-content-center mt-4">
        <div d-flex justify-content-center>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
