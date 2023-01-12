import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerNavbar } from './styles'

let NavbarMain = () => {
    return (
        <ContainerNavbar>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Imotech</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Acesse a nossa plataforma <a href="https://imotech.app/">clicando aqui</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </ContainerNavbar>
    );
}

export default NavbarMain;