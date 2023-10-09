import React from 'react'

const Style2 = () => {

    const styleTitle = {
        fontSize: "2rem",
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    }

    return (
        <div>
            <h2 style={styleTitle}>JSX Loops</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam aliquam neque libero iste vitae non, natus labore voluptatem porro veritatis ad cupiditate tenetur dolores pariatur minima magni facere molestias?</p>

            <h2 style={{ ...styleTitle, color: "blue" }}>Component Props</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis nihil vero, voluptatibus voluptates id voluptatum architecto, non dignissimos blanditiis inventore ullam voluptatem cumque officia expedita quas fugit pariatur? Amet.</p>
        </div>
    );
}

export default Style2;