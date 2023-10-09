import React from 'react'
import nortLights from "../../assets/img/image1.png"

const Image = () => {
  return (
    <div>

     {/*Externel url veya CDN */}
     <img src="https://picsum.photos/300" alt="" width="300"/>

     {/*statik yontemde goruntuler public klasoru icinde olmali */}
     <img src="assets/img/lm.png" alt="" width="300"/>

     {/* Import ve require yonteminde dosyalar src icinde olmalidir  */}
     <img src={nortLights} alt="" width="300"/>

     <img src={require("../../assets/img/image2.png")} alt="" width="300"/>

    </div>
  )
}

export default Image;