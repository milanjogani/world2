import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Collection = () => {
    return (
        <>
            <section className="collection my-5">
                <div className="container">
                    <div className="collectioninner row d-flex">

                        <Card className=' col-12 col-sm-12 col-md-6 col-lg-4 my-5'>
                            <Card.Img variant="top" src="./img/collection1.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>


                        <Card className='col-12 col-sm-12 col-md-6 col-lg-4 my-5'>
                            <Card.Img variant="top" src="./img/collection2.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>


                        <Card className='col-12 col-sm-12 col-md-6 col-lg-4 my-5'>
                            <Card.Img variant="top" src="./img/collection3.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection