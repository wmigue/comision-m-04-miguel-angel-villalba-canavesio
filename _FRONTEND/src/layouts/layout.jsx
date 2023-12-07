import Container from 'react-bootstrap/Container'
import NavBarra from '../components/navbar/navbar'
import { ContextoProvider } from '../context/contexto'
import LayAuth from './layAuth'

function LayOut({ children }) {

    return (
        <ContextoProvider>
            <Container fluid>
                <NavBarra />
                <LayAuth>
                    {children}
                </LayAuth>
            </Container>
        </ContextoProvider>
    )
}

export default LayOut