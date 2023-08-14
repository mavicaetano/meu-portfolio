import { Image } from 'react-bootstrap';

const NotFound = () => (
    <div className={'text-center'}>
        <h1>Página não encontrada</h1>
        <p>A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
        <Image src="https://http.cat/404.jpg" alt="404" fluid />
    </div>
);

export default NotFound;