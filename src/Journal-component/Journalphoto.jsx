import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Journalphoto = () => {
    return (
        <>
            <section className="journalPhotoOuter">
                <div className="container">

                    <p>RECENT POST</p>
                    <h2>Browse our journal</h2>
                    <div className="journalPhotoInner row my-5">
                        <Card className='col-12 col-sm-12 col-md-6 col-lg-4 card'>
                            <Card.Img variant="top" src="./img/item1.jpeg" />
                            <Card.Body>
                                <Card.Title>7 of the Best Examples of Beautiful Blog Design</Card.Title>
                                <Card.Text>
                                    Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique.
                                </Card.Text>
                                <button>READ MORE</button>
                            </Card.Body>
                        </Card>
                        <Card className='col-12 col-sm-12 col-md-6 col-lg-4 card'>
                            <Card.Img variant="top" src="./img/item2.jpeg" />
                            <Card.Body>
                                <Card.Title>7 of the Best Examples of Beautiful Blog Design</Card.Title>
                                <Card.Text>
                                    Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique.
                                </Card.Text>
                                <button>READ MORE</button>
                            </Card.Body>
                        </Card>
                        <Card className='col-12 col-sm-12 col-md-6 col-lg-4 card'>
                            <Card.Img variant="top" src="./img/item3.jpeg" />
                            <Card.Body>
                                <Card.Title>7 of the Best Examples of Beautiful Blog Design</Card.Title>
                                <Card.Text>
                                    Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique.
                                </Card.Text>
                                <button>READ MORE</button>
                            </Card.Body>
                        </Card>
                        <Card className='col-12 col-sm-12 col-md-6 col-lg-4 card'>
                            <Card.Img variant="top" src="./img/item4.jpeg" />
                            <Card.Body>
                                <Card.Title>7 of the Best Examples of Beautiful Blog Design</Card.Title>
                                <Card.Text>
                                    Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique.
                                </Card.Text>
                               <button>READ MORE</button>
                            </Card.Body>
                        </Card>
                        <Card className='col-12 col-sm-12 col-md-6 col-lg-4 card'>
                            <Card.Img variant="top" src="./img/item5.jpeg" />
                            <Card.Body>
                                <Card.Title>7 of the Best Examples of Beautiful Blog Design</Card.Title>
                                <Card.Text>
                                    Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique.
                                </Card.Text>
                               <button>READ MORE</button>
                            </Card.Body>
                        </Card>
                        <Card className='col-12 col-sm-12 col-md-6 col-lg-4 card'>
                            <Card.Img variant="top" src="./img/item6.jpeg" />
                            <Card.Body>
                                <Card.Title>7 of the Best Examples of Beautiful Blog Design</Card.Title>
                                <Card.Text>
                                    Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique.
                                </Card.Text>
                               <button>READ MORE</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Journalphoto