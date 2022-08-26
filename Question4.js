//Question 4

const isValidPassword = (password) => {
  let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  let regexLower = /^(?=.*[a-z])/;
  let regexUpper = /^(?=.*[A-Z])/;
  let regexNumber = /^(?=.*[0-9])/;
  let regexMinimum = /^(?=.{8,})/;
  let hasil;

  if (typeof password !== "string") {
    hasil = false;
  }

  switch (true) {
    case regexUpper.test(password) == false:
      hasil = false;
      break;
    case regexLower.test(password) == false:
      hasil = false;
      break;
    case regexMinimum.test(password) === false:
      hasil = false;
      break;
    case regexNumber.test(password) == false:
      hasil = false;
      break;
    case regexPassword.test(password):
      hasil = true;
      break;
    default:
      hasil = false;
      break;
  }

  return hasil;
};

console.log(isValidPassword('Password12'));
console.log(isValidPassword('password22'));
console.log(isValidPassword('testi'));
console.log(isValidPassword('testi2'));
console.log(isValidPassword(0));
console.log(isValidPassword());
