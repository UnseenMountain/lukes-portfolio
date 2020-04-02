import React from "react"
import { Card, Button, Image } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <Card bg="dark" text="white" className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    
                    <Card.Text>
                        This code was created by Luke Klymshyn
                    </Card.Text>
                    
            
                        <Button variant="primary" href="https://www.linkedin.com/in/luke-klymshyn-397622193/">
                        <Image height="100" width="100" src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" roundedCircle />
                     </Button>
                        
                        <Button variant="primary" href="https://github.com/UnseenMountain?tab=repositories">
                        <Image height="100" width="100" src="https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg" roundedCircle />
                     </Button>
                    
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>

        </div>
    )
}

export default Footer