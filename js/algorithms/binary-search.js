function binarySearch (list, item) {
    let min = 0;
    let max = list.length - 1;
    let mid
    let guess

    while( min <= max) {
        mid = Math.floor((min + max) / 2);
        guess = list[mid]
        if(guess === item) {
            return mid
        }
        if(guess < item) {
            min = mid + 1
        }
        if(guess > item) {
            max = mid -1
        }
    }
    return null
}

const list1 = [1,2,3,4,5];
const list2 = [1,10,20,30,40,50];
const list3 = [1,25,50,75,100,125];

// console.log(binarySearch(list1, 2)); 
// console.log(binarySearch(list2, 30));
// console.log(binarySearch(list3, 20));

export default  binarySearch;
