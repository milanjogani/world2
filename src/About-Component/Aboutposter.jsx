import React from 'react'


const Aboutposter = () => {
    return (
        <>
            <div className="aboutouter">
                <div className="container">
                    <div className="aboutinner">
                        <div className="aboutpostertext">
                            <p>ABOUT COVILLA</p>
                            <h2 >Family travel agency</h2>
                        </div>
                    </div>
                </div>


            </div>


                <div className="travelouter">
                    <div className="container">
                        
                        <div className="travelinner d-flex ">
                            <div className="lefttext ">
                                <h2>Changing the future <br /> of family travel</h2>
                                <p className='mt-4 '>Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae.</p>

                                <button type="button" class="btn btn-primary">CONTACT US</button>
                            </div>

                            <div className="righttext">
                                <div className="familyimage">
                                    <img src="./img/family.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        </>
    )
}

export default Aboutposter