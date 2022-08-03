// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWordLength(str) {
    // get longest word in string
      // split string to array
    let words = str.split(' ');
    let longestWord = words[0]; // temp val
    // loop over words ( arr )
    for (let i=0;i<words.length;i++){
      if(words[i].length>longestWord.length){
        longestWord=words[i];
      } 
    }
    return longestWord.length; // response => number
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return an array consisting of the largest number from each provided sub-array.
// the array will contain 4 sub-arrays.
function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
// Set the largest number, to the first i in each sub arr
    let largestNumber = arr[i][0];
// Traverse from second j, to the length of each sub arr
    for (let j = 1; j < arr[i].length; j++) {
// if each j ( or num ) in sub arr ( arr[i] ) is greater than the numbers within largestNumber
       if (arr[i][j] > largestNumber) {
// set largestNumber to the current j (or current num), within the current subarr (or arr[i]) 
            largestNumber = arr[i][j];
        }
    }
// Continuously set each i within results arr, to the current largestNumber 
    results[i] = largestNumber;
}
// when Loops end, return arr
return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// The above rewritten
function largestOfFour(arr) {
    // set the i,j to readable terms
    let arrIndex;
    let subarrIndex;
    for(arrIndex=0;arrIndex<arr.length;arrIndex++){    
  // get a temp number, from the first i in the first sub arr    
      let largestNumber = arr[arrIndex][0]; // val => 4,13,32,1000
      for(subarrIndex=1;subarrIndex<arr[arrIndex].length;subarrIndex++){
        if(arr[arrIndex][subarrIndex]>largestNumber){
          largestNumber = arr[arrIndex][subarrIndex];
        }
      }
      arr[arrIndex] = largestNumber;
    }
  //Return an array consisting of the largest number from each provided sub-array. 
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  // Check if str, ends with target
  function confirmEnding(str, target) {
    // Check if str, ends with target
    // use substr method
    if(!str.endsWith(target)){
      return false;
    }else{return true;}
   }
   
   confirmEnding("Bastian", "n");


   let text = "Hello world!";
   let result = text.slice(0, 5);
   let ello=text.slice(1,5); // => 'ello'

   function confirmEnding(str, target) {
    let result=false;
  // Check if a string, ends with target
  // use slice, and set domain with str.length, target.length minus 1
    if(str.slice(str.length-target.length) === target){
      result=true;
    } else {
      result=false;
    }
    return result;
  }
  
  confirmEnding("Bastian", "n");

  // repeat a string n times
  function repeatStringNumTimes(str, num) { 
    let newStr='';
    for(let i=0;i<num;i++){
      newStr+=str;
    }
    return newStr;
  }
  
  repeatStringNumTimes("*", 3);

  // TRUNCATE STRING AT N INDEX, IF STR LENGTH > NUM
  function truncateString(str, num) {
    // if str is longer than num, truncate given str
      let givenStrLength=str.length, givenMaxNum=num;
      if(givenStrLength>givenMaxNum){
        return str.slice(0,num)+"...";
      } else {
        return str;
      }
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 43);

    // Checking the remainders of each element in arr
    function findElement(arr, func) {
        // check each el in arr, if remainder of el when divided 
        // by 2 === 0, then return true, else return false
          let num=0;
          for(let i=0;i<arr.length;i++){
            num=arr[i];
            if(func(num)){
              return num;
            }
          }
          return undefined;
        }
        
        findElement([1, 2, 3, 4], num => num % 2 === 0);

// check if x is boolean datatype
function booWho(bool) {
    if(typeof bool==='boolean'){
        return true;
    } else {
        return false;
    }
}
    
booWho(null); // returns false,
booWho(true); // returns true

// capitalize the first letter in each word, lower case the remaining letters
function titleCase(str) {
    let words=str.split(" ");
    let refactoredStr=[];
    words.forEach(function(word){
      refactoredStr.push(
          word[0].toUpperCase()
          +
          word.slice(1).toLowerCase()
        );
    });
    refactoredStr=refactoredStr.join(" ");
    return refactoredStr; //set with a string, with first letter of each word capitalized, rest of the word lowercased.
  }
  
  titleCase("I'm a little tea pot");
  
  //Preserve old arr, and insert new values from another arr, starting..
  //...at the given index
  function preserveInsert(arr1, arr2, index) {
    //create a copy of the arr2, into a newArr, to avoid changing of arrs...
    let newArr=arr2.slice();//creates a copy of referenced arr.
    //move through first arr, will copy items from first arr, ...
    // ...into newArr
    for(let i=0;i<arr1.length;i++){
      //change values of newArr, starting at the given index...
      //...removing nothing, and placing the contents of the first arr..
      //....into the newArr
      newArr.splice(index,0,arr1[i]);//arr1[1,2,3] at final loop...
      index++;
    }   
    console.log(newArr);
    return newArr;//result of taking each element of the first array into the second array, in order
  }
  
  preserveInsert([1, 2, 3], [4, 5, 6], 1);

  //Filter for true and false values from arr.
  function bouncer(arr) {
    let onlyTrueValues=[];
    let filteredFalseValues=[];
    for(let i=0;i<arr.length;i++){
      //if this i, when converted to bool, is true then it is true...
      if(!!arr[i] == true){
        //push only true vals
        onlyTrueValues.push(arr[i]);
      }else{
        filteredFalseValues.push(arr[i]);
        console.log(filteredFalseValues);
      }
    }
    return onlyTrueValues;//only include values, which are not false or falsey
  }
  
  bouncer([7, "ate", "", false, 9]);

  //Stop and return the position, where given num is greater than current i in arr
  function getIndexToIns(arr, num) {
    return arr.filter(val=>num>val).length;
  }
  
  getIndexToIns([40, 60], 50);