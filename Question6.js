//Question 6

const dataAngka2 = [9,4,7,7,4,3,2,2,8];

function getAngkaTerbesarKedua(arr) {
  if (Array.isArray(arr) && arr.length >= 2) {
    return arr
      .sort((a, b) => {
        return a - b;
      })
      .reverse()[1];
  } else {
    return "Error : Required typeof params is array and contain of array must more than 2 ";
  }
}

console.log(getAngkaTerbesarKedua(dataAngka2));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
