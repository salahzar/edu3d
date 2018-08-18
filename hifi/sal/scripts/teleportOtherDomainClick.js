(function () {
    var properties = null;
    this.clickDownOnEntity = function (entityID, mouseEvent) {
        print("clicked by Salahzar");
        properties = Entities.getEntityProperties(entityID, ["position", "userData"]);
        if (!properties.userData) {
            print("Click Teleporter " + entityID + " missing user data.");
            return;
        } try {
            teleportData = JSON.parse(properties.userData);
            print("path: " + teleportData.path);
            print("hostname: ") + teleportData.hostname;
			location = "hifi://" + teleportData.hostname + teleportData.path;
        } catch (e) { }
    }
})