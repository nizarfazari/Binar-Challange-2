//Question 3

const checkEmail = (email) => {
  let hasil;
  let regexCheck = /(\w+)@/;
  let regex = /(\w+)@[a-z]+(\.[a-z]+)?\.[a-z]{2,3}(\.[a-z]{2})?/;

  if (typeof email == "number") {
    hasil = `Error : your email contains numbers ${email} doesn't match the rules like nizar@gmail.com`;
  } else if (typeof email == null) {
    hasil = `Error : You haven't entered your email yet  ${email}`;
  } else if (typeof email == "string") {
    if (email.match(regexCheck) == null) {
      hasil = `Error : Your email ${email} doesn't match the rules like nizar@gmail.com`;
    } else if (email.match(regex)) {
      hasil = "Valid";
    } else {
      hasil = "INVALID";
    }
  } else {
    hasil = `Error : Your email  ${email} doesn't match the rules like nizar@gmail.com`;
  }

  return hasil;
};

console.log(checkEmail('nizar@binar.co.id'));
console.log(checkEmail('nizar@binar.com'));
console.log(checkEmail('nizar@binar'));
console.log(checkEmail('nizar'));
console.log(checkEmail(2323));
console.log(checkEmail());

//Method 2 lebih singkat
// const checkEmail = (email) => {
//   let hasil;
//   let regex = /(\w+)@[a-z]+(\.[a-z]+)?\.[a-z]{2,3}(\.[a-z]{2})?/;
//   if (typeof email == "string") {
//     email.match(regex) == null ? (hasil = "INVALID") : (hasil = email.match(regex));
//   } else {
//     hasil = `Error : Your email doesn't match the rules ${email}`;
//   }

//   return hasil;
// };

// console.log(checkEmail(22));
