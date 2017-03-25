var values = {x : 1, y : 2, z : 3};
for (var key of Object.keys(values)) {
    if (key  == 'x') {
        values[key] =  values[key] + values[key];    
    } else if  (key  == 'y') {
        values[key] =  values[key] + values[key] + values[key];
    }
}
console.log(values);

var valuesArray =  [ { x: 1, y: 2 }, { y: 4, b: 21 } ];
valuesArray.map(function(keyitem) {
 for (var key of Object.keys(keyitem)) {
    if (key  == 'x') {
        keyitem[key] =  keyitem[key] +keyitem[key];    
    } else if  (key  == 'y') {
        keyitem[key] =  keyitem[key] + keyitem[key] + keyitem[key];
    }
 }
});
console.log(valuesArray);
