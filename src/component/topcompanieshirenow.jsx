import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards2 from './Cards2';

function TopCompaniesHireNow() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  const filterData = list.filter((data) => data.title.toLowerCase() === "remote data object");
  console.log(filterData);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className='font-semibold text-xl pb-2'>Top Companies Hiring Now</h1>
      <Slider {...settings}>
        {filterData.length > 0 ? (
          filterData.map((item) => <Cards2 item={item} key={item.title} />)
        ) : (
          <p>No companies found.</p>
        )}
      </Slider>
    </div>
  );
}

export default TopCompaniesHireNow;
