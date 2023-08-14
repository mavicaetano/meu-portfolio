import { Container, Row, Col } from 'react-bootstrap';
import Portfolio from '../templates/Portfolio';

const PortfolioPage = () => (
    <Container>
        <Row className={'place-content-center'}>
            <Col xs={12} sm={10} md={8} lg={6}>
                <Portfolio />
            </Col>
        </Row>
    </Container>
);

export default PortfolioPage;