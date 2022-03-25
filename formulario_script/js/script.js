function calcScore() {
  const answers = ["espanhol", "peso-colombiano", "bogota", "0", "patacones"];

  const quizForm = document.forms["quiz"];

  const { language, currency, capital, cups, food } = quizForm;
  
  let result = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == [
      language.value,
      currency.value,
      capital.value,
      cups.value,
      food.value
    ][i]) {
      result = result + 2;
    }
  }
  
  alert(`Sua pontuação é ${result}`);
}

document.forms["quiz"].addEventListener('submit', calcScore);