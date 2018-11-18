$(document).ready( () => {

  const timeSet = () => {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() - 12;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = $('#day');
    day.html(days[time.getDay()])

    const date = $('#date');
    date.html(time.getMonth() + 1).append('/').append(time.getDate()).append('/').append(time.getFullYear());

    const clock = $('#clock');
    clock.html(hours).append(':').append(minutes).append(':').append(seconds);
  }

  let intervalID = setInterval(timeSet, 1000);

  intervalID();

});
