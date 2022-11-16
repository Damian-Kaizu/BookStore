import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectFade } from 'swiper';
import { slides } from '../assets/index';
import './slider.css'
// Import Swiper styles
import "swiper/css/effect-fade";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
export class Slider extends Component {
    render() {
        return (
            <>
                <Swiper className="Testimonial_container mx-2 rounded-xl"
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectFade, Autoplay]}
                    effect={"fade"}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}

                >

                    {slides.map((slide) => (
                        <SwiperSlide className='single_testimonial rounded-2xl'>
                            <h3 >{slide.title}</h3>
                            <p>{slide.description}</p>
                        </SwiperSlide>
                    )
                    )
                    }


                </Swiper>
            </>
        )
    }
}

export default Slider                                                                                                                                                                                                                                                                                   