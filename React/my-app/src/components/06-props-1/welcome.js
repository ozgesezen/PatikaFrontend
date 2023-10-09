import React from 'react'
import "./welcome.scss"

const Welcome = ({ firstName, lastName }) => {

  //const {firstName,lastName} =props; bu sekilde altta
  //tanimladiktan sonra yukarda yine props kullanabiliriz
  //gelen veri az ise direk props yerine yazmak cok ise
  //bu sekilde genel bir props kabina koymak daha mantikli


  return (
    <div className='welcome'>
      <h2>Welcome {firstName} {lastName}</h2>
    </div>
  );
}

export default Welcome;