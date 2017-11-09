$(document).ready(function() {

  var doorBellRinging = false;
  var doorbell = new Audio('media/doorbell.mp3');

  doorbell.addEventListener('ended', function() {
    doorBellRinging = false;
    $('#ring-doorbell').removeClass('ringing');
  });

  doorbell.addEventListener('started', function() {
    doorBellRinging = false;
  });

  $('#ring-doorbell').on('click', function() {
    ringDoorbell();
  });

  $('#doorbell').remove();

  $(document).on('keypress', function(e) {
    if (e.key === "d") {
      ringDoorbell();
    }
  });

  function ringDoorbell() {
    doorbell.play();
    $('#ring-doorbell').addClass('ringing');
  }
});
