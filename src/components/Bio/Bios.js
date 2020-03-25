import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import { Card, Container, Col, Image, Row } from "react-bootstrap"
export default class ReactReveal extends Component {


  

  render() {
    const animateList = [1];
    return (
      <Fragment>
        {animateList.map(() => (
          <div>
            <Fade top>
            <div>
            

            <Card >
                <Card.Img height="750" src="https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif" alt="Card image" />
                <Card.ImgOverlay>
                    

                    ``  <Container fluid="md">
                        <Row>
                            <Rotate>
                        <Col xs={6} md={4}>
                            <Image height="250" width="250" src="https://i.ytimg.com/vi/c0NeRZ_unVI/hqdefault.jpg" roundedCircle />
                        </Col>
                        </Rotate>


                        <div>
                            <Col  md={{ span: 7, offset: 3 }}>
                            <Card >
                                <Card.Body>
                                <Card.Header>About me</Card.Header>
                                    <div>
                                    <Flip cascade>

                                    <h5> Hi im Luke Klymshyn. I am a graduate of UCLA </h5>
                                        
                                        <h5>If you would like to see samples of my work please refer to the gallery section of my site.
                                        
                                        I am a people person very personable and I'm a team player.</h5>
                                    </Flip>
                                        
                                    </div>
                                    </Card.Body>
                            </Card>
                            </Col>
                        </div>
                        </Row>
                    </Container>
                </Card.ImgOverlay>

            </Card>


        </div >
              {/* <h1 style={styles.title}>{`block ${item}`}</h1> */}
            </Fade>
          </div>
        ))}
      </Fragment>
    );
  }
}

const styles = {
  block: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,.2)'
  },
  title: {
    textAlign: 'center',
    fontSize: 100,
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 100
  },
};









// import React, { useState } from "react"
// import { Card, Container, Col, Image, Row } from "react-bootstrap"
// import Modal from 'react-bootstrap/Modal'
// import './style.css'



// function Bio() {
//     const [show, setShow] = useState(false);
//     return (
        // <div>
            

        //     <Card >
        //         <Card.Img height="750" src="https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif" alt="Card image" />
        //         <Card.ImgOverlay>

        //             ``          <Container fluid="md">
        //                 <Row>
        //                 <Col xs={6} md={4}>
        //                     <Image height="250" width="250" src="https://i.ytimg.com/vi/c0NeRZ_unVI/hqdefault.jpg" roundedCircle />
        //                 </Col>


        //                 <div>
        //                     <Col  md={{ span: 7, offset: 3 }}>
        //                     <Card >
        //                         <Card.Body>
        //                         <Card.Header>About me</Card.Header>
        //                             <div>
        //                                 <h5> My name is Luke Klymshyn. I am a gruduate of UCLA's online coding bootcamp program
        //                                 experience in HTML 5 CSS and Javascript I have worked with Bootstrap, Ajax requests, Jquery, and firebase applications. </h5>
        //                                 <h5>If you would like to see samples of my work please refer to the gallery section of my site.
        //                                 I am a people person very personable and I'm a team player.</h5>
        //                             </div>
        //                             </Card.Body>
        //                     </Card>
        //                     </Col>
        //                 </div>
        //                 </Row>
        //             </Container>
        //         </Card.ImgOverlay>

        //     </Card>


        // </div >
//     )

// };

// export default Bio
