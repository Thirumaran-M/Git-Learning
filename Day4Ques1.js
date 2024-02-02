/*Question 1*/
console.log("\nDay 4 => Question 1\n*******************\n");

//Do the below programs in anonymous function & IIFE

var Arr = [1,2,3,4,5,6,7,8];
var DupArr = [1,2,3,4,4,1,5,8];
var Data = "Convert all the strings to title caps in a string array";

//IIFE: Print odd numbers in an array
(function(args){
	var Result = [];
	for(var i = 0; i < args.length;i++){
		if(args[i] % 2 == 1){
			Result.push(args[i]);
		}
	}
	Result.join(" ");
	console.log("IIFE => Odd Function: " + Result);
})(Arr);

//Anonymous: Print odd numbers in an array
var Odd = function(args){
	var Result = [];
	for(var i = 0; i < args.length;i++){
		if(args[i] % 2 == 1){
			Result.push(args[i]);
		}
	}
	Result.join(" ");
	console.log("Anon => Odd Function: " + Result);
}
Odd(Arr);

//IIFE: Sum of all numbers in an array
(function Sum(args){
	var Result = 0;
	for(var i = 0; i < args.length;i++){
		Result+=args[i];
	}
	console.log("IIFE => Sum of Array Function: " + Result);
})([12,13,14]);

//Anon: Sum of all numbers in an array
var Sum = function (args){
	var Result = 0;
	for(var i = 0; i < args.length;i++){
		Result+=args[i];
	}
	console.log("Anon => Sum of Array Function: " + Result);
}
Sum([12,13,14]);

