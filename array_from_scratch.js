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

    pop(){
        // ...[this.length-1]; is important due to length method returning actual length of array not account for index based counting where ( first index == 0 )
        // so we will get the total length of the ( arr - 1 ) to account for index of ( o - n )
        // example :
        // const second_from_last_item = this.data[this.length -2];
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--; // reduces overall length of arr after pop() method is finished executing
        return lastItem;
    }
    // which item by index we want to delete
    delete(index){
        const item = this.data[index];
        // we must shift the array when deleting item 
        // we must shift the entire array by 1
        this.shiftItems(index);
    }
    // O(N) operation
    // index == the index we are deleting from
    shiftItems(index){
        // so starting at the deleted index -
        // while the deleted index is less than the last element deleted - 1 ( to get the actual index vs length of arr )
        // increment i || index - which is the loop'ing behavior
        for(let i = index; i < this.length - 1; i++)
        {
            // giving a new value to the index of the array 
            // this technically 'shifts' the arrays indexes by 1
            this.data[i] = this.data[i+1];
            // more detail :: 
                // if an index == [0] and the next index is [2],,
                // make index[0] -> index[2]
        }
        // will delete the unremoved index and its value
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArrayItem = new MyArray();
console.log(newArrayItem);
// output : undefined
console.log(newArrayItem[0]);
// output : undefined - for we have inserting nothing into arr
newArrayItem.push('hello'); // index 0
newArrayItem.push('world'); // index 1
newArrayItem.push('foo');   // index 2
newArrayItem.push('bar');   // index 3
// output length of 4
newArrayItem.pop();  
// output length of 3
newArrayItem.push('blob');
newArrayItem.delete(1);

