import React from "react"
import { Card, Button } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <Card bg="dark" text="white" className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    
                    <Card.Text>
                        This code was created by Luke Klymshyn
                    </Card.Text>
                    
                        <Button variant="primary" href="https://github.com/UnseenMountain?tab=repositories">
                            Source files and link to my github here!
                     </Button>
                    
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>

        </div>
    )
}

export default Footer