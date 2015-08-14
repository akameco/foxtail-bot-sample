var FoxTail = require('foxtail');
var fox = new FoxTail('public');

fox.add(function (res) {
  console.log("@" + res.screen_name + "(" + res.name + ") " + res.text + "\n");
});

fox.run();