//IIFE: Convert all the strings to title caps in a string array
(function (str) {
	var Result = str.toLowerCase().split(' ').map(function(word) {
		return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
	console.log("IIFE => Title Case Function: " +Result);
})(Data);

//Anon: Convert all the strings to title caps in a string array
var titleCase = function (str) {
	var Result = str.toLowerCase().split(' ').map(function(word) {
		return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
	console.log("Anon => Title Case Function: " +Result);
}
titleCase(Data);

//IIFE: Return all the palindromes in an array
(function (args){
	var Result = 0;
	for(var i = 0; i < args.length;i++){
		var reverseString = args[i].split("");
		var reverseStr = reverseString.reverse().join("");
		var Result = (reverseStr == args[i])? "True" : "False";
		console.log("IIFE => Palindrome is : " + Result + " => " + args[i] );
	}
})(["madam","array"]);

//Anon: Return all the palindromes in an array
var Palindrome = function (args){
	var Result = 0;
	for(var i = 0; i < args.length;i++){
		var reverseString = args[i].split("");
		var reverseStr = reverseString.reverse().join("");
		var Result = (reverseStr == args[i])? "True" : "False";
		console.log("Anon => Palindrome is : " + Result + " => " + args[i] );
	}
}
Palindrome(["madam","array"]);

//IIFE: Remove duplicates from an array
(function (args){
	var Result = [];
	for(var i = 0; i < args.length;i++){
		if(!Result.includes(args[i])){
			Result.push(args[i]);
		}
	}
	console.log("IIFE => Duplicate Removed Array: " + Result.join(" "));
})(DupArr);


//Anon: Remove duplicates from an array
var DuplicateArray = function (args){
	var Result = [];
	for(var i = 0; i < args.length;i++){
		if(!Result.includes(args[i])){
			Result.push(args[i]);
		}
	}
	console.log("Anon => Duplicate Removed Array: " + Result.join(" "));
}
DuplicateArray(DupArr);

//IIFE: Return median of two sorted arrays of the same size.
var arr1 = [1, 12, 15, 26, 38];
var arr2 = [2, 13, 17, 30, 45];
var n1 = arr1.length;
var n2 = arr2.length;
if(n1 == n2){
	(function (args){
		args.sort((a,b)=>{
			return a-b;
		});
		var slice = (args.length/2)-1;
		var slice1 = (args.length/2);
		var Result = (args[slice]+args[slice1]);
		console.log("IIFE => Median: " + Result/2);
	})(arr1.concat(arr2));
}else{
	console.log("IIFE => Median Arrays are in unequal size");
}

//Return median of two sorted arrays of the same size.
var Median = function (args){
	args.sort((a,b)=>{
		return a-b;
	});
	var slice = (args.length/2)-1;
	var slice1 = (args.length/2);
	var Result = (args[slice]+args[slice1]);
	console.log("Anon => Median: " + Result/2);
}
var arr1 = [1, 12, 15, 26, 38];
var arr2 = [2, 13, 17, 30, 45];
var n1 = arr1.length;
var n2 = arr2.length;
if(n1 == n2){
	Median(arr1.concat(arr2));
}else{
	console.log("Anon => Median: Arrays are in unequal size");
}


//IIFE: Rotate an array by k times
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 107, 113];

(function (args,k){
	var Result = [];
	var n = args.length;
	for (var i = 0; i < n; i++) {
		if(i < k){
			Result.push(args[n + i - k]);
		}else{
			Result.push(args[i - k]);
		}
	}
	console.log("IIFE => Rotate Function: " + Result.join(" "));
})(numArray,3);

//Rotate an array by k times
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 107, 113];

var Rotate = function (args,k){
	var Result = [];
	var n = args.length;
	for (var i = 0; i < n; i++) {
		if(i < k){
			Result.push(args[n + i - k]);
		}else{
			Result.push(args[i - k]);
		}
	}
	console.log("Anon => Rotate Function: " + Result.join(" "));
}
Rotate(numArray,3);


//IIFE: Return all the prime numbers in an array

(function (args){
	var Result = args.filter((number) => {
 //   for (var i = 2; i <= Math.sqrt(number); i++) {
		for (var i = 2; i <= number/2; i++) {

			if (number % i === 0) return false;
		}
		return true;
	});

	console.log("IIFE => Prime Function: " + Result.join(" "));
})(numArray);

//Anon: Return all the prime numbers in an array
var Prime = function (args){
	var Result = args.filter((number) => {
 //   for (var i = 2; i <= Math.sqrt(number); i++) {
		for (var i = 2; i <= number/2; i++) {

			if (number % i === 0) return false;
		}
		return true;
	});

	console.log("Anon => Prime Function: " + Result.join(" "));
}
Prime(numArray);

/*Question 2*/

console.log("\nDay 4 => Question 2\n*******************\n");

//Arrow: Print odd numbers in an array
var Odd = (args) => {
	var Result = [];
	for(var i = 0; i < args.length;i++){
		if(args[i] % 2 == 1){
			Result.push(args[i]);
		}
	}
	Result.join(" ");
	console.log("Arrow => Odd Function: " + Result);
}
Odd(Arr);

//Arrow: Convert all the strings to title caps in a string array
var titleCase = (str) => {
	var Result = str.toLowerCase().split(' ').map(function(word) {
		return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
	console.log("Arrow => Title Case Function: " +Result);
}
titleCase(Data);

//Sum of all numbers in an array
var Sum = (args) => {
	var Result = 0;
	for(var i = 0; i < args.length;i++){
		Result+=args[i];
	}
	console.log("Arrow => Sum of Array: " + Result);
}
Sum([12,13,14]);

//Arrow: Return all the prime numbers in an array

var Prime = (args) => {
	var Result = args.filter((number) => {
 //   for (var i = 2; i <= Math.sqrt(number); i++) {
		for (var i = 2; i <= number/2; i++) {

			if (number % i === 0) return false;
		}
		return true;
	});

	console.log("Arrow => Prime Function: " + Result.join(" "));
}
Prime(numArray);


//Arrow: Return all the palindromes in an array
var Palindrome = (args) => {
	var Result = 0;
	for(var i = 0; i < args.length;i++){
		var reverseString = args[i].split("");
		var reverseStr = reverseString.reverse().join("");
		var Result = (reverseStr == args[i])? "True" : "False";
		console.log("Arrow => Palindrome is : " + Result + " => " + args[i] );
	}
}
Palindrome(["madam","array"]);