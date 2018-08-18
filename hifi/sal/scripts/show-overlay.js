
(function () {

    this.clickDownOnEntity = function (entityID, mouseEvent) {
        var userData = JSON.parse(Entities.getEntityProperties(entityID, ["position", "userData"]).userData);
        // userdata extraction
        var text = userData.text;
        var url = userData.url;

        //
        Window.alert(text.join("\n"));
        Window.openUrl(url);
    }

});
