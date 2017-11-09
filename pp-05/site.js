$(document).ready(function() {

  $('#ring-doorbell').on('click', function() {
    ringDoorbell();
  });

  $('#doorbell').remove();

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }
});
