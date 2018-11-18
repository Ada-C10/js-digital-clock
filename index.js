const action = function action(){
  const justNow = new Date(Date.now());
  const hours = justNow.getHours() < 10 ? "0" + justNow.getHours() : justNow.getHours();
  const mins = justNow.getMinutes() < 10 ? "0" + justNow.getMinutes() : justNow.getMinutes();
  const secs = justNow.getSeconds() < 10 ? "0" + justNow.getSeconds() : justNow.getSeconds();
  $('#clock').html(`<p>${hours}:${mins}:${secs}</p>`);
};

const intervalAction = window.setInterval(action, 1000);

$(document).ready(function(){
  intervalAction;

});
