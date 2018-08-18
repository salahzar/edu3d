//  changeColorOnClickDown.js
// my very first HIFI script
// every time you click on an entity it changes color. 
(function () {

  function rndByte() {
    return (Math.floor(Math.random() * Math.floor(255))).toString();
  }
  this.clickDownOnEntity = function (entityID, mouseEvent) {
    Entities.editEntity(entityID,
      { color: { red: rndByte(), green: rndByte(), blue: rndByte() } }
    );
  };
}) 
