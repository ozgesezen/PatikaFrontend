import React from 'react'
import { Button, Card } from 'react-bootstrap';

const UserCard = (props) => {

    const { id, firstName, lastName, email, avatar } = props;

    return (
        <Card>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
                <Card.Title>{firstName} {lastName}</Card.Title>
                <Card.Text>{email}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default UserCard;