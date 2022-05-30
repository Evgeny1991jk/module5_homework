let arr = [55, 85, 302, 1055, 505323, 1055, 12, false, 'example', 'test', NaN]

for (let i = 0; i <= arr.length -1; i++) {
for (let k = 0; k <= arr.length -1; k++) {
  console.log(typeof arr[i] === typeof arr[k]);
  }
};