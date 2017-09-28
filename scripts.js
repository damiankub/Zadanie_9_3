var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
// Duze litery
var dinosaurUpperCased = dinosaur.toUpperCase();
// Podmiana nazwy
var dinosaurCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
// Polowa tekstu
var textHalf = dinosaurCharsAfter.slice(0,dinosaurCharsAfter.length/2);
console.log(textHalf);
