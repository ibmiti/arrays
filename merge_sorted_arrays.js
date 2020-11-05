// merge previously sorted arrays

function mergeSortedArrays(arr1, arr2) 
{
    const mergedArray = [];
    // store the first item within arr1 in arr1item
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    // will be used within while loop
    let i = 1;
    let j = 1;

    // check input
    if (arr1.length == 0)
    {
        // if no val in arr1 return arr2
        return arr2;
    }
    // check input
    if (arr2.length == 0)
    {
        // same as above
        return arr1;
    }

    // after passing condition check, arr's gain access to while-loop
    // while both have values do..
    while(arr1Item || arr2Item){   
        if (!arr2Item || arr1Item < arr2Item){
            mergedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return mergedArray;
}

// these separate arrs will be merged 
mergeSortedArrays([0,3,4,31],[4,6,30]);
                    // arr1    arr2