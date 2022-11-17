'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, str) => {

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {

    newArr.push(`${str} ${arr[i]}`);
  }
  return newArr;
}

console.log(addPrefix(names, 'Mr'));
