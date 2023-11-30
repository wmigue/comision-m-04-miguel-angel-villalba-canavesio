import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export default function CardComentario(children) {
    const { title, description, autor, imgURL } = children
    return (
        <div className="d-flex justify-content-center ">

            <Card className="text-center p-0" style={{ width: '700px', marginBottom: '25px', minWidth: "300px" }}>
                <Card.Header>
                    <Col xs={6} md={6}>
                        <Image src={autor.avatarURL} roundedCircle />
                    </Col>
                    {autor.email}
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <img src={imgURL}></img>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">comentar</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>

            </Card>
            <br />
        </div>


    )
}



