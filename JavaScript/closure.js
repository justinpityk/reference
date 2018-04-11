
//Closure

//A closure is the combination of a function and the lexical environment within which that function was declared.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//Only 1 function is required for a closure, more can be involved, but only 1 is required


var abc = "a";

var basicClosure = function (param) {
    var myPrivateVar = "this is my private variable";

    return {
        myPublicVar: myPrivateVar,
        myGlobalVar: abc //stores value of abc when the function is invoked
    };
};


//Test
abc = "b";
var myBasicClosure = basicClosure(abc);
abc = "c";

var closureSection = new SectionControl({ title: 'Closure' });
closureSection.AddItem('myPublicVar', myBasicClosure.myPublicVar);      //"this is my private variable"
closureSection.AddItem('myPrivateVar', myBasicClosure.myPrivateVar);    //undefined
closureSection.AddItem('myGlobalVar', myBasicClosure.myGlobalVar);      //"b"
