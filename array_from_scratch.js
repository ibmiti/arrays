// building array in js from scratch
// arrays are objects + integer keys called indices

class MyArray {
    // initial method which will run when instantiating class
    constructor(){
        // initial length of unfilled array
        this.length = 0;
        // data objects will fill arr
        this.data   = {};
    }

    //access array by index
    get(index){
        // return data at the index
        return this.data[index];
    }

    push(item) {
        // arr length starts at 0 
        // when item is pushed into arr it fills the 0 index
        this.data[this.length] = item;
        // as we continue to add items , more indices are needed
        // so upon second item pushed, the length of arr becomes increasingly larger
        this.length++
        // return length of array
        return this.length;
    }
}

const newArray0 = new MyArray();
console.log(newArray);
// output : undefined
console.log(newArray[0]);
// output : undefined - for we have inserting nothing into arr

const newArray1 = new MyArray();
newArray1.push('hello');