import React from 'react'

const Events = () => {

    //Event handler
    const sayHello1 = () =>{
        alert("Hello")
    }
    const sayHello2 = (name) =>{
        alert(`Hello ${name}`)
    }

  return (
    <div>
        {/*Eger event handler da parametresiz bir fonksiyon kullanacaksak direk yazilir () eklenme
        fakat bir parametre verilecekse callback fonksiyon basina eklenmelidir yoksa event calismaz */ }
        <div onClick={sayHello1}>Say Hello 1</div>
        <div onClick={()=> sayHello2("Ali")}>Say Hello 2</div>
    </div>
  )
}

export default Events;