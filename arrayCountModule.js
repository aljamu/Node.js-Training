var arrayLenthCounter = function(array){
    return 'There are ' + array.length + ' elements in this array'
};

module.exports = arrayLenthCounter; // Muss festgelegt werden, damit das Ganze dort funktioniert, wo das Modul mit require() eingebunden wird

//console.log(arrayLenthCounter(['Cod', 'Shellfish', 'Salmon']));
//^Wird dann in app.js aufgerufen, da diese Datei als Modul eingebunden wird^