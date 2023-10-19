import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import "./scroll.scss"

const Scroll = () => {
    const refAboutUs = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            const aboutUsEl = refAboutUs.current;
            const currentScrollPosition = window.scrollY;

            const elScrollPosition = aboutUsEl.offsetTop;
            const currentWindowHeight = window.innerHeight;
            const elCurrentHeight = aboutUsEl.offsetHeight;

            const targetScrollPosition =
                elScrollPosition - currentWindowHeight + elCurrentHeight;

            if (currentScrollPosition >= targetScrollPosition) {
                aboutUsEl.classList.add("active");
            }
        }

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <Container>
            {[...new Array(15)].map((item, index) => (
                <p key={index}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur odio libero in maiores molestias necessitatibus. Aut, cumque. Odio atque facilis voluptate iste vitae similique voluptatem earum quibusdam nulla consequatur.
                    Rerum voluptatibus quas quo tenetur illo nemo aliquam laboriosam pariatur nesciunt et in qui similique, repudiandae iure? Ducimus harum, explicabo incidunt neque numquam magnam soluta natus velit laboriosam, laborum accusantium!</p>
            ))}
            <p className='about-us' ref={refAboutUs}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur odio libero in maiores molestias necessitatibus. Aut, cumque. Odio atque facilis voluptate iste vitae similique voluptatem earum quibusdam nulla consequatur.
                Rerum voluptatibus quas quo tenetur illo nemo aliquam laboriosam pariatur nesciunt et in qui similique, repudiandae iure? Ducimus harum, explicabo incidunt neque numquam magnam soluta natus velit laboriosam, laborum accusantium!</p>

            {[...new Array(15)].map((item, index) => (
                <p key={index}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur odio libero in maiores molestias necessitatibus. Aut, cumque. Odio atque facilis voluptate iste vitae similique voluptatem earum quibusdam nulla consequatur.
                    Rerum voluptatibus quas quo tenetur illo nemo aliquam laboriosam pariatur nesciunt et in qui similique, repudiandae iure? Ducimus harum, explicabo incidunt neque numquam magnam soluta natus velit laboriosam, laborum accusantium!</p>
            ))}
        </Container>
    );
}

export default Scroll;