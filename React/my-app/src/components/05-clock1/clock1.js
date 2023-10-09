import React from 'react'
import "./clock1.scss"
import moment from 'moment/moment';

const Clock1 = () => {
    const dateTime = moment();
    //require('moment/locale/tr');

    const timeStr = moment().format("HH:mm");
    const dateStr = moment().format("LL");
    const dayStr = moment().format("dddd")
    const hour = dateTime.format("HH");
    let message = "";
    if (hour >= 6 && hour < 11) {
        message = "Morning";
    } else if (hour >= 11 && hour < 17) {
        message = "Afternoon";
    } else if (hour >= 17 && hour < 22) {
        message = "Evening";
    } else {
        message = "Night";
    }

    return (
        <div className='clock-container'>
            <div className="time">{timeStr}</div>
            <div>
                <div className="date">{dateStr}</div>
                <div className="day">{dayStr} {message}</div>
            </div>
        </div>
    );
}

export default Clock1;