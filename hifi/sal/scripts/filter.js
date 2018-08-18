function filter(properties, type, originalProperties, zoneProperties) {    

    var nearZero = 0.0001 * Math.random() + 0.001;

    /* Clamp position changes to bounding box of zone.*/
    function clamp(val) {
        var min= 0.5;
        var max= 10;
        /* Random near-zero value used as "zero" to prevent two sequential updates from being
        exactly the same (which would cause them to be ignored) */
        if (val > max) {
            val = max - nearZero;
        } else if (val < min) {
            val = min + nearZero;
        }
        return val;
    }

    if (properties.dimensions) {
        properties.dimensions.x = clamp(properties.dimensions.x);
        properties.dimensions.y = clamp(properties.dimensions.y);
        properties.dimensions.z = clamp(properties.dimensions.z);
    }
    console.log( JSON.stringify(properties) );

    return properties;
}

filter.wantsOriginalProperties = true;
filter.wantsZoneProperties = true;
filter;