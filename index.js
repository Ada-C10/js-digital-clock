const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const month = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]

const hours = function hours(today) {
  return (today.getHours()<10?'0':'') + today.getHours();
}

const minutes = function minutes(today) {
  return (today.getMinutes()<10?'0':'') + today.getMinutes();
}

const seconds = function seconds(today) {
  return (today.getSeconds()<10?'0':'') + today.getSeconds();
}

const dayDetails = function dayDetails(today) {
  $('#clock').append('<p>[' + week[today.getDay() - 1] + "]" + '</p>');
  $('#clock').append('<p>' + month[today.getMonth() + 1] + " " + today.getDate() + ", " + today.getFullYear() + '</p>');
}

const clock = function clock() {
  const today = new Date();
  $('#clock').empty();
  $('#clock').append('<h1>' + hours(today) + ":" + minutes(today) + ":" + seconds(today) + '</h1>');
  $('#clock').append(dayDetails(today));
}

$( document ).ready(function() {
  setInterval(() => clock(), 1000);
})
