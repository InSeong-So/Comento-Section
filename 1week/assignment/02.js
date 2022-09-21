/**
 * 수정해주세요!
 */
function printMatrix(matrix) {
  for (const i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    for (const i = 0; i < line.length; i++) {
      const element = line[i];
      console.log(element);
    }
  }
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(matrix); // 희망하는 결과값 : 1, 2, 3, 4, 5, 6, 7, 8, 9
