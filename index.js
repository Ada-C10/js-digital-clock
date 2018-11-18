// Your code here


$(document).ready(() => {
  window.setInterval(getCurrentTime, 1000);
});

const getCurrentTime = () => {
  const now = new Date();
  const nowDay = `It's ${days[now.getDay()]}`;
  const nowDate = `${now.getMonth()}-${now.getDate()}-${now.getFullYear()}`;
  let nowHour = now.getUTCHours()-8;
  if (nowHour < 0) {
    nowHour += 24;
  }
  const nowTime = `${nowHour}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;
  $('#clock').html( $('<h5>' + nowDay + '</h5><h6>' + nowDate + ' ' + nowTime + '</h6>'));
};

const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: `Fri-yay!`,
  6: 'Saturday'
}
