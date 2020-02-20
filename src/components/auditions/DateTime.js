import React from 'react';

//date and time

function DateTime() {
    const d = new Date();
    const t = document.querySelector('input').value;
    const tz = d.getTimezoneOffset() / 60;
    arr = t.split(':');
    arr[0] = arr[0] - tz;
    d.setHours(arr[0]);
    d.setMinutes(arr[1]);
    console.log(d.toISOString());

}
  
  new Date(venue.date);


export default DateTime;