function returnAllprimeNumber(num) {
  for (i = 0; i <= num; i++) {
    if (
      i % 2 !== 0 &&
      i >= 2 &&
      i % 3 !== 0 &&
      i >= 3 &&
      i % 7 !== 0 &&
      i >= 7 &&
      i % 5 !== 0 &&
      i >= 5
    ) {
      console.log(i);
    }
  }
}
returnAllprimeNumber(27);

function foo(a) {
  var find = a.filter((ele) => {
    if (ele <= 2) {
      return false;
    }

    for (i = 2; i < ele; i++) {
      if (ele % i == 0) {
        return false;
      }
    }

    return ele;
  });
  return find;
}

console.log(
  foo([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    23, 25, 27,
  ])
);
