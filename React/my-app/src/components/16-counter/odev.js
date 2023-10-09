import React, { useState } from 'react'
import { Button, ButtonGroup, ProgressBar } from 'react-bootstrap';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { GrPowerReset } from "react-icons/gr"

const Odev = () => {

    const [now, setNow] = useState(0);

    return (
        <>
            <ButtonGroup aria-label='Baisc example' className='p-5'>
                <Button variant="info" onClick={() => setNow(prev => prev < 100 ? prev + 10 : prev)} disabled={now === 100}><AiOutlinePlusCircle /></Button>
                <Button variant="light" onClick={() => setNow(0)} disabled={now === 0}><GrPowerReset /></Button>
                <Button variant="info" onClick={() => setNow(prev => prev > 0 ? prev - 10 : prev)} disabled={now === 0}><AiOutlineMinusCircle /></Button>
            </ButtonGroup>
            <ProgressBar now={now} label={`${now}%`} />
        </>
    );
}

export default Odev;