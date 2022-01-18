let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

console.log("Entiers supérieurs à 3 :");
for(let i = 0; i<array.length; i++){
    if (array[i]>3){
        console.log(array[i]);
    }
}

console.log("\nEntiers pairs :");
for(i = 0; i<array.length; i++){
    if (0 == array[i]%2){
        console.log(array[i]);
    }
}