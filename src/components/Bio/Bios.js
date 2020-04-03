import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Media from 'react-bootstrap/Media'
import { Card, Container, Row, Jumbotron } from "react-bootstrap"
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
                  <Card.Img height="750" src="https://media3.giphy.com/media/3ov9jQWd5qhiUSPDri/giphy.gif" alt="Card image" />
                  <Card.ImgOverlay>


                    ``  <Container >
                      <Row>
                        <Rotate>

                        </Rotate>


                        <div >

                          <div style={styles.title} md="auto" className="text-white">
                            <Flip cascade>

                              <Container>
                                <Media as="li">
                                  <Media.Body>
                                    <h2>Hi, im Luke Klymshyn and yes my last name has no vowels.</h2>
                                    <h2>Im a UI and UX designer foucused in making fun, engaging, and responsive websites for your users.</h2>

                                  </Media.Body>
                                  <img
                                    width={200}
                                    height={200}
                                    className="align-self-center mr-3"
                                    src="https://i.ytimg.com/vi/c0NeRZ_unVI/hqdefault.jpg"
                                    alt="Generic placeholder"
                                  />
                                </Media>

                              </Container>

                            </Flip>
                          </div>

                        </div>
                      </Row>
                    </Container>
                  </Card.ImgOverlay>

                </Card>


              </div >

            </Fade>

            <Fade top>
              <div style={styles.title}>

                <Card>
                  <Card.Img height="750" src="https://media.giphy.com/media/l3978y5HqiEtqupiM/giphy.gif" alt="Card image" />
                  <Card.ImgOverlay>
                    <Jumbotron>
                      <Container>


                        <h5> Luke Klymshyn. Is a graduate of UCLA and a Fullstack web developer.
                                      who specializes in UI and UX design. </h5>
                        <h5>He has worked with HTML5, CSS, Javascript, Ajax, Json, API's,
                        React bootstrap, Bulma, and Databases.
                                    </h5>
                        <h5>I am great in a group or alone, Im very personable. </h5>

                        <h5>One of my acoplishments was taking second place in the video game design compition at Skills USA with a friend of mine. </h5>

                        <h5> My hobbies consist of playing video games, makeing up stories or new ideas listening to music. </h5>

                        <h5>If you would like to see samples of my work please refer to the gallery below.</h5>


                      </Container>
                    </Jumbotron>
                  </Card.ImgOverlay>
                </Card>

              </div>
            </Fade>
          </div>
        ))
        }
      </Fragment>
    );


  }


}



const styles = {

  block: {

    borderBottom: "3px solid rgb(212, 212, 212)",
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 100
  },
};