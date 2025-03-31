import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function Trending() {
  // Apply filter on the cards by taking data from list.json file
  const filterData = list.filter((data) => data.name === "Remote"); 
  console.log(filterData);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          // breakpoints here represent that device lenght that in this device card shown like this
          breakpoint: 1024, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className='font-semibold text-xl pb-2'>Trending Jobs</h1>
        </div>
      <div>
        <Slider {...settings}>
         {/* here we map the card of the cards.jsx */}
         {/* here filterData is the array which consists of filter data */}
         {filterData.map((item)=>(
          <Cards item={item} key={item.name}/>
         ))}
        </Slider>
      </div>

 {/* here cards for companies */}
      <div>
        <h1 className='font-semibold text-xl pb-2'>Top Companies Hire Now</h1>
        </div>
      <div>
        <Slider {...settings}>
         {/* here we map the card of the cards.jsx */}
         {/* here filterData is the array which consists of filter data */}
         {filterData.map((item)=>(
          <Cards item={item} key={item.name}/>
         ))}
        </Slider>
      </div>

{/* here cards for college */}
<div>
        <h1 className='font-semibold text-xl  px-1 pb-2'>College Updates</h1>
        </div>
      <div>
        <Slider {...settings}>
         {/* here we map the card of the cards.jsx */}
         {/* here filterData is the array which consists of filter data */}
         {filterData.map((item)=>(
          <Cards item={item} key={item.name}/>
         ))}
        </Slider>
      </div>
      </div>
    </>
  );
}

export default Trending;

