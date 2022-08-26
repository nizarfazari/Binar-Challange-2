//Question 2

const checkTypeNumber = (givenNumber) => {
  let hasil;
  if (typeof givenNumber == "number") {
    hasil = givenNumber % 2 == 0 ? "Genap" : "Ganjil";
  } else if (givenNumber == null) {
    hasil = "Error : Bro where is the parameter";
  } else {
    hasil = "Error : Invalid Data Type";
  }
  return hasil;
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
