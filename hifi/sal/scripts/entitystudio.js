// script from menithal to learn how constructors work in HF
(function () {
    return {
        preload: function (entityId) {
            console.log("I", entityId, " am now loaded!");
        },
        clickDownOnEntity: function (entityId, event) {
            console.log("Hello, ", MyAvatar.displayName, "Your current sessionId is ", MyAvatar.sessionUUID, "You clicked on me", entityId, " I will now change color!", JSON.stringify(event));

            Entities.editEntity(entityId, {
                color: {
                    red: Math.random() * 255,
                    green: Math.random() * 255,
                    blue: Math.random() * 255
                }
            });
        }
    }
});