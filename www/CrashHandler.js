var exec = require('cordova/exec');

function CoolPlugin() {
  console.log("CrashHandler.js: is created");
}

CoolPlugin.prototype.showToast = function (aString) {
  console.log("CrashHandler.js: showToast");

  exec(function (result) {
    /*alert("OK" + reply);*/
  },
    function (result) {
      /*alert("Error" + reply);*/
    }, "CrashHandler", aString, []);
}

var crashHandler = new CrashHandler();
module.exports = crashHandler;