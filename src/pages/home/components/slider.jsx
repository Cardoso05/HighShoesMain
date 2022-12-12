import React, { useState } from "react";

import Carousel from "react-simply-carousel"
import { sliderItems } from "../../../data";


export const Slider = () =>{
    const [activeSlide, setActiveSlide] = useState(0);
    
    return(
        <div>
            <div>
      <Carousel

        containerProps={{
          style: {
            width: "100%",
            userSelect: "text"
          }
        }}

        activeSlideIndex={activeSlide}
        
        onRequestChange={setActiveSlide}

        forwardBtnProps={{
          show: false
        }}
        backwardBtnProps={{
            show: false
        }}

        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "gray",
              margin: "20px"
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "#1DA6F2",
              margin: "20px"
            }
          }
        }}

        itemsToShow={1}
        speed={400}
      >
       {sliderItems.map(({ id, img }) => (
            <img src={img} alt="" key={id} style={{width: "400px",
            height: "auto"}}/>
        ))}
        
      </Carousel>
    </div>
        </div>
    )
}