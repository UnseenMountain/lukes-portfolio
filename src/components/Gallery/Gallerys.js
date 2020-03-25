import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Container, Card } from 'react-bootstrap'
export default class ReactReveal extends Component {

  render() {
    
    return (
      <Fragment>
        
          <div style={styles.block}>
            <Fade top>
              
              <Card style={styles.title}>
                <Card.Body>
                   <h3  className="text">Group Project 2</h3>
                   <p className="text">This is a photo, video and comment sharing application my team created.
           </p>
                 <Button variant="secondary" size="sm" href="http://podfire.herokuapp.com/landing">
                 Live Link
          </Button>
                 </Card.Body>
               </Card>
        

              



          <Card style={styles.title}>
                 <Card.Body>
                   <h3 className="text"> On Topic a 4 person group project</h3>
                   <p className="text">This a Group Project my team created called On Topic. Here you can search up related, historical or cesent
             events based on your search results.</p>
             
             <Button variant="secondary" size="sm" href="https://origamiunicorn.github.io/No-Rest-For-The-Students/">
                 Live App
           </Button>
             </Card.Body>
               </Card>

               <Card style={styles.title}>
                 <Card.Body>
                   <h3 className="text">RPG game</h3>
                  <p className="text">This is a game I created were you select a character and battle the others you win by defeating all your
                  opponets. (PS: choose Keannu Reaves)
            </p>
                 <Button variant="secondary" size="sm" href="https://unseenmountain.github.io/unit-4-game/">
                 Live App
           </Button>
                 </Card.Body>               
                 </Card>
                
                 <Card style={styles.title}>
                 <Card.Body>
                 <h3 className="text">Train station</h3>
                   <p className="text" > Take a ride on the rails (or off if thats your thing).
                   </p>
                  <Button variant="secondary" size="sm" href="https://unseenmountain.github.io/train-station/">
                   Large button
           </Button>
                 </Card.Body>
               </Card>

               <Card style={styles.title}>
                <Card.Body>  
                   <h3 className="text">Gifi API</h3>
              <Button variant="secondary" size="sm" href="https://unseenmountain.github.io/Gify-cool-api/">
                Large button
          </Button>
                </Card.Body>
              </Card>
            </Fade>
          </div>
        
      </Fragment>
    );
  }
}

const styles = {
  block: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,.2)',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 100
  },
};

















// import React from "react"
// import Carousel from 'react-bootstrap/Carousel'
// import Fade from 'react-reveal/Fade';
// import { Button, Container, Card } from 'react-bootstrap'
// import './style.css'

// function Gallery() {

//   return (
//     <div className="text">
//       <Card >
//                 <Card.Img height="700" src="https://media.giphy.com/media/OK5LK5zLFfdm/giphy.gif" alt="Card image" />
//                 <Card.ImgOverlay>
//       <Container>
//         <Carousel>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://news.wsiu.org/sites/wsiu/files/styles/x_large/public/201709/on_topic.jpg"
//               alt="First slide"
//               height="500"
//             />
//             <Carousel.Caption>
//               <Card>
//                 <Card.Body>
//                   <h3 className="text"> On Topic a 4 person group project</h3>
//                   <p className="text">This a Group Project my team created called On Topic. Here you can search up related, historical or cesent
//             events based on your search results.</p></Card.Body>
//               </Card>


//               <Button variant="secondary" size="sm" href="https://origamiunicorn.github.io/No-Rest-For-The-Students/">
//                 Large button
//           </Button>
//             </Carousel.Caption>
//           </Carousel.Item>



//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://www.dailynews.com/wp-content/uploads/2017/09/img_3776.jpg"
//               alt="First slide"
//               height="500"
//             />
//             <Carousel.Caption>
//               <Card>
//                 <Card.Body>
//                   <h3 className="text">Group Project 2</h3>
//                   <p className="text">This is a photo, video and comment sharing application my team created.
//           </p>
//                 </Card.Body>
//               </Card>


//               <Button variant="secondary" size="sm" href="http://podfire.herokuapp.com/landing">
//                 Large button
//           </Button>
//             </Carousel.Caption>
//           </Carousel.Item>


//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://i.pinimg.com/736x/70/33/40/7033402094b61c41a083f4af7a9ef9a9.jpg"
//               alt="First slide"
//               height="500"
//             />
//             <Carousel.Caption>
   //            <Card>
//                 <Card.Body>
//                   <h3 className="text">RPG game</h3>
//                   <p className="text">This is a game I created were you select a character and battle the others you win by defeating all your
//                   opponets. (PS: choose Keannu Reaves)
//             </p>
//                 </Card.Body>
//               </Card>


//               <Button variant="secondary" size="sm" href="https://unseenmountain.github.io/unit-4-game/">
//                 Large button
//           </Button>
//             </Carousel.Caption>
//           </Carousel.Item>


//           <Carousel.Item>

//             <img
//               className="d-block w-100"
//               src="https://images.livemint.com/img/2019/07/10/600x338/botistock_1562766249656.jpg"
//               alt="Third slide"
//               height="500"
//             />

//             <Carousel.Caption>
//               <Card>
//                 <Card.Body>
//                   <h3 className="text">Train station</h3>
//                   <p className="text" > Take a ride on the rails (or off if thats your thing).
//                   </p>
//                   <Button variant="secondary" size="sm" href="https://unseenmountain.github.io/train-station/">
//                   Large button
//           </Button>
//                 </Card.Body>
//               </Card>

//             </Carousel.Caption>
//           </Carousel.Item>



//           <Carousel.Item>
//             <img
//               className="d-block w-100"

//               src="https://media.giphy.com/media/5QQ85S18ahuDl42uo6/giphy.gif"
//               alt="Third slide"
//               href="https://unseenmountain.github.io/Gify-cool-api/"
//               height="500"
//             />

//             <Carousel.Caption>
          //     <Card>
          //       <Card.Body>  
          //          <h3 className="text">Gifi API</h3>
          //     <Button variant="secondary" size="sm" href="https://unseenmountain.github.io/Gify-cool-api/">
          //       Large button
          // </Button>
          //       </Card.Body>
          //     </Card>


//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </Container>
//       </Card.ImgOverlay>

//             </Card>
//     </div>
//   )

// }


// export default Gallery