const action = function action(){
  console.log("Boop");
};

const thingy = window.setInterval(action, 1000);

$(document).ready(function(){
  thingy;
  $('#clock').append("12:00");
});
