import { Nav } from 'react-bootstrap'
import './navbar.css'

export default function NavBarra() {

    return (
        <div className={'headerizar'}>
            <Nav>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Nuevo</Nav.Link>
                </Nav.Item>

            </Nav>
        </div>

    )


}