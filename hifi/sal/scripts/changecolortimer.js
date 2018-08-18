//  changeColorOnClickDown.js
// My second HF script it uses a timer to rapidly change color every 1/100 seconds
// Enabled/disabled when clicked. Note only the first avatar clicking
// is able to disable it since enabled is local to the pc
(function () {

  function rndByte() {
    return (Math.floor(Math.random() * Math.floor(255))).toString();
  }
  var enabled = false;
  var entity;
  var timer;

  this.clickDownOnEntity = function (entityID, mouseEvent) {
    if (enabled) {
      enabled = false;
      Script.clearInterval(timer);
    } else {
      enabled = true;
      entity = entityID;
      timer = Script.setInterval(function () {
        Entities.editEntity(entityID,
          { color: { red: rndByte(), green: rndByte(), blue: rndByte() } }
        );
      }, 10);

    }

  }
})
