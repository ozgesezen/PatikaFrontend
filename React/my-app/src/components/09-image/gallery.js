import React from 'react';
import "./gallery.scss";
import images from "./images.json"

const Gallery = () => {
    return (
        <div className='gallery'>
            {images.map((img, i) => (
                <div key={i}>
                    <a href={require(`../../assets/img/${img.name}`)} target="_black"><img src={require(`../../assets/img/${img.name}`)} alt="" width="300" /></a>
                </div>
            ))
            }
        </div>
    )
}

export default Gallery;