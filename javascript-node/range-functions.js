function rangeN(s, n) {
    return Array.from({length: n}, (v, k) => k+s);
}
function rangeI(s, e) {
    return Array.from({length: (e-s+1)}, (v, k) => k+s);
}
function compareIdenticalArrays(array1,array2) {
  return array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]})
}   
let start = 3, end = 8, n = 6;
if ( !compareIdenticalArrays(rangeN(start,n),rangeI(start,end)) ) console.log('TEST FAILED!');
console.log(rangeN(3,6));
console.log(rangeI(3,8));