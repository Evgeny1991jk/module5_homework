let num = +prompt('Введите число');

if (!isNaN(num)) {
  if (num % 2 === 0){
    console.log(`число ${num} четное`)
  }
  else if (num % 2 !== 0) {
    console.log(`число ${num} нечетное`)
  }
} else {
  console.log('Упс, кажется, вы ошиблись')
}