// Your code here

$(document).ready(() => {
  setInterval(function() {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let position = "AM";

    if(hour == 0){
      hour = 12;
    }

    if(hour > 12){
      hour = hour - 12;
      position = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + minute + ":" + second + " " + position;
    $("#clock").html(time);

  }, 1000);
});
