const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];
const data2 = []

// 1. Print Developers
function printDeveloper() {
  console.log(data[0].profession);
}

// 2. Add Data
function addData() {
  data[2] = { name: "kane", age: 28, profession: "teacher" }
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  console.log(data.pop());
}

// 4. Concatenate Array
function concatenateArray() {
  console.log(...data, ...data2);
}

// 5. Average Age
function averageAge() {
  let sum = 0, count = 0
  data.forEach((Element, index) => {
    sum += data[index].age
    count++
  })
  console.log(`Average age : ${(sum / count).toFixed(1)}`);
}

// 6. Age Check
function checkAgeAbove25() {
  let ageAbove25 = []
  data.forEach((element) => {
    ageAbove25.push(element.age);
  })

  ageAbove25.forEach((element, index) => {
    if (ageAbove25[index] > 25) {
      console.log(ageAbove25[index]);
    }
  })
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProArr = [];
  data.forEach((element) => {
    if (!uniqueProArr.includes(element.profession)) {
      uniqueProArr.push(element.profession);
    }
  });
  console.log(uniqueProArr);
}

// 8. Sort by Age
function sortByAge() {
  let sortByAge = [];
  data.forEach((element) => {
    sortByAge.push(element.age);
  })
  console.log(sortByAge.sort((a, b) => { a - b }));
}

// 9. Update Profession
function updateJohnsProfession() {
  console.log(data[0].profession = "Struggler developer");
}

// 10. Profession Count
function getTotalProfessions() {
  let professionsCount = [], count = 0;
  data.forEach((element) => {
    professionsCount.push(element.profession);
    count++
  })
  console.log(`Profession Count : ${count}`);
}