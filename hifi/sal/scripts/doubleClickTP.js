"use strict";
//
//  defaultScripts.js
//  examples
//
//  Copyright 2016 WolfGang von Caron
//
//  Distributed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
//  See https://creativecommons.org/licenses/by-nc/4.0/
//
var SETTINGS_KEY = "doubleClickTPEnabled";

/// menu where to insert the function
var MENU_CATEGORY = "Navigate";
var MENU_ITEM = "Double Click TP";

var delay = 250;
var mouseTravelLimit = 3;

var clickTime = 0;
var clickPos;


/// given 2 points give the squared distance
function distSquare(posa,posb){
    var x = Math.pow(posa.x - posb.x,2);
    var y = Math.pow(posa.y - posb.y,2);
    return x + y;
}

/// given 2 points tell if the two points are more distant than dist
/// use just the squared values for simplicity
function distLessThan(posa,posb,dist){
    var sq = distSquare(posa,posb);
    
    return (sq < Math.pow(dist,2));
}

/// when mouse is released than a click has been done
/// do teleport only if double clicked
function mouseRelease(event){
    /// only if enabled to save cpu
    if(Settings.getValue(SETTINGS_KEY,true)){
	/// only if letfButton
        if(event.isLeftButton){
	    /// get current time (number of milliseconds since 1 Jan 1970)
            /// 		and difference from last time clicked which was 0 i.e. 1 Jan 1970
		
            var time = Date.now();
            var delta = time - clickTime;
		
	    /// saves the current x, y clicking position
            var pos = {x:event.x, y:event.y};
	    /// if more than 250 milliseconds than it is not a double click	
            if(delta > delay){
		/// saves position and current time
                clickTime = time;
                clickPos = pos;
	    /// else it is a double click, BUT check if mouse has traveled more than 3 pixels
            }else if(distLessThan(pos,clickPos,mouseTravelLimit)){
		/// get in which point we intersecate an entity and the normal
                var coords = getClickCoords(event);
                if(coords == null)return;
		/// ok there is an entity there so actual location is given by
		/// the actual pos plus the normal multiplied by the current distance to floor
                clickTime = 0;
                var loc = Vec3.sum(coords.pos, Vec3.multiply(coords.normal,getDistanceToFloor()));
                MyAvatar.goToLocation(loc,false);
            }
        }
    }
}


/// try to understand current avatar distance from floor
function getDistanceToFloor(){
    
    /// where is my avatar now
    var origin = MyAvatar.position;
    /// vector going down y = -1
    var direction = {x:0,y:-1,z:0};
    /// cast a ray from origin to down direction
    var ray = {origin: origin,direction:direction};
    /// find the intersection as well
    var entityResult = Entities.findRayIntersection(ray, true);
    /// if it exists determine the current distance so it will apply as well
    if(entityResult.intersects){
        return Vec3.distance(origin,entityResult.intersection);
    }
	/// otherwise use 1
    return 1;
    
}

/// emits a ray from the current camera in the direction we are watching
/// and find first entity if intersects = true than there is one
/// and then understand the Vec3 intersection point and the Vec3 normal
/// null if nothing is intersected
function getClickCoords(event){
	var ray = Camera.computePickRay(event.x, event.y);
	var result = Entities.findRayIntersection(ray, true);
    if(result.intersects){
        return {pos: result.intersection, normal: result.surfaceNormal};
    }
    return null;
}

/// when script ends
function scriptEnd(event){
    if(Menu.menuItemExists(MENU_CATEGORY,MENU_ITEM)){
        Menu.removeMenuItem(MENU_CATEGORY, MENU_ITEM);
    }
}

/// toggle the SETTINGS to disable/enable
function menuItemEvent(menuItem) {
    if (menuItem == MENU_ITEM) {
        Settings.setValue(SETTINGS_KEY,Menu.isOptionChecked(MENU_ITEM) === true ? true : false);
    }
}

/// adds menuItem with shortcutkey for enabling disabling function
function setup(){
    
    if(Menu.menuExists(MENU_CATEGORY)){
        Menu.addMenuItem({
            menuName: MENU_CATEGORY,
            menuItemName: MENU_ITEM,
            shortcutKey:   "Ctrl+Shift+D",
            isCheckable:   true,
            isChecked:     Settings.getValue(SETTINGS_KEY,true)
        });
    }
    Script.scriptEnding.connect(scriptEnd);
    Controller.mouseReleaseEvent.connect(mouseRelease);
    Menu.menuItemEvent.connect(menuItemEvent);
}


//// this is the main setup
setup();
