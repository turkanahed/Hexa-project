import React, { useEffect, useState } from 'react'
import { Container } from './style'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper";
// import Card from '../../../../components/Card';

const Testimonial = () => {
    const [authors, setAuthors] = useState(null);

    const getData = () => {
        return fetch("http://localhost:5000/authors")
            .then(response => response.json())
            .then(data => setAuthors(data));
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title">
                            <h2>Testimonial</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="slider">
                            <Swiper 
                             navigation={true}
                             modules={[Navigation]} 
                             spaceBetween={50}
                             slidesPerView={3}
                             onSwiper={(swiper) => console.log(swiper)}
                             onSlideChange={() => console.log('slide change')}
                             className="mySwiper">
                                {
                                    authors?.map((author) => (
                                        <SwiperSlide>
                                            <div className='card-wrapper'>
                                                <div className='card-top' >
                                                    <div className='card-img'>
                                                        <img src={author.image} alt="" />
                                                    </div>
                                                    <div className='card-author'>
                                                        <h5>{author.author}</h5>
                                                        <h5>CEO,Co-Founder</h5>
                                                    </div>
                                                </div>
                                                <div className='card-bottom'>
                                                    <p>
                                                        {author.comment}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Testimonial