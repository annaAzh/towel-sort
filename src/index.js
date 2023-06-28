
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (Array.isArray(matrix)) {
    matrix.map((elem, i) => {
      if (i % 2 !== 0) {
        elem = elem.reverse();
      } else {
        elem = elem;
      }
      arr.push(...elem);
    }) 
  }
  return arr;
}
