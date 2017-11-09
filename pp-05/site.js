$(document).ready(function() {

  var doorbell = new Audio('media/doorbell.mp3');

  doorbell.addEventListener('ended', function() {
    $('#ring-doorbell').removeClass('ringing');
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
