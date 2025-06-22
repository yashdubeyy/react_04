import { useState } from 'react';
import '/src/style.css'

const App = () => {


  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        {/* bottom navigation */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
        </div>


        {/* image slider */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img1.png" alt="Husky" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src="img2.png" alt="Husky" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src="img3.png" alt="Husky" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src="img4.png" alt="Husky" className="d-block" />
          </div>
        </div>


        {/* next and back buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }}></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" style={{ backgroundColor: "black" }}></span>
        </button>
      </div>
    </>
  )
}

export default App;