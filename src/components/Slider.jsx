import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectFade } from 'swiper';
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

                    <SwiperSlide className="single_testimonial rounded-2xl
                    ">
                        <h3>Slide 1</h3>
                        <p>     Dolor laborum anim excepteur pariatur exercitation.</p>
                    </SwiperSlide>
                    <SwiperSlide className="single_testimonial">
                        <h3>Slide 2</h3>
                        <p>Nulla ut non ut deserunt deserunt aliquip quis quis amet fugiat laboris consectetur.</p>
                    </SwiperSlide>
                    <SwiperSlide className="single_testimonial">
                        <h3>Slide 3</h3>
                        <p>Sint id consequat laboris incididunt sit ut qui cupidatat nisi mollit do nulla nisi reprehenderit.</p>
                    </SwiperSlide>
                    <SwiperSlide className="single_testimonial">
                        <h3>Slide 4</h3>
                        <p>Sunt eu aliqua nostrud voluptate commodo dolor nulla deserunt ex.</p>
                    </SwiperSlide>
                </Swiper>
            </>
        )
    }
}

export default Slider                                                                                                                                                                                                                                                                                   