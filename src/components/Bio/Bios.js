import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Media from 'react-bootstrap/Media';
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



                    <Row>
                      <Rotate>

                        <div style={styles.title}>



                          <Fade top big cascade>

                            <Container>
                              <Media >
                                <Media.Body>
                                  <div style={styles.pad} md="auto" className="text-white">

                                    <img
                                      width={150}
                                      height={150}
                                      className="align-self-center mr-3"
                                      src="https://i.ytimg.com/vi/c0NeRZ_unVI/hqdefault.jpg"
                                      alt="Generic placeholder"
                                    />
                                    <h2>Hi, I'm Luke Klymshyn and yes my last name has no vowels.</h2>
                                    <h2>I'm a UI and UX designer focused on making fun, engaging, and responsive websites for your users.</h2>

                                  </div>
                                </Media.Body>

                              </Media>

                            </Container>

                          </Fade>

                        </div>
                      </Rotate>
                    </Row>

                  </Card.ImgOverlay>

                </Card>


              </div >

            </Fade >

            <Fade top bottom big cascade>

              <Card>
                <Card.Img height="750" src="https://data.whicdn.com/images/289974250/original.gif" alt="Card image" />
                <Card.ImgOverlay>
                  <div style={styles.title}>


                    <Jumbotron>


                      <Zoom bottom cascade duration={1500}>

                        <h5>Luke Klymshyn is a graduate of UCLA and a Fullstack Web Developer who concentrates on UI and UX design.

                        He has worked with HTML5, CSS, JavaScript, Ajax, JSON, API, React bootstrap, Bulma, Databases, firebase, and React.

                            He excels in a group or alone and is focused and dedicated to achieving the goals necessary to complete all goals.</h5>

                        <h5> One of my early achievements was taking second place in the video game design competition at Skills USA with a friend of mine. I have also worked with an international VR company promoting their products at trade shows.

                        My hobbies consist of creative writing, designing video games, and listening to a different collection of music.

                          If you would like to review examples of my work please refer to the gallery below. </h5>

                      </Zoom>


                    </Jumbotron>
                  </div>

                </Card.ImgOverlay>
              </Card>

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
    fontWeight: 100,
    padding: 10,


  },

  pad: {
    margin: 30,
    padding: 80
  },

};