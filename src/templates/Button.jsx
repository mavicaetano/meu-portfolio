import React from 'react';
import Button from 'react-bootstrap/Button';

class ButtonComponent extends React.Component {
    handleClick = () => {
        window.open('https://matias.ma/nsfw/', '_blank');
    }

    render() {
        return (
            <Button className={'do-not-click'} variant="danger" onClick={this.handleClick}>Não clique</Button>
        );
    }
}

export default ButtonComponent;