import React, { useState, useEffect } from 'react';
import GuestSelector from './GuestSelector/GuestSelector';
import DateSelecotr from './DateSelector/DateSelector';
import TimeSelector from './TimeSelector/TimeSelector';
import Reserve from './Reserve/Reserve';

function BookingForm(props) {
  const [time, setTime] = useState('00:00');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [ocassion, setOccasion] = useState('birthday');

  const [reservation, setReservation] = useState({guests: guests, date: '', time: '', ocassion: ocassion});

  const chooseTime = (time) => {
    setTime(time);

    setReservation({...reservation, time: time});
  }

  const chooseGuest = (guests) => {
    setGuests(guests);
    setReservation({...reservation, guests: guests});
  }

  const chooseDate = (date) => {
    setDate(date);
    setReservation({...reservation, date: date});

    props.dispatchTimeslotsOnDateChange(date);

  }

  const chooseOcassion = (ocassion) => {
    setOccasion(ocassion);
    setReservation({...reservation, ocassion: ocassion});
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.submitReservation(reservation);
  }


  const validateReservation = () => {
    if (reservation.time !== '' &&
        reservation.date !== '' &&
        reservation.guests !== '' &&
        reservation.ocassion !== '') {
      return true;
    }

    return false;
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <GuestSelector chooseGuest={ chooseGuest } />

        <DateSelecotr chooseDate={chooseDate} chooseOcassion={chooseOcassion} ocassion={ocassion}/>

        <TimeSelector chooseTime={ chooseTime } availableTimeSlots={props.availableTimeSlots} />

        {
          validateReservation() ? <Reserve value={0} /> : <Reserve value={1} />
        }
      </form>
    </div>
  );
};

export default BookingForm;