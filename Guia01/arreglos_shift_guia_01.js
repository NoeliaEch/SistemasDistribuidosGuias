
let shiftArrayV1 = (arr, N) => {
    let str ="";
    for (let i=0; i<arr.length;i++) {

        if (N>=arr.length) {
            // verifico cuantas veces mas grande es N a la longitud del array
            let nro_giros = Math.floor(N / arr.length);
            N = N - arr.length*nro_giros;
        }
        

        if (i>=(arr.length-N)) {
            str = str+arr[i-(arr.length-N)]+" ";
        } else {
            str = str + arr[i+N]+" ";
        }        
    }
    return str;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let N = 15;
let str = shiftArrayV1(arr,N);
console.log(arr);
console.log(str);

let shiftArrayV2 = (arr, N) => {

    let arr2;
    // creo una copia del array original para no modificarlo
    let arr_cpy = [...arr]; 

    if (N>=arr_cpy.length) {
        // verifico cuantas veces mas grande es N a la longitud del array
        let nro_giros = Math.floor(N / arr_cpy.length);
        N = N - arr_cpy.length*nro_giros;
    }

    arr2 = arr_cpy.splice(0,N);
    arr_cpy = arr_cpy.concat(arr2);

    return arr_cpy.join(" ");
    

}

console.log("--------------------------------------------------");

let str2 = shiftArrayV2(arr,N);
console.log(arr);
console.log(str);