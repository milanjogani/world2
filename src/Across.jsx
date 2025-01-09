import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Across = () => {
    var str = {
        responsive: {
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1200:{
                items:3,
            },
           
        }
    }
    return (
        <>
            <section className='across'>
                {/* <div className="container"> */}
                    <div className="acrossinner text-center">
                        <p className='mb-4'>Covilla Destinations</p>
                        <h1 className='mb-5 mt-5'>Across the world</h1>

                        <div className="across-slider">
                            <OwlCarousel className='owl-theme' loop dots={false} autoplay autoplaySpeed={2000} autoplayTimeout={2000} margin={20} nav {...str}>
                                <div class='item'>
                                   <img src="./img/block1.jpeg" alt="" />

                                   <div className="slidertext">
                                    <p>VACATION</p>
                                    <h3>indonesia</h3>
                                   </div>
                                </div>
                                <div class='item'>
                                   <img src="./img/block2.jpeg" alt="" />

                                   <div className="slidertext slider2">
                                    <p>VACATION</p>
                                    <h3>greece</h3>
                                   </div>
                                </div>
                                <div class='item'>
                                   <img src="./img/block3.jpeg" alt="" />

                                   <div className="slidertext">
                                    <p>VACATION</p>
                                    <h3>egypt</h3>
                                   </div>
                                </div>
                                <div class='item'>
                                   <img src="./img/block4.jpeg" alt="" />

                                   <div className="slidertext slider2">
                                    <p>VACATION</p>
                                    <h3>france</h3>
                                   </div>
                                </div>
                               
                             
                            </OwlCarousel>
                        </div>
                    {/* </div> */}

                    
                </div>
            </section>
        </>
    )
}

export default Across