(function () {

    var soundURL = null;//SoundCache.getSound(SOUND_URL);
    var lastSoundURL = null;
    var soundVolume = null;
    var soundData = null;
    var injector = null;
    var properties = null;


    this.clickDownOnEntity = function (entityID, mouseEvent) {
        print("clicked by Salahzar");
        properties = Entities.getEntityProperties(entityID, ["position", "userData"]);
        if (!properties.userData) {
            print("Click Sound emitter " + entityID + " missing user data.");
            return;
        } try {
            soundData = JSON.parse(properties.userData);
            print("SoundURL " + soundData.soundURL);
            // need to check that all this stuff even exists and throw error if not.s
            soundURL = SoundCache.getSound(soundData.soundURL);
            receiverName = soundData.receiverName;
            soundVolume = !isNaN(soundData.soundVolume) ? Number(soundData.soundVolume) : 0.0;
            soundLoop = soundData.isLoop;
            soundLocal = soundData.isLocal;
        } catch (e) { }


        injector = Audio.playSound(soundURL, {
            position: properties.position,
            volume: soundVolume,
            loop: false,//soundLoop,
            localOnly: true//;//soundLocal
        });

    };

    this.mousePressOnEntity = this.clickDownOnEntity;

    this.unload = function () {
        if (injector) {
            injector.stop();
            injector = null;
        }
    };

});
