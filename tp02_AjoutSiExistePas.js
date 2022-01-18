let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];
for(i=0;i<array1.length;i++){
    let num = array1[i];
    let isInArray2 = false;
    for (j=0;j<array2.length; j++){
        if (num == array2[j]){
            isInArray2 = true;
        }
    }
    if (!isInArray2){
        array2.push(num);
    }
}
console.log(array2);