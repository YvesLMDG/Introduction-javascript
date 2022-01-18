let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array1 = [];
for (i=0;i<array.length;i++){
    if(array[i]>=0){
        array1.push(array[i]);
    }
}
array = array1;
console.log(array);