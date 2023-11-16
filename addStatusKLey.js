let arr = [
  { name: 'name', id: 1 },
  { name: 'name1', id: 2 },
  { name: 'name2', id: 4 },
  { name: 'name3', id: 3 },
  { name: 'name4', id: 1 },
  { name: 'name', id: 1 },
  { name: 'name1', id: 1 },
  { name: 'name2', id: 1 },
  { name: 'name3', id: 3 },
  { name: 'name4', id: 1 },
];

let arr1 = [
  { name: 'test', id: 1 },
  { roll: '21', id: 2 },
  { roll: '21', id: 1, t: 't' },
];

for (let i = 0; i < arr.length; i++) {
  arr[i].isActive = []; // Use an array to store multiple matches

  for (let j = 0; j < arr1.length; j++) {
    if (arr[i].id === arr1[j].id) {
      arr[i].isActive.push(arr1[j]); // Store the matching object
    }
  }
}

console.log(arr);
