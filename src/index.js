
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
  let result = [];
    
  if (matrix == null || matrix === '') {
      result;
  } else {
      for (let i = 1; i < matrix.length; i = i + 2) {
      matrix[i].sort((x, y) => y-x);
  }
  result = matrix.flat();
  }
  
return result;
}

