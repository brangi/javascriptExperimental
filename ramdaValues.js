const R = require('ramda');


//Ramda ex 1
var valuesOrig = {x : 1, y : 2, z : 3};
var changeValues = R.cond([
            [function(key, _) { return key === 'x'; } , function (){ return arguments[1] + arguments[1];}],
            [function(key, _) { return key === 'y'; }, function (){ return arguments[1] + arguments[1] + arguments[1];}],
            [function(key, _) { return key === 'z'; }, function (){ return arguments[1];}],
            [function(key, _) { return key === 'b'; }, function (){ return arguments[1];}] 
            ]);

var findValuesAndChange = (num, key, obj) => changeValues(key, num);
var values = R.mapObjIndexed(findValuesAndChange, valuesOrig);
console.log(values);



//Ramda ex 2
var changeValuesFunc1 = function(obj) {
    var obj2 = {  'x' : changeValues(Object.keys(obj)[0], obj[Object.keys(obj)[0]]),  
        'y' : changeValues(Object.keys(obj)[1], obj[Object.keys(obj)[1]])
    };
    return obj2;
};

var changeValuesFunc2 = function(obj) {
    var obj2 = {  'y' : changeValues(Object.keys(obj)[0], obj[Object.keys(obj)[0]]),  
        'b' : changeValues(Object.keys(obj)[1], obj[Object.keys(obj)[1]])
    };
    return obj2;
};

var valuesArrOrig = [ { x: 1, y: 2 }, { y: 4, b: 21 } ];
changeValuesOfObject =  R.cond([
            [ function(obj) { return Object.keys(obj)[0]  === 'x' ; }, function (){ return changeValuesFunc1(arguments[0]); }],
            [ function(obj) { return Object.keys(obj)[1]  === 'b' ; }, function (){ return changeValuesFunc2(arguments[0]); }]
        ]);


var changeEachObject = x => changeValuesOfObject(x);
var changedObjectsArrValues  = R.map(changeEachObject, valuesArrOrig);
console.log(changedObjectsArrValues);

