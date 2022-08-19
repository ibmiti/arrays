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