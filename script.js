const ball = document.querySelector("img");
const input = document.querySelector("input");
const error = document.querySelector(".error");
const answer = document.querySelector(".answer");
const answers = [
  "Concentrare, and ask again!",
  "Yes!",
  "Do You even have to ask?",
  "No! No way!",
  "Maybe later in the future",
  "You do not want to know the answer",
  "Better go and watch a movie ;)",
];

function errorMsg() {
  answer.innerHTML = "";
  setTimeout(() => {
    error.textContent = "To know the anwser, You must ask a question first!";
    ball.classList.remove("shake-animation");
  }, 1000);
}

function checkInput() {
  if (input.value.length < 3) {
    ball.classList.add("shake-animation");
    errorMsg();
  } else {
    checkQuestion();
    ball.classList.add("shake-animation");
    setTimeout(() => {
      ball.classList.remove("shake-animation");
    }, 1000);
    error.textContent = "";
  }
}

function checkQuestion() {
  if (input.value.charAt(input.value.length - 1) !== "?") {
    setTimeout(() => {
      error.textContent =
        "I think a question should end with a question mark ;)";
      answer.innerHTML = "";
    }, 1000);
  } else {
    generateAnwser();
  }
}

const generateAnwser = () => {
  if (input.value.charAt(input.value.length - 1) === "?") {
    setTimeout(() => {
      answer.innerHTML =
        "<span>Odpowiedź: </span>" +
        answers[Math.floor(Math.random() * answers.length)];
    }, 1000);
  }
};

ball.addEventListener("click", checkInput);
