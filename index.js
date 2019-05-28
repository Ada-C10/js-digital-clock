let optionsOne = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

let optionsTwo = {
  weekday: 'short',
  month: 'short',
  day: '2-digit',
  year: 'numeric'
};

const clock = function clock(location) {
  switch(location) {
    case '#taipei': {
      optionsOne.timeZone = optionsTwo.timeZone = 'Asia/Taipei';
      break;
    }
    case '#greece': {
      optionsOne.timeZone = optionsTwo.timeZone = 'Europe/Athens';
      break;
    }
    case '#calgary':{
      optionsOne.timeZone = optionsTwo.timeZone = 'America/Edmonton';
      break;
    }
    default: {
      optionsOne.timeZone = optionsTwo.timeZone = 'America/Los_Angeles';
    }
  }

  let today = new Date();

  $(location).empty();
  $(location).append('<h2>' + today.toLocaleString('en-US', optionsOne) + '</h2>');
  $(location).append('<h2>[' + today.toLocaleString('en-US', optionsTwo) + ']</h2>');
}

$( document ).ready(function() {
  setInterval(() => clock('#seattle'), 1000); // try setInterval(clock, #seattle, 1000)
  setInterval(() => clock('#taipei'), 1000);
  setInterval(() => clock("#greece"), 1000);
  setInterval(() => clock("#calgary"), 1000);

  $('#buttons').on('click', function(event) {
    const target = $('.clockDetails');
    if (event.target.innerText === "Tomato") {
      target.removeClass("white navy goldenrod");
      target.addClass('tomato');
    } else if (event.target.innerText === "Golden Rod") {
      target.removeClass("white tomato navy");
      target.addClass('goldenrod');
    } else if (event.target.innerText === "Navy") {
      target.removeClass("white tomato goldenrod");
      target.addClass('navy');
    } else if (event.target.innerText === "Original") {
      target.removeClass("tomato goldenrod navy");
      target.addClass('white');
    } else if (event.target.innerText === "left") {
      target.removeClass("right center");
      target.addClass('left');
    } else if (event.target.innerText === "right") {
      target.removeClass("left center");
      target.addClass('right');
    } else if (event.target.innerText === "center") {
      target.removeClass("left right");
      target.addClass('center');
    } else if (event.target.innerText === "Allerta") {
      target.removeClass("copse crimson");
      target.addClass('allerta');
    } else if (event.target.innerText === "Copse") {
      target.removeClass("allerta crimson");
      target.addClass('copse');
    } else if (event.target.innerText === "Crimson") {
      target.removeClass("allerta copse");
      target.addClass('crimson');
    }
  });
});
