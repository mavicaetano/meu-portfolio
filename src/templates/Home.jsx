import { Container, Image } from 'react-bootstrap';
import Button from "./Button.jsx";

const Home = () => (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <Image src="https://camo.githubusercontent.com/4b37db8bd39e0377d29baed81fbfe9005d2d15f0ed6495968641493af09d3b44/68747470733a2f2f6c61623336352e7365736973656e61692e6f72672e62722f696d672f646576696e686f7573652d6c6f676f2e706e67" alt="Perfil" fluid />

        <Button />
    </Container>
);

export default Home;