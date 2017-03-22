// Write a function that will return the count of distinct 
// case-insensitive alphabetic characters and numeric 
// digits that occur more than once in the input string. 
// The input string can be assumed to contain only 
// alphanumeric characters, including digits, uppercase 
// and lowercase alphabets.
// // 


// take first letter
// see if there is a match in rest of code
// if there is add a count of one
// find any other of that letter and cut it out of string
// find next letter
// do the same 


// function duplicateCount(text){


// }

// "use strict"

// let word = 'apppggllhhppssxe';
// let splittedWordArray = word.split('');
// let filteredArray = splittedWordArray;
// let duplicateCount = 0;
// let currentLetter = '';
// let afterLetters = [];


// i keeps on counting up, even if the length changes
// so we need to reset i each time; 


// for (let i = 0; i <= filteredArray.length; i++){


// // looks for the matches
// 	if (i===0){
// 		currentLetter = splittedWordArray[0]; // loop through splittedWordArray array first
// 		afterLetters = splittedWordArray.indexOf(currentLetter, 1);
// 	} else {
// 		currentLetter = filteredArray[0];
// 		afterLetters = filteredArray.indexOf(currentLetter, 1);
// 	}
	
// 	// if you don't find no duplicates, return a number 
// 	// then add duplicate count 
// 	if (afterLetters === -1){ 	
// 		console.log('no duplicate')
// 	} else {
// 		duplicateCount += 1;
// 		console.log('duplicate found')
// 	}

// 	// 1 loop should match spliitedWordArray inital
// 	// 2nd loop and after should match filteredArray for the rest of letters

// 	if (i===0) {
// 		console.log('true');
		
// 		// returns everything but the currentLetters
// 		filteredArray = splittedWordArray.filter(function(element){
// 			return element !== currentLetter;
// 		});
// 		console.log(filteredArray);

// 	} else {
// 		// returns everything but the currentLetters
// 		filteredArray = filteredArray.filter(function(element){
// 			return element !== currentLetter;
// 		});

// 		console.log(filteredArray);
// 		console.log(i);
// 	}

// 	// rest i so it can loop through the new filteredArray 
// 	// everytime it is created 
// 	i = 0; 
// }

// console.log(duplicateCount);


// Things learned
// that i keeps counting regardless of the length
// we need to reset i if the length keeps on changing


// =====


"use strict";
let word = 'apppggllhhppssxenn';
let splittedWordArray = word.split('');
let filteredArray = splittedWordArray;
let duplicateCount = 0;
let currentLetter = '';
let afterLetters = [];


// i keeps on counting up, even if the length changes
// so we need to reset i each time; 


for (let i = 0; i <= filteredArray.length; i++){

	console.log(filteredArray.length);
	console.log(i); // why does this not console log 0? but console logs 1?

	// i = 0;

	// looks for the matches
	if (i===0){

		console.log(i);
		currentLetter = splittedWordArray[0]; // loop through splittedWordArray array first
		afterLetters = splittedWordArray.indexOf(currentLetter, 1);

	} else {
		currentLetter = filteredArray[0];
		afterLetters = filteredArray.indexOf(currentLetter, 1);
	}
	
	// if you don't find duplicates, return a number 
	// then add duplicate count 
	if (afterLetters === -1){ 	
		console.log('no duplicate')
	} else {
		duplicateCount += 1;
		console.log('duplicate found')
	}



	// 1 loop should match spliitedWordArray inital
	// 2nd loop and after should match filteredArray for the rest of letters

	if (i===0) {
		
		console.log(i);
		// returns everything but the currentLetters
		filteredArray = splittedWordArray.filter(function(element){
			return element !== currentLetter;
		});

		console.log(filteredArray)

	} else {

		console.log(i);
		// returns everything but the currentLetters
		filteredArray = filteredArray.filter(function(element){
			return element !== currentLetter;
		});

		console.log(filteredArray)
	}


	i = 0;

}



// it cuts out many letters
// can cut to less than length of the array
// which will stop the loop


// the loop will keep going
// as long as there are items in the array

// 1) reset the i value to less than the filteredArray.length


// if statment
// only looop if 



console.log(duplicateCount);


// for (let i = 0; i < splittedWordArray.length; i++){

// 	console.log(splittedWordArray); // what happened was it stopped counting! 
// 	// when i = 4, it stopped
// 	console.log(i);

// 	let currentLetter = splittedWordArray[i]; // loop through splittedWordArray array first

// 	// start at one 
// 	// if we have there is another index number (meaning a match)
// 	let afterLetters = splittedWordArray.indexOf(currentLetter, i+1);

// 	console.log(afterLetters);

// 	// if you don't find no duplicates, return a number 
// 	// then add duplicate count 
// 	if (afterLetters === -1){ 	
// 		console.log('no duplicate')
// 	} else {
// 		duplicateCount += 1;
// 		console.log('duplicate found')
// 	}

// 	// 1 loop should match spliitedWordArray inital
// 	// 2nd loop and after should match filteredArray for the rest of letters
// 	if (i===0) {
// 		console.log('true');
		
// 		// returns everything but the currentLetters
// 		filteredArray = splittedWordArray.filter(function(element){
// 			return element !== currentLetter;
// 		});
// 		console.log(filteredArray);

// 	} else {
// 		// returns everything but the currentLetters
// 		filteredArray = filteredArray.filter(function(element){
// 			return element !== currentLetter;
// 		});

// 	}

// 	// redefeclaring filteredArray should be the value for splittedWordArrray
// 	// so it can loop through the new array 
// 	splittedWordArray = filteredArray;

// 	console.log(splittedWordArray);

// }

// console.log(duplicateCount);



// function match(element){
// 	return element === currentLetter;
// }

// let returnedIndex = splittedWordArray.findIndex(match);

// console.log(returnedIndex);

// let slicedArray = splittedWordArray.slice(returnedIndex, returnedIndex+1);



// console.log(filtered);


// if i find another instance
// can i return the index 

// // let currentLetter = word.slice(0,1);
// // let leftLetters = word.slice(1);
// let duplicateCount = '';

// let foundLetter = leftLetters.indexOf(currentLetter);

// if (foundLetter !== -1){ // found letter
// 	duplicateCount += 1;


// 	// cut out all instances of that letter
// 	// let leftOver = word.replace(foundLetter, '');


// 	console.log(foundLetter);
// 	let sliced = word.slice(foundLetter);

// 	console.log(sliced);

// 	// for (let i = 0; i < word.length; i++){


// 	// }

// 	// console.log(leftOver);


// } else {
	
