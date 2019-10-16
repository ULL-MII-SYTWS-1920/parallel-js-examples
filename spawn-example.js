const Parallel = require("paralleljs");

var p = new Parallel('forwards');
 
p.spawn(function (data) {
  data = data.split('').reverse().join('');
  
  console.log(data); // logs sdrawrof
  
  return data;
}).then(function (data) {
  console.log(data) // logs sdrawrof
});
