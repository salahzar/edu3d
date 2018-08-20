//
// notepad.js
// A script to let users take notes!
//
// Version: 1
//
// Author: Fluffy Jenkins
// Copyright High Fidelity 2018
//

var appUUID = Uuid.generate();

var ROOT = "http://mpassets.highfidelity.com/3347b432-32b6-4452-af37-4b8ac8d70e1e-v1/";
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
var icon = ROOT + "notepad.svg";
var appHTML = ROOT + "notepad.html";
var button = tablet.addButton({
    icon: icon,
    text: "NOTEPAD"
});

print(appHTML);

var LOAD_TIMEOUT = 100;

var NUM_TABS = 6;

var currentTab = Settings.getValue("NotePadStore/currTab", "Tab1");

var isOpen = false;

function onClicked() {
    if (isOpen) {
        tablet.gotoHomeScreen();
    } else {
        tablet.gotoWebScreen(appHTML + "?currTab=" + currentTab + "&appUUID=" + appUUID, {});
    }
}

function onScreenChanged(type, url) {
    isOpen = (url === appHTML);
    if (isOpen) {
        //
    }
}

button.clicked.connect(onClicked);
tablet.screenChanged.connect(onScreenChanged);

function init() {
    try {
        tablet.webEventReceived.connect(onWebEventReceived);
    } catch (e) {
        print("connectWebHandler: error connecting: " + e);
    }
}

function onWebEventReceived(event) {
    event = JSON.parse(event);
    if (event.type === "ready") {
        Script.setTimeout(function () {
            for (var i = 1; i <= NUM_TABS; i++) {
                tablet.emitScriptEvent(JSON.stringify({
                    appUUID: appUUID,
                    type: "GET",
                    tab: "Tab" + i,
                    data: Settings.getValue("NotePadStore/Tab" + i)
                }));
            }
        }, LOAD_TIMEOUT);
    }
    if (event.type === "STORE") {
        Settings.setValue("NotePadStore/" + event.tab, event.data);
    }
    if (event.type === "TAB") {
        currentTab = event.currTab;
        Settings.setValue("NotePadStore/currTab", event.currTab);
    }
}

function shutdown() {
    try {
        tablet.webEventReceived.disconnect(onWebEventReceived);
    } catch (e) {
        print("disconnectWebHandler: error disconnecting web handler: " + e);
        return;
    }
    button.clicked.disconnect(onClicked);
    tablet.screenChanged.disconnect(onScreenChanged);
    tablet.removeButton(button);
}

init();

Script.scriptEnding.connect(function () {
    shutdown();
});
