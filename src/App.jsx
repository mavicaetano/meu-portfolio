import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Meu Portfólio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/sobre-mim">Sobre Mim</Nav.Link>
                                <Nav.Link href="/portfolio">Portfólio</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div style={{flex: '1'}}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/sobre-mim" element={<AboutPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
                <Container fluid style={{backgroundColor: '#f8f9fa', textAlign: 'center'}}>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="footer p-3 mt-4">
                                <div className="copyright">
                                    © 2023 - Todos os direitos reservados
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
}

export default App;