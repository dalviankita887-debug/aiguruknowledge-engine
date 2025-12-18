// Simple AI Knowledge Engine Demo Script

function showAnswer() {
  const questionInput = document.getElementById("question");
  const answerBox = document.getElementById("answer");

  if (questionInput.value.trim() === "") {
    alert("Please enter a question");
    return;
  }

  // Demo answers (later this will be AI + paid)
  let demoAnswer = "";

  const q = questionInput.value.toLowerCase();

  if (q.includes("sun")) {
    demoAnswer = "The Sun is a star at the center of our solar system.";
  } else if (q.includes("india")) {
    demoAnswer = "India is a country in South Asia with capital New Delhi.";
  } else if (q.includes("health")) {
    demoAnswer = "Drink water, sleep well, and eat balanced food for good health.";
  } else {
    demoAnswer = "This is a demo AI answer. Paid AI answers will be enabled soon.";
  }

  answerBox.innerHTML = demoAnswer;
  answerBox.style.display = "block";
}
