import React from "react"
import Carousel from 'react-bootstrap/Carousel'



    function Gallery () {
        
    return(
        
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/70/33/40/7033402094b61c41a083f4af7a9ef9a9.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <img
          className="d-block w-100"
          src="https://images.livemint.com/img/2019/07/10/600x338/botistock_1562766249656.jpg"
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height='500' 
          width='400'
          src="https://media.giphy.com/media/5QQ85S18ahuDl42uo6/giphy.gif"
          alt="Third slide"
          
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <a href="https://unseenmountain.github.io/Gify-cool-api/">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    )

}


export default Gallery