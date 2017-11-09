$(document).ready(function() {
  $('#doorbell').remove();

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }
});
