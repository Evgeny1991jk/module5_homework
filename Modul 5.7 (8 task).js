let pets = new Map ([
    ['cat', 'black'],
    ['dog', 'brown'],
    ['fox', 'red']
  ]);
  
  for (let name of pets.keys()) {
    console.log(`Ключ - ${name}`);
  }
  
  for (let color of pets.values()) {
    console.log(`Значение - ${color}`);
  }