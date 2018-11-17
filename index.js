const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const month = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]

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
})
