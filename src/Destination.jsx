import React from 'react'

import { ImHome3 } from "react-icons/im";
import { GiWhiteTower } from "react-icons/gi";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

const Destination = () => {
  return (
    <>
      <section className="destination">
        <div className="container">
          <div className="destiinner row d-flex">
            <div className="left-text col-sm-12 col-lg-6 col-md-12 col-12">
              <span className='mb-5 d-block'>Covilla benefits</span>
              <h2>Take your family on the best vacation</h2>
              <p>Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae.</p>

              <button>CHOOSE A DESTINATION</button>
            </div>

            <div className="right-img px-0 col-sm-12 col-lg-6 col-md-12 col-12">
              <img src="./img/block5.jpeg" alt="" />
            </div>
          </div>

          <div className="destination-blocks">
            <p>Why we're different</p>
            <div className="blockinner row">
              <div className="blockouter col-sm-6 col-lg-3 col-md-6 col-12 d-block">
                <div className="blockinn">
                  <div className="icon">
                    <ImHome3 />
                  </div>

                  <div className="text">
                    <h3>Hands-on planning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.</p>
                  </div>
                </div>

                <div className="blockinn-hover">
                  <div className="icon">
                    <ImHome3 />
                  </div>

                  <div className="text">
                    <h3>Hands-on planning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.</p>
                  </div>
                </div>
              </div>
              <div className="blockouter col-sm-6 col-lg-3 col-md-6 col-12 d-block">
                <div className="blockinn">
                  <div className="icon">
                    <GiWhiteTower />
                  </div>

                  <div className="text">
                    <h3>Hands-on planning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.</p>
                  </div>


                </div>

                <div className="blockinn-hover">
                  <div className="icon">
                    <GiWhiteTower />
                  </div>

                  <div className="text">
                    <h3>Hands-on planning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.</p>
                  </div>
                </div>
              </div>
              <div className="blockouter col-sm-6 col-lg-3 col-md-6 col-12 d-block">
                <div className="blockinn">
                  <div className="icon">
                    <FaArrowUpFromGroundWater />
                  </div>

                  <div className="text">
                    <h3>Hands-on planning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.</p>
                  </div>
                </div>

                <div className="blockinn-hover">
                  <div className="icon">
                    <FaArrowUpFromGroundWater />
                  </div>

                  <div className="text">
                    <h3>Hands-on planning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.</p>
                  </div>
                </div>
              </div>
              <div className="blockouter col-sm-6 col-lg-3 col-md-6 col-12 ">
                <div className="blockinn">
                  <div className="icon">
                    <FaDatabase />
                  </div>

                  <div className="text">
                    <h3>Hands-on planning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.</p>
                  </div>
                </div>

                <div className="blockinn-hover">
                  <div className="icon">
                    <FaDatabase />
                  </div>

                  <div className="text">
                    <h3>Hands-on planning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Destination