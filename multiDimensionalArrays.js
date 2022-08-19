//  mda -> multidimensional array
let mda = [[1,2,3,4],[5,6,7]];
let one, two, three, four, five, six, seven;
one   = mda[0][0];
two   = mda[0][1];
three = mda[0][2];
four  = mda[0][3];
five  = mda[1][0];
six   = mda[1][1];
seven = mda[1][2];
console.log(one,two,three,four,five,six,seven);

// THESE TWO Arrays, are the same length.
// though it may take more time to access, return each el in arr.
a = [1,2,3], b = [[1],[2],[3]];
a 

for ( i in a ){ 
    return i 
}


//  check if word has same letters as given word
function mutation(arr) {
    let givenWord = arr[1].toLowerCase();
    let targetWord = arr[0].toLowerCase();
    for (let i = 0; i < givenWord.length; i++) {
      if (targetWord.indexOf(givenWord[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);

  //Splitting list into sublist, by given n
    function chunkArrayInGroups(arr, n) {
        let chunk=n,result=[];
        for(let i=0;i<arr.length;i+=chunk){
          result.push(arr.slice(i,i+chunk));
        }
      
        return result;
      }
      
      chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Given 2 list, compare each list's index
//if list a's index > b's index, then give a point 
//to the variable representing the first list,
//...
let alice=a,bob=b;
let alicePoints=0,bobPoints=0;
let results=[];
for(let i=0;i<b.length;i++){
    if(a[i]==bob[i]){
        continue;
    }
    if(alice[i]>bob[i]){
        alicePoints++;
    }
    if(bob[i]>alice[i]){
        bobPoints++;
    }
} 
results.push(alicePoints);
results.push(bobPoints);
return results;
}