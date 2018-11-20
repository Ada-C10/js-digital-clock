const setupButtons = () => {
  $('button').click(function() {
    const colorClass = $(this).html();
    console.log(`You clicked on the ${colorClass} button`);
    $('#clock').removeClass();
    $('#clock').addClass(colorClass);
  })
}

$(document).ready( () => {

  const timeSet = () => {
    const time = new Date(Date.now());
    const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = $('#day');
    day.html(days[time.getDay()])

    const date = $('#date');
    date.html(time.getMonth() + 1).append('/').append(time.getDate()).append('/').append(time.getFullYear());

    const clock = $('#clock');
    // clock.html(hours).append(':').append(minutes).append(':').append(seconds);
    clock.html(`
      <p>${hours}:${minutes}:${seconds}</p>
      `);
  }

  // let intervalID = setInterval(timeSet, 1000);
  //
  // intervalID;

  window.setInterval(timeSet, 1000);
  setupButtons();

});
