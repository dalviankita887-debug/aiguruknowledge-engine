let questionsData = null;

// Load data.json
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    questionsData = data.questions;
  });

function payAndShow() {
  if (!questionsData) {
    alert("Loading data, please wait...");
    return;
  }

  // 👉 TEMP PAYMENT SIMULATION
  // (Real UPI auto link next phase)
  let confirmPay = confirm("Pay ₹5 via UPI to get answer");

  if (!confirmPay) return;

  let qid = document.getElementById("questionSelect").value;
  let q = questionsData.find(item => item.id == qid);

  document.getElementById("answerBox").innerText = q.answer;
}
