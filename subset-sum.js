let arr = [2, 3];
let result = [];
function solve(i, sum,) {
    if (i >= arr.length) {
        result.push(sum)
        return;
    }
    solve(i + 1, sum + arr[i]);
    solve(i + 1, sum);
}
solve(0,0);
console.log(result);