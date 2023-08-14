import { Container, Row, Col } from 'react-bootstrap';
import About from '../templates/About';

const AboutPage = () => (
    <Container>
        <Row className={'place-content-center'}>
            <Col xs={12} sm={8} md={6} lg={4}>
                <About />
            </Col>
        </Row>
    </Container>
);

export default AboutPage;