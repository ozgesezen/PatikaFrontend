import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import UserCard from './user-card';

const UserCards = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://652e87e50b8d8ddac0b18b00.mockapi.io/users")
                .then(response => response.json())
                .then((data) => {
                    setUsers(data);
                }
                )
                .catch(err => {
                    console.log(err)
                })
                .finally(
                    () => { setLoading(false) }
                )
        }, 5000)
    }, []);


    return (
        <Container className='mt-5'>

            {loading && <Spinner animation="grow" variant="secondary" />}

            <Row className='g-4'>
                {users.map((user) => (
                    <Col key={user.id} sm={6} md={4} lg={3} xl={2}><UserCard {...user} /></Col>
                ))}
            </Row>
        </Container>
    );
}

export default UserCards;