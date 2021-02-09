const arr_1 = [[1,2,3],[4,5,6]]

const arr_2 = [...arr_1.map(arr => [...arr])]

arr_2[0][0] = 0

console.log(arr_1,'........',arr_2);