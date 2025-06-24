let arr = [1, 2, 1, 0, 1];
let sum = 2;

function findSum(i, temp, tempSum) {
    if (i >= arr.length) {
        if (tempSum == sum) {
            console.log(temp);
        }
        return;
    }

    temp.push(arr[i]);
    tempSum = tempSum + arr[i];

    findSum(i + 1, temp, tempSum);
    temp.pop();
    tempSum = tempSum - arr[i];
    findSum(i + 1, temp, tempSum);
}
findSum(0, [], 0)