function payNow() {
  const q = document.getElementById("question").value.trim();

  if (q === "") {
    alert("Please enter your question");
    return;
  }

  //https://rzp.io/rzp/OPuKcBe
  const razorpayLink = "PASTE_YOUR_RAZORPAY_LINK_HERE";

  window.open(razorpayLink, "_blank");

  setTimeout(() => {
    showAnswer(q);
  }, 3000); // demo delay
}

function showAnswer(question) {
  let answer = "Thank you for your payment. Your AI-powered answer will appear here soon.";

  const lowerQ = question.toLowerCase();

  for (let item of aiData) {
    if (lowerQ.includes(item.keyword)) {
      answer = item.answer;
      break;
    }
  }

  document.getElementById("answerText").innerText = answer;
  document.getElementById("answerBox").style.display = "block";
}
