import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { GrPowerReset } from "react-icons/gr"
const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = (val) => {
        if (val < 0) val = 0;
        setCounter(val);
    }


    return (
        <ButtonGroup aria-label='Baisc example'>
            <Button variant="info" onClick={() => handleClick(counter + 1)}><AiOutlinePlusCircle /></Button>
            <Button variant="light" disabled>{counter}</Button>
            <Button variant="info" onClick={() => handleClick(counter - 1)}><AiOutlineMinusCircle /></Button>
            <Button variant="light" onClick={() => handleClick(0)} disabled={counter === 0}><GrPowerReset /></Button>
        </ButtonGroup>
    )
    // return (
    //     Burada prev+1 kullandik cunku react get olarak kullanilan degerin set icinde direk islem gormesinin hataya neden olabilecegini soyluyor
    //     <ButtonGroup aria-label='Baisc example'>
    //         <Button variant="info" onClick={()=> setCounter(prev=>prev+1)}><AiOutlinePlusCircle/></Button>
    //         <Button variant="light" disabled>{counter}</Button>
    //         <Button variant="info" onClick={()=> setCounter(prev=>prev-1)}><AiOutlineMinusCircle/></Button>
    //         <Button variant="light" onClick={()=> setCounter(0)}><GrPowerReset/></Button>
    //     </ButtonGroup>
    // )
};

export default Counter;