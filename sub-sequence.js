let arr = [1,2,3]

function print(i, temp) {
    if(i>=arr.length) {
        console.log(temp)
        return;
    }
    temp.push(arr[i]);
    print(i+1, temp)
    temp.pop()
    print(i+1, temp)
}
print(0,[])