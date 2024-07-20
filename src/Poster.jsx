import React from 'react'

import { FaPlay } from "react-icons/fa";

const Poster = () => {
  return (
   <>
        <div className="mainouter">
            <div className="maininner d-flex">
                <div className="poster-text">
                    <p>Family travel agency</p>
                    <h2>Let's plan your <br /> next vacation</h2>

                    <button>contact us</button>
                </div>

                <div className="poster-video">
                <FaPlay />

                {/* <video src="./img/video.mp4"></video> */}
                </div>
            </div>
        </div>
   </>
  )
}

export default Poster