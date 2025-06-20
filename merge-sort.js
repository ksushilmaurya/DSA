
let arr = [10,20,15,30,5,40,35,24]

/*
10, 20 25 30 5 40 35

10 20 25 30     5 40 35

10 20     25 30

10   20

*/

function combine(low1, high1, low2, high2) {
    let start = low1;
    let end = high2;
    let sortedArray = [];
    while(low1<=high1 && low2<=high2) {
        if(arr[low1]<arr[low2]) {
            sortedArray.push(arr[low1])
            low1++;
        } else {
            sortedArray.push(arr[low2]);
            low2++;
        }
    }
    while(low1<=high1) {
        sortedArray.push(arr[low1]);
        low1++
    }
    while(low2<=high2) {
        sortedArray.push(arr[low2]);
        low2++
    }
    let j=0;
    for(let i=start; i<=end; i++) {
        arr[i] = sortedArray[j];
        j++;
    }
}

function mergeSort(low, high) {
    let mid = Math.floor((low + high)/2);
    if(low >= high) return;
    mergeSort(low, mid);
    mergeSort(mid+1, high);
    combine(low, mid, mid+1, high)
}

mergeSort(0,7)
console.log(arr);