// script coming from Forum
// https://forums.highfidelity.com/t/elevator-script/14460
(function () {
    this.enterEntity = function (entityID) {
        var platform5;
        var center = Vec3.sum(Vec3.sum(MyAvatar.position, {
            x: 0,
            y: -1,
            z: 0
        }), Vec3.multiply(0.5, Quat.getForward(Camera.getOrientation())));
        function init() {
            platform = Entities.addEntity({
                name: "platform5",
                type: "Shape",
                shape: "Cylinder",
                position: center,
                dimensions: { x: 3.3186, y: 0.2, z: 3.3186 },
                color: { red: 0, green: 0, blue: 0 },
                gravity: { x: 0, y: 0, z: 0 },
                visible: true,
                locked: false,
                lifetime: 50,
                velocity: { x: 0, y: 1, z: 0 },
                damping: 0,
                isDynamic: false,
                userData: JSON.stringify({
                    grabbableKey: {
                        grabbable: false
                    }
                })
            });
            if (platform5) {
                if (MyAvatar.getParentID() != platform5) {

                    MyAvatar.setParentID(platform5);
                }
            }
        }

        function update(dt) {

        }

        function shutdown() {
            if (platform5) {
                MyAvatar.setParentID(0);
                Entities.deleteEntity(platform5);
            }
        }

        Script.setTimeout(init, 80);

        Script.update.connect(update);
        Script.scriptEnding.connect(shutdown);
    }



})