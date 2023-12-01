import { Nav } from 'react-bootstrap'
import './navbar.css'


export default function NavBarra() {

    return (

        <div className={'headerizar'}>
            <Nav defaultActiveKey="/home" as="ul" className='bg-light pb-6'>
                <Nav.Item as="li">
                    <Nav.Link href="/posts">TODOS </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/posts/nuevo">POSTEAR</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/users/registro">REGISTRARSE</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/">LOGIN</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>

    )


}