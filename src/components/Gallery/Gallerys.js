import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap'
import Media from 'react-bootstrap/Media'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';
import Spin from 'react-reveal/Spin';
export default class Gallery extends Component {


  render() {

    return (


      <Fragment>

        <div style={styles.block}>

          <Fade top>

            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="https://media1.giphy.com/media/l8vhXzMYI1wUU/giphy.gif?cid=ecf05e474a9412e604584d928a94cb97f3884ed3b28150d0&rid=giphy.gif"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">
                <Bounce left cascade>
                  <h3 className="text">Tomagotchi</h3>
                  <p className="text">TAMAGOTCHI is a GAME!

                  The Tamagotchi (たまごっち) is a handheld digital pet, created in Japan by Akihiro Yokoi of WiZ and Aki Maita of Bandai, the game that became one of the biggest toy fads of the 1990s and early 2000s. This app allows the user to play a narrative based on the old amazing game once again!</p>
                  <h3>Technologies used.</h3>
                  <p>Phaser 3, Javascript, React, React bootstrap, Deployed on Heroku, MongoDB.</p>
           </Bounce>
           <Tada>
                  <Button variant="secondary" size="sm" href="https://fathomless-stream-68190.herokuapp.com/">
                    Live Link
          </Button>
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://github.com/UnseenMountain/tamagotchi">
                    GitHub repo
           </Button>
           </Tada>
                </div>
              </Media.Body>
            </Media>


            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="https://media3.giphy.com/media/UtNPaZkdzaT5K/100.webp?cid=ecf05e47b2df1a3e5583e7926971cd3c316869b50ab4156e&rid=100.webp"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">
                <Zoom left cascade>
                  <h3 className="text">Group Project 2</h3>
                  <p className="text">CASTR is a cross between Pinterest and Reddit/Quora.

                  Users sign up for an account and subscribe to their favorite creators. This is a space where creators can share a wide breadth of mediums including audio, art, literature, and video. It's a space where they can share, save, and start meaningful conversations around the different pieces creators have to offer.</p>

                  <h3>Technologies used.</h3>

                  <p>Javascript, CSS, Handlebars, MongoDB.</p>
                  <Button variant="secondary" size="sm" href="http://podfire.herokuapp.com/landing">
                    Live Link
          </Button>
          </Zoom>
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://github.com/cshjnim/CASTR.git">
                    GitHub repo.
           </Button>
                </div>
              </Media.Body>
            </Media>



            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="https://media2.giphy.com/media/3oriNPdeu2W1aelciY/giphy.gif?cid=ecf05e4748ab29f4e7c8a63208ca058ad214e935bdb70b43&rid=giphy.gif"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">
                <Flip cascade>
                  <h3 className="text">RPG game</h3>
                  <p className="text">This is a turn based RPG game were you select a character and battle the others you win by defeating all your
              opponets. (PS: choose Keannu Reaves) </p>
                  <h3>Technologies used.</h3>
                  <p>HTML 5, CSS, Javascript.</p>
                  </Flip>
                  <RubberBand>

                  <Button style={styles.pad} variant="secondary" size="sm" href="https://unseenmountain.github.io/unit-4-game/">
                    Live App
           </Button>
                  <Button variant="secondary" size="sm" href="https://github.com/UnseenMountain/unit-4-game">
                    GitHub repo
           </Button>
                  </RubberBand>
                </div>
              </Media.Body>
            </Media>

            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="data:image/png;base64,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"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">
                <Bounce left cascade>
                  <h3 className="text"> On Topic a 4 person group project</h3>
                  <p className="text">On Topic is a web app allowing users to search for keywords in three different API databases, returning
                  results of articles and videos (sourced via YouTube) related to that keyword. This is all part of Team No
                  Rest For The Students's Project One for UCLA's Fullstack Web Development Coding Bootcamp (September 2019 to
            March 2020).</p>
                  <h3>Technologies used.</h3>
                  <p>Firbase, Newsy API Javascript Deployed on Heroku.</p>
                  </Bounce>
                  <Tada>

                  <Button style={styles.pad} variant="secondary" size="sm" href="https://origamiunicorn.github.io/No-Rest-For-The-Students/">
                    Live App
           </Button>
                  <Button variant="secondary" size="sm" href="https://github.com/origamiunicorn/No-Rest-For-The-Students">
                    GitHub repo
           </Button>
                  </Tada>
                </div>
              </Media.Body>
            </Media>

            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="https://media3.giphy.com/media/NjwTXVzHvZx6w/200.webp?cid=ecf05e479b2f5c3e0793ac33a04ca6dc45802dd7e67ed814&rid=200.webp"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">
                <Fade bottom big cascade>>
                  <h3 className="text">Train station</h3>
                  <p className="text" >A search algorithm for a train station ticket machine to help the user find were they want to go.</p>
                  <h3>Technologies used.</h3>
                  <p>Firbase, Javascript Deployed on GitHub pages.</p>
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://unseenmountain.github.io/train-station/">
                    Live app
           </Button>
                  <Button variant="secondary" size="sm" href="https://github.com/UnseenMountain/train-station">
                    GitHub repo
           </Button>
                    </Fade>
                </div>
              </Media.Body>


            </Media>

            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="https://media2.giphy.com/media/Z8JSIEhG36CyI/source.gif"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">
                <Fade bottom big cascade>
                  <h3 className="text">Gifi API</h3>
                  <p className="text"> Seach your favorite video game gifs with this API application. </p>
                  <h3>Technologies used.</h3>
                  <p>HTML5 Javascript, Bulma CSS.</p>
                    </Fade>
                    <Shake>
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://github.com/UnseenMountain/Gify-cool-api">
                    Live app
           </Button>
                  <Button variant="secondary" size="sm" href="https://unseenmountain.github.io/unit-4-game/">
                    GitHub repo
           </Button>
           </Shake>
                </div>
              </Media.Body>


            </Media>

            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="https://media2.giphy.com/media/gYb3fTm6JN71u/giphy.webp?cid=ecf05e47cbb33d3652ce483b69f7658931605e1be06dbc5d&rid=giphy.webp"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">
                <Flip cascade>
                  <h3 className="text">Clikey game</h3>
                  <p className="text"> A simple memorie game see if you can remember all the characters. </p>
                  <h3>Technologies used.</h3>
                  <p>React, react bootstrap.</p>
                    </Flip>
                    <Spin>

                  <Button style={styles.pad} variant="secondary" size="sm" href="https://github.com/UnseenMountain/picture-games">
                    Live app
           </Button>
                  <Button variant="secondary" size="sm" href="https://polar-taiga-65488.herokuapp.com/">
                    GitHub repo
           </Button>
                    </Spin>
                </div>
              </Media.Body>


            </Media>

          </Fade>
        </div>

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
    padding: 60,
  },

  pad: {

    margin: 10
  }
};

















