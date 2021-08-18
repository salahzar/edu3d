(function () {

    // position Vec3 (Vec3.ZERO)
    // orientation Quaternion (Quaternion.IDENTITY)
    // volume Number 1.0
    // pitch 0.0625 – 16.0   1 no change in pitch min +- 2 octaves
    // loop boolean false
    // secondOffset number 0.0
    // localOnly boolean false
    // { "soundURL":"http","position": Vec3.ZERO, "volume": 1.0, "pitch": 1.0, "loop": false, "secondOffset": 0.0, "localOnly": false }
    var soundURL = null;//SoundCache.getSound(SOUND_URL);
    var lastSoundURL = null;
    var soundVolume = null;
    var soundData = null;
    var pitch = null;
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
            //receiverName = soundData.receiverName;
            soundVolume = !isNaN(soundData.soundVolume) ? Number(soundData.soundVolume) : 0.0;
            soundLoop = soundData.isLoop;
            soundLocal = soundData.isLocal;
            pitch = soundData.pitch;
        } catch (e) { }


        injector = Audio.playSound(soundURL, {
            position: properties.position,
            volume: soundVolume,
            loop: soundLoop,
            localOnly: soundLocal,
            pitch: pitch
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
