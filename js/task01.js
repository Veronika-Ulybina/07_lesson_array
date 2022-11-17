'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr, arr2) => {

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].includes(arr[i])) {
        arr.splice(i, 1);
      }
    }
  }
  console.log(arr);
}

filter(allStudents, failedStudents);
