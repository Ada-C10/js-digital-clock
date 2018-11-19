$(document).ready(() => {

  const clockElement = $('#clock');

  const updateClock = () => {
    const justNow = new Date(Date.now());

    const hours = justNow.getHours() < 10 ? "0" + justNow.getHours() : justNow.getHours();
    const mins = justNow.getMinutes() < 10 ? "0" + justNow.getMinutes() : justNow.getMinutes();
    const secs = justNow.getSeconds() < 10 ? "0" + justNow.getSeconds() : justNow.getSeconds();

    clockElement.html(`
      <p>${justNow.toDateString()}</p>
      <p>${hours}:${mins}:${secs}</p>
    `);
  };

  window.setInterval(updateClock, 1000);
});
