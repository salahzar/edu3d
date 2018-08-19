// This works with userData
// hostname: 'name of the domain defaults to current domain',
// path: 'path inside the domain'
// 2018 CC0, written by Salahzar Stenvaag
(function () {
    
    var path = null;
    var properties = null;


    this.clickDownOnEntity = function (entityID, mouseEvent) {
        print("clicked by Salahzar");
        properties = Entities.getEntityProperties(entityID, ["position", "userData"]);
        if (!properties.userData) {
            print("Click Teleporter " + entityID + " missing user data.");
            return;
        } try {
            teleportData = JSON.parse(properties.userData);
            print("Path " + teleportData.path);
            
            if(!teleportData.hostname) {
                url = location.hostname;
            } else {
                url = teleportData.hostname;
            }
			location = "hifi://" + url + teleportData.path;
            
        } catch (e) { }
    }

    this.mousePressOnEntity = this.clickDownOnEntity;

})
