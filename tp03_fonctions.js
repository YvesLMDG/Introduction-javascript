function return33 () {
    return 33;
}
console.log(return33());

function bonjour(nom){
    if (typeof nom !== 'string'){
        throw 'Vous devez fournir un nom en paramètres';
    }
    return "Bonjour " + nom;
}

try  {
    console.log(bonjour("Marcel"));
    console.log(bonjour());
}
catch (e){
    console.log(e);
}

function calcul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw 'Vous devez fournir des nombres en paramètres';
    }

    let calcul = a * b + a + b;
    return calcul;
}

try  {
    console.log(calcul(2, 3));
    console.log(calcul(5));
    console.log(calcul());

}
catch (e){
    console.log(e);
}

function controleTableau(array){
    let onlyNumbers = array.length == 0 ? false : true;
    for (let i=0;i<array.length;i++){
        if (typeof(array[i]) !== 'number'){
            onlyNumbers = false;
            break;
        }
    }
    return onlyNumbers;
}

let array1 = [1,2,3,4];
let array2 = [1,2,'pouet',4];
let array3 = [];
console.log(controleTableau(array1));
console.log(controleTableau(array2));
console.log(controleTableau(array3));

function fonctionMoyenne(array){
    if (array.length == 0){
        return 0;
    }
    else if(!controleTableau(array)){
        throw 'Le tableau ne doit contenir que des nombres'
    }
    else{
        let sum = 0.0;
        for (let i=0;i<array.length;i++){
            sum += array[i];
        }
        return sum/array.length;
    }
}

try{
    console.log(fonctionMoyenne(array1));
} catch (e){
    console.log(e)
}
try{
    console.log(fonctionMoyenne(array2));
} catch (e){
    console.log(e)
}
try{
    console.log(fonctionMoyenne(array3));
} catch (e){
    console.log(e)
}

try{
    console.log(fonctionMoyenne("chaine"));
} catch (e){
    console.log(e)
}