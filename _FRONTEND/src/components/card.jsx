import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Image from 'react-bootstrap/Image'
import { API_URL, PATH_AVATARS } from '../../constantes'
import { formateoDates } from '../utils/dates'

export default function CardComentario(children) {

    const { title, description, autor, imgURL, createdAt } = children
    return (
        <div className="d-flex justify-content-center ">

            <Card className="text-center p-0" style={{ width: '700px', marginBottom: '55px', minWidth: "300px" }}>
                <Card.Header>
                    <Image width={50} height={50} src={API_URL + PATH_AVATARS + "/" + autor.avatarURL} roundedCircle />
                    <p> {autor.email}</p>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <img src={imgURL}></img>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">comentar</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{formateoDates(createdAt)}</Card.Footer>

            </Card>
            <br />
        </div>


    )
}



