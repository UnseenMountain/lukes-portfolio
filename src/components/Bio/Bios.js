import React, { useState } from "react"
import { Card, Container, Col, Image, Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import './style.css'



function Bio() {
    const [show, setShow] = useState(false);
    return (
        <div>


            <Card >
                <Card.Img height="700" src="https://i.pinimg.com/originals/63/9d/35/639d3537c0ba9d959e379c646c655878.jpg" alt="Card image" />
                <Card.ImgOverlay>

                    ``          <Container>
                        <Col xs={6} md={4}>
                            <Image height="250" width="250" src="https://lh3.googleusercontent.com/proxy/C9CL1Y_NJvu4ZZD95qEHF502nPKQwUWpdAJLJFBucpPaUSbgM3ON31o_6BwbJp2s0Tvj6u-Dak5UwVxDftwfu_p5lX5KsuE" roundedCircle />
                        </Col>


                        <div className="container">
                            <Card>
                                <Card.Body>
                                    <div>
                                        <h1>About Me </h1>
                                        <h4>My name is Luke Klymshyn. I am an aspiring web developer and avid gamer. I am a student at
                                        UCLA I have
                                        experiance in HTML 5 CSS and Javascrtipt I have worked
                                        with Bootstrap, Ajax requests, Jquery, and firebase applications. </h4>
                                        <h4>If you would like to see a samples of my work please refer to the gallery section of my site.
                                        I am a people person very personable and im a team player. </h4>
                                    </div>
                                    </Card.Body>
                            </Card>

                        </div>
                    </Container>
                </Card.ImgOverlay>

            </Card>


        </div >
    )

};

export default Bio
