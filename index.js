let optionsOne = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
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
  setInterval(() => clock('#seattle'), 1000);
  setInterval(() => clock('#taipei'), 1000);
  setInterval(() => clock("#greece"), 1000);
  setInterval(() => clock("#calgary"), 1000);

  $('#btnOne').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("white navy goldenrod");
    target.toggleClass('tomato');
  });

  $('#btnTwo').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("white tomato navy");
    target.toggleClass('goldenrod');
  });

  $('#btnThree').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("white tomato goldenrod");
    target.toggleClass('navy');
  });

  $('#btnFour').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("tomato goldenrod navy");
    target.toggleClass('white');
  });

  $('#btnLeft').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("right center");
    target.toggleClass('left');
  });

  $('#btnRight').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("left center");
    target.toggleClass('right');
  });

  $('#btnCenter').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("left right");
    target.toggleClass('center');
  });

  $('#btnAllerta').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("copse crimson");
    target.toggleClass('allerta');
  });

  $('#btnCopse').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("allerta crimson");
    target.toggleClass('copse');
  });

  $('#btnCrimson').on('click', function() {
    const target = $('.clockDetails');
    target.removeClass("allerta copse");
    target.toggleClass('crimson');
  });
})
