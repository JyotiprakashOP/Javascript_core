//*****************reverse array with method**********************

// const arr = [2, 6, 4, 8, 3, 10, 54];

// const arr1 = arr.reverse();
// console.log(arr1);

//****************reverse array without method********************

// function reverseArr(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     start++;
//     end--;
//   }
//   return arr;
// }
// const arr = [2, 6, 4, 8, 3, 10, 54];
// console.log(reverseArr(arr));

// ******************string to UpperCase***************************

// let arr = ["pranjal", "borole"];

// function toUpperCase(arr) {
//   return arr.map((i) => i.toUpperCase());
// }

// console.log(toUpperCase(arr));

// ******************string to LowerCase***************************

// const arr = ["PRANJAL", "BOROLE", "PUNE"];

// function toLowerCase(arg) {
//   return arg.map((i) => i.toLowerCase());
// }
// console.log(toLowerCase(arr));


// ******************find largest number in array with method***************************

// const arr = [2, 3, 6, 11, 54, 22, 87, 32];

// const max = Math.max(...arr);
// console.log(max);

// ******************find largest number in array without method***************************

// const arr = [2, 3, 6, 11, 54, 22, 87, 32];

// function LargetNumber(arg) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(LargetNumber(arr));


//************** sort an array ***************************

// *******ascending order*******

// const arr = [2, 3, 6, 11, 54, 22, 87, 32];

// arr.sort((a, b) => a - b);
// console.log(arr);

// *********descending order********

// const arr = [2, 3, 6, 11, 54, 22, 87, 32];

// arr.sort((a, b) => b - a);
// console.log(arr);

// ********sort array string*******

// const arr = ["banana", "watermellon", "apple", "grapes"];

// arr.sort();

// console.log(arr);

// ******sort array string case sensetive*****

// const arr = ["Pranjal", "borole", "Mumbai", "Bengaluru"];

// arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// console.log(arr);

// **********access first and last element of an array ****************

// const arr = [2, 3, 6, 11, 54, 22, 87, 32];

// console.log(arr[0]); //first element
// console.log(arr[arr.length - 1]); //last element

//**************check if element is exist in an array */

// const arr = [2, 3, 6, 11, 54, 22, 87, 32];

// let num = 11;
// function findElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (num == arr[i]) {
//       console.log("element exist", arr[i]);
//       break;
//     }
//   }
// }

// findElement(arr);

// *************remove specific element from an array *************

// const arr = [2, 3, 6, 11, 54, 22, 87, 32];

// arr.splice(4, 1);
// console.log(arr);

// ********find min number from an array using method******************

// const arr = [26, 11, 54, 22, 87, 32];

// const arr1 = Math.min(...arr);
// console.log(arr1);

// ********find min number from an array without method******************

// const arr = [26, 11, 54, 22, 87, 32];

// function FindMinNum(arr) {
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) min = arr[i];
//   }
//   return min;
// }

// console.log(FindMinNum(arr));

//*************write a program to print a to z*****************

// function printLetter() {
//   for (let i = 65; i < 90; i++)
//     console.table(String.fromCharCode(i).toLowerCase());
// }
// printLetter();

// *********** write a javascript code and print english alphabet without using external library and pre-defined array of character using js********

// function PrintLetter() {
//   for (let i = 65; i < 90; i++) {                //uppercase
//     console.log(String.fromCharCode(i));
//   }

//   for (let i = 97; i < 122; i++) {               //lowercase
//     console.log(String.fromCharCode(i));
//   }
// }
// PrintLetter();

//**********write api call and display in table format ****************/

// fetch("https://dummyapi.online/api/movies")
//   .then((res) => res.json())
//   .then(console.table);

//**********example of map array method*****************

// const arr = [26, 11, 54, 22, 87, 32];
// const arr1 = arr.map((i) => i * 2);
// console.log(arr1);

// *********example of reduce array method************

// const arr = [26, 11, 54, 22, 87, 32];
// const arr1 = arr.reduce((acc, i) => acc + i);
// console.log(arr1);

// *********example of filter array method************

// const arr = [26, 11, 54, 22, 87, 32];
// let evenNo = arr.filter((i) => i % 2 == 0);
// console.log(evenNo);

//***********second largest number in array**********/

// const arr = [26, 11, 54, 22, 87, 32];

// function secondHighest(arr) {
//   let largest = Infinity;
//   let secondLargest = -Infinity;

//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num < largest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest;
// }

// console.log(secondHighest(arr));

// **********fibonacci series********

function fibonacci(num) {
  let a = 0;
  let b = 1;
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
  return result;
}

console.log(fibonacci(10));
