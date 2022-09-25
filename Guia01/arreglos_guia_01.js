// Con metodos de string y array
let arr = [1,4,3,2];
let str = arr.reverse().join(" ");

console.log(str);

// sin metodos de string y array
let arr1 = [1,4,3,2];
let str1 = "";

for (let i=arr1.length-1; i>=0;i--) {
    str1 = str1+arr1[i]+" ";
}

console.log(str1);
console.log(arr1)