import { Image, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Button from "./Button.jsx";

const About = () => (
    <Col className="text-center">
        <h1>Sobre mim</h1>
        <p>Olá, eu sou a Maria Vicente, tenho 25 anos e estou estudando para ser uma desenvolvedora Full-Stack.
            Decidi mudar para a área da tecnologia porque sempre me interessei muito por ela.
            Estou muito animada para continuar aprendendo e crescendo neste campo!</p>

        <Image src="https://scontent.fjjg2-1.fna.fbcdn.net/v/t39.30808-6/286403799_5166839013407195_3650679134044742780_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeEfAnwZG00oCMX1PY45DyZuFl_3dZ77nvwWX_d1nvue_JFGcXGWgYxRG8-PzqXMRa6sTkANGigH3U4iEvWuX2BY&_nc_ohc=aRjplpcxUuEAX8wenf9&_nc_ht=scontent.fjjg2-1.fna&oh=00_AfDJowxK3dCdB04v2mf5u4w_A1RibFcqbo9SMgUTBnP0ag&oe=65273655" alt="Perfil" fluid />

        <Row className="justify-content-center mt-3">
            <Col xs="auto">
                <a href="https://www.facebook.com/mnvicente" target="_blank" rel="noreferrer">
                    <FaFacebook size={32} />
                </a>
            </Col>
            <Col xs="auto">
                <a href="https://www.linkedin.com/in/mariavcaetano/" target="_blank" rel="noreferrer">
                    <FaLinkedin size={32} />
                </a>
            </Col>
            <Col xs="auto">
                <a href="https://github.com/mavicaetano" target="_blank" rel="noreferrer">
                    <FaGithub size={32} color={'black'} />
                </a>
            </Col>
            <Col xs="auto">
                <a href="https://www.instagram.com/darkipp/" target="_blank" rel="noreferrer">
                    <FaInstagram size={32} color={'red'} />
                </a>
            </Col>
        </Row>

        <Button />
    </Col>
);

export default About;