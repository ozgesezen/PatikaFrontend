import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap';

const UseRef = () => {

    const emailRef = useRef(null);

    const setFocus = () => {
        console.log(emailRef);
        emailRef.current.focus();
        emailRef.current.style.backgroundColor = "red";
    }

    return (
        <Container className='mt-5'>
            <input type="text" placeholder='Enter your email' ref={emailRef} />
            <Button onClick={setFocus}>Set Focus</Button>
        </Container>
    );
}

export default UseRef;