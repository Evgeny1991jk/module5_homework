let x = 1;

if (typeof(x) === 'number') {
    console.log(`переменная ${x} это число`);
  }
  else if (typeof(x) === 'string') {
    console.log(`переменная ${x} это строка`);
  }
  else if (typeof(x) === 'boolean') {
    console.log(`переменная ${x} это логический тип`);
  } else {
  console.log('тип х не определен')
}