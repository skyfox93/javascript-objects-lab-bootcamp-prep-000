function updateObjectWithKeyAndValue(object,key,value){ return  Object.assign({},object,{[key]:value});}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){ Object.assign(object,{[key]: value}); return object;}
var recipes={};
function deleteFromObjectByKey(key,object){var copy=Object.assign({}, object);delete copy[key];}
function destructivelyDeleteFromObjectByKey(key,object){delete object[key];}