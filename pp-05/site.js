$(document).ready(function() {

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
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }
});
