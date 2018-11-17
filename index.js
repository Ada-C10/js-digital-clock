const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];


$(document).ready(function() {
  let currentTime = function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let day = date.getDate();
    let dayName = daysOfWeek[date.getDay()];
    let monthName = monthNames[date.getMonth()];
    let year = date.getFullYear();
    let dayNight = 'AM'

    if (min < 10) {
      min = '0' + min
    }

    if (hour > 12) {
      hour = Number(hour) - 12
      dayNight = 'PM'
    }

    let fullTime =
      $(`<h4>${hour}:${min} ${dayNight}</h4>
      <h6>${dayName} ${monthName} ${day}, ${year}</h6>`)
    let otherCountries =
      $(`<div><h6>Jakarta</h6>
      <h6>${date.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}</h6></div>
      <div><h6>London</h6>
      <h6>${date.toLocaleString('en-US', { timeZone: 'Europe/London' })}</h6></div>
      <div><h6>Sydney</h6>
      <h6>${date.toLocaleString('en-US', { timeZone: 'Australia/Sydney' })}</h6></div>`)

    $('#clock').empty().append(fullTime);
    $('#timezones').empty().append(otherCountries)
  };

  // $('#clock').append(currentTime())
  setInterval(currentTime, 1000);
});
