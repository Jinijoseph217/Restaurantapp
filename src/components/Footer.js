import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div> <Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>ABOUT</Card.Title>
      <Card.Text>
      Mr. Bolat is the owner of a small fast food restaurant. He wanted to stand out from the crowd of small businesses offering the same service in the neighborhood. In the brief he requested his cartoon logo design should be fun, tasty, playful, childish, fast food, American style.
      </Card.Text>
      <Button variant="primary">QUICK LINKS</Button>
    </Card.Body>
    <Card.Footer className="text-muted">Binaka Mall Dharampura, Jagdalpur, Jagdalpur Locality, Jagdalpur, Chhattisgarh</Card.Footer>
  </Card>
  </div>
  )
}

export default Footer