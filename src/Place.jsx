import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Place = () => {

    var places = {
        responsive: {
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1200:{
                items:1,
            },
           
        }
    }

    return (
        <>
            <section className="place">
                <div className="container">
                    <div className="placeinner">
                        <div className="placesTeaxt">
                           


                            <OwlCarousel className='owl-theme' loop margin={10} nav dots={false} {...places}>
                                <div class='item-place'>
                                    <p>Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.</p>
                                    <strong>Wilson Tomales</strong>
                                </div>

                                <div class='item-place'>
                                    <p>Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.</p>
                                    <strong>Tammy Georgeon</strong>
                                </div>
                                
                                <div class='item-place'>
                                    <p>Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.</p>
                                    <strong>Emily Camphon</strong>
                                </div>
                                
                                <div class='item-place'>
                                    <p>Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.</p>
                                    <strong>Cassie Shamath</strong>
                                </div>
                                
                                <div class='item-place'>
                                    <p>Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.</p>
                                    <strong>Samantha Vohnhale</strong>
                                </div>
                                
                            </OwlCarousel>;
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Place