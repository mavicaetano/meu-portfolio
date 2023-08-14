import { ListGroup } from 'react-bootstrap';
import Button from "./Button.jsx";

const withoutUnderline = {
    textDecoration: 'none',
    color: 'black'
};

const Portfolio = () => (
    <div>
        <h1 className={'text-center'}>Portfólio</h1>
        <ListGroup>
            <ListGroup.Item>
                <a style={withoutUnderline} href="https://github.com/mavicaetano/e-commerce-farmacia-v2" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                    <i className="fab fa-github fa-lg"></i> e-commerce-farmacia-v2
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a style={withoutUnderline} href="https://github.com/mavicaetano/e-commerce-farmacia" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                    <i className="fab fa-github fa-lg"></i> e-commerce-farmacia
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a style={withoutUnderline} href="https://github.com/mavicaetano/M1S05-exercicios-JavaScript" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                    <i className="fab fa-github fa-lg"></i> M1S05-exercicios-JavaScript
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a style={withoutUnderline} href="https://github.com/mavicaetano/M1S06-exercicios" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                    <i className="fab fa-github fa-lg"></i> M1S06-exercicios
                </a>
            </ListGroup.Item>
        </ListGroup>
        <Button/>
    </div>
);

export default Portfolio;