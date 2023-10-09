import React from 'react'

const Jsx2 = () => {

    const user = {
        name: 'Ozge Sezen',
        age: 28,
        occupation: 'Developer'
    }


    return (
        <div>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Occupation: {user.occupation}</div>
        </div>
    );
}

export default Jsx2;