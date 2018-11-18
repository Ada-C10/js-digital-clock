$(document).ready( () => {

  const timeSet = () => {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() - 12;

    let target = $('#clock');
    target.html(hours).append(':').append(minutes).append(':').append(seconds);
  }

  let intervalID = setInterval(timeSet, 1000);

  intervalID();

});
