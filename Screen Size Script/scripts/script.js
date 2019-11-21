/**
 * (c) Julien Henrotte
 * @julien_he https://github.com/JulienHe
 * Share love - Not War
 */

// How to load in modules
const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Time = require('Time');

// Get the information from Spark AR
const screenWidth = Patches.getScalarValue('screenWidth');
const screenHeight = Patches.getScalarValue('screenHeight');
const screenScale = Patches.getScalarValue('screenScale');

// Init variable to be used later on if needed
let screenSizeWidth, screenSizeHeight, screenScaleValue;

/** 
 * Init the Width / Height / Scale of the device.
 **/
function setDeviceSize() {
  screenSizeWidth = screenWidth.pinLastValue();
  screenSizeHeight = screenHeight.pinLastValue();
  screenScaleValue = screenScale.pinLastValue();

  Diagnostics.log(screenSizeWidth);
  Diagnostics.log(screenSizeHeight);
  Diagnostics.log(screenScaleValue);
}
const timeoutTimer = Time.setTimeout(setDeviceSize, 10);
