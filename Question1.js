//Question 1

const changeWord = (selectedText, changeText, text) => {
  let texts = text.split(" ").map((element) => {
    return element == selectedText ? (element = changeText) : element;
  });

  return texts.join(" ");

  // return text.replace(selectedText,changeText);
};

const kalimat1 = "Aku sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "sumeru", kalimat2));
