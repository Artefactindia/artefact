import React from "react";
import "../styles/landing.css";
import b1 from '../photoes/banner1.jpg'


const Landing = () => {

  return (
   

      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner" style={{ height: "70%" }}>
          <div className="carousel-item active">
            <img
              src={b1}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
             src="https://tulsiresin.com/cdn/shop/files/3_YEARS_Website_Banner_1900x.progressive.jpg?v=1689357048"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
             src={b1}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
   


   
  




  );
};

export default Landing;
