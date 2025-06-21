let arr = [10,5,15,20,12,7,9,19];
function arrange(low, high) {
    let pivot = arr[low];
    let leftPtr = low+1;
    let rightPtr = high;
    while(leftPtr<rightPtr) {
        // console.log(leftPtr,rightPtr)
        while(arr[leftPtr]<pivot && leftPtr<rightPtr) {
            leftPtr ++;
        }
        while(arr[rightPtr]>pivot && leftPtr<rightPtr) {
            rightPtr--;
        }
        if(leftPtr<rightPtr) {
            let temp = arr[leftPtr];
            arr[leftPtr] = arr[rightPtr];
            arr[rightPtr] = temp;
            leftPtr++;
            rightPtr--
        } else {
            break;
        }
    }
    if(arr[leftPtr]>pivot) leftPtr--;
    arr[low] = arr[leftPtr];
    arr[leftPtr] = pivot;
    // console.log(arr)
    return leftPtr;

}

function quickSort(low, high) {
    if(low>=high) return;
    let partitionIndex = arrange(low, high);
    quickSort(low, partitionIndex-1);
    quickSort(partitionIndex+1, high);
}
quickSort(0, arr.length-1)
console.log(arr);