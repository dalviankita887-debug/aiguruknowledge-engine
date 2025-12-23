let currentQuestion = courseData[0];

document.getElementById("question-title").innerText =
  currentQuestion.title;

document.getElementById("question-text").innerText =
  currentQuestion.question;

const optionsDiv = document.getElementById("options");

currentQuestion.options.forEach((opt, index) => {
  let btn = document.createElement("button");
  btn.innerText = opt;
  btn.onclick = () => checkAnswer(index);
  optionsDiv.appendChild(btn);
});

function checkAnswer(selected) {
  document.getElementById("unlockBtn").style.display = "block";
}

document.getElementById("unlockBtn").onclick = () => {
  // 🔥 Gumroad Payment Link
  window.location.href = "https://dalviankita.gumroad.com/l/vmodv";
};
