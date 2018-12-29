// basta che mettiate l'indirizzo (Navigation, Copy Address to Clipboard) dentro le properties 
// p.es. hifi://librovivo/1033.29,741.358,-245.998/0,-0.540938,0,0.841063
// 2018 CC0, written by Salahzar Stenvaag
(function () {
    
    this.clickDownOnEntity = function (entityID, mouseEvent) {
      try {
            location = Entities.getEntityProperties(entityID, ["position", "userData"]);           
          } catch (e) { 
            print ("Error: "+e);
          }
      }

    this.mousePressOnEntity = this.clickDownOnEntity;

})
