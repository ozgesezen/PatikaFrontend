import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const UseEffect = () => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    console.log("Bu satir render ve re-render durumlarinda ve alttaki return kismi render edilmeden once calistirir")

    useEffect(() => {
        console.log(`
          MOUNTING: Bu satir sadece render durumunda calisir.
          Ancak re-render larda calismaz.
          API den her render oldugunda data cekmemek icin ilk render da calistirilir sonra calistirilmaz
        `)
        return () => {
            console.log(`
            UNMOUNTING: bu bolum component hafizadan atilmadan once calistirilir.
            `)
        }
    }, []);

    useEffect(() => {
        console.log(`
        UPDATING: Bu satir render ve re-render durumlarinda ve alttaki return kismi
        render edildikten sonra calistirilir
        `)
    });

    useEffect(() => {
        console.log(`[] icinde verilen degerler de degisiklik oldugunda yapilacak islemler
        bu alan da yazilir, dependencyler degistikce tekrar calisir `)
    }, [message]);



    return (
        <div>
            <div>{message} - {error}</div>
            <Button variant='info' onClick={() => setMessage("Hello")}>Set Message</Button>
            <Button variant='danger' onClick={() => setError("Some Errors")}>Throw Error</Button>
        </div>
    );
}

export default UseEffect;