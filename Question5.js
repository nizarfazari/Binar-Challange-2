//Question 5

const getSplitName = (personName) => {
  let hasil;
  if (typeof personName !== "string") {
    hasil = `Error : this funtion only use string `;
  } else {
    let splitName = personName.split(" ");
    if (splitName.length >= 4) {
      hasil = `this's function only for 3 characters name`;
    } else if (splitName.length >= 2) {
      let [firstName, lastName = null, middleName = null] = splitName;
      hasil = { firstName, middleName, lastName };
    } else {
      let [firstName, middleName = null, lastName = null] = splitName;
      hasil = { firstName, middleName, lastName };
    }
  }

  return hasil;
};

console.log(getSplitName('Muh Nizar Fazari'));
console.log(getSplitName('Nizar Fazari'));
console.log(getSplitName('Nizar'));
console.log(getSplitName('Muh Nizar Fazari Kairo'));
console.log(getSplitName(0));
