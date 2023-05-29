// function addTo80(n) {
//   return (n += 80);
// }

// console.log(addTo80(3));
// console.log(addTo80(3));
let cache = {};
function memoizedAddTo80(num) {
  if (num in cache) {
    return cache[num];
  } else {
    console.log("long time");
    cache[num] = 5 + 80;
    return cache[num];
  }
}

console.log(1, memoizedAddTo80(20));
console.log(2, memoizedAddTo80(20));

console.log(cache);
