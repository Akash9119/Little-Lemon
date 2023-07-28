import './DateSelector.css'
import React, {useState, useRef} from 'react';

const ocassions = [
    {
        label: 'Birthday',
        value: 'birthday'
    },
    {
        label: 'Anniversary',
        value: 'anniversary'
    }
]

const DateSelector = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toDateString());

    const dateRef = useRef(null);

    const timeStr = time.toString().split(' ');
    const dateStr = date.toString().split(' ');

    let cafeStatus = 'Closed';

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toDateString());
    }, 1000);

    const hour = new Date().toTimeString().split(' ')[0].split(':');

    const startingTime = 8;
    const closoingTime = 21;

    if (parseInt(hour[0]) > startingTime && parseInt(hour[0]) < closoingTime) {
        cafeStatus = 'Open';
    } else {
        cafeStatus = 'closed';
    }

    const handleClickedDate = () => {
        props.chooseDate(dateRef.current.value);
    }

    const handleOcassionChange = (e) => {
        props.chooseOcassion(e.target.value);
    }
    return (
        <div className="reservation__date-selector">
        <div className='reservation__date-selector-date-time'>
            <h1 className='title'>Date</h1>
            <div className='date-time'>

                <div className='date'>
                    {
                        dateStr[2]  + " " + dateStr[1] + " " + dateStr[3]
                    }
                </div>

                <div className='time'>
                    {
                        timeStr[0] + " " + timeStr[1]
                    }
                </div>

            </div>
        </div>
        <div className='open-closed'>
                <h1 className={`title ${cafeStatus} status`}>{cafeStatus}</h1>
        </div>

        <div className="choose-date">
            <input
                ref={dateRef}
                onChange={handleClickedDate}
                type="date"
                className='date-selector' />
            <select className='ocassion-selector' value={props.ocassion}  onChange={handleOcassionChange}>
               {
                ocassions.map((ocassion) => {
                return (
                    <option value={ocassion.value}>
                        {ocassion.label}
                    </option>
                );
                })
               }
            </select>
        </div>
        </div>
    );
};

export default DateSelector;