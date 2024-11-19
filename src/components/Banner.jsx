import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-56 sm:h-80 md:h-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/vk67gWH/winter-sale.jpg"
          className="sm:w-full sm:h-[500px] sm:object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/MD2C95g/perry-merrity-ii-Um-PS8-Zf6-FB0-unsplash.jpg"
          className="sm:w-full sm:h-[500px] sm:object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/HDdGWBN/winter-coupon.jpg"
          className="sm:w-full sm:h-[500px] sm:object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/1LS3GCY/winter-cpn.webp"
          className="sm:w-full sm:h-[500px] sm:object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
