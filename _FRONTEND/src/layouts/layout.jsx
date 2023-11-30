import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ContainerFluid({ children }) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default ContainerFluid