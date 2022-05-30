let arr = [55, 85, 302, 1055, 505323, 1055, 12, false, 'example', 'test', NaN, null, 0]

for (let i = 0; i <= arr.length -1; i++) {
  let elemType = console.log(typeof arr[i]);
if (!isNaN(arr[i])) {
  if (arr[i] % 2 === 0){
    console.log(`число ${arr[i]} четное`)
  }
  else if (arr[i] % 2 !== 0) {
    console.log(`число ${arr[i]} нечетное`)
  }
  else if (arr[i] === 0) {
    console.log(`число ${arr[i]} ноль`)
  } else {
  console.log('тип элемента не число')
}
}
}