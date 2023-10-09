import React from 'react'

const Jsx1 = () => {

    const message = "Class isimleri className icinde ve attribute lari camelCase olmali";

    return (
        <>
            <li>Tum elementler tek bir root element icinde olmali</li>
            <li className='title'>{message}</li>
        </>

    );
}

export default Jsx1;