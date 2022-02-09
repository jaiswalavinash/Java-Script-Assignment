function CreateObject(arr) {
    // Write your code here
    object = {}
    for (let i = 1; i < arr.length; i++) {
        object[arr[i - 1]] = arr[i]
        i += 1
    }
    return object

}

module.exports = CreateObject;
