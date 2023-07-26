import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/shoes.jpg" className="d-block w-100" alt="Shoes" height="400px" style={{ objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>NEW SEASON ARRIVAL</h5>
              <p>CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/clothes.jpg" className="d-block w-100" alt="Clothes" height="400px" style={{ objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>NEW SEASON ARRIVAL</h5>
              <p>CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/watch.jpg" className="d-block w-100" alt="Watches" height="400px" style={{ objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>NEW SEASON ARRIVAL</h5>
              <p>CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
