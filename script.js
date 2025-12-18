function askQuestion() {
  const question = document.getElementById("question").value.toLowerCase();
  const answerBox = document.getElementById("answer");

  if (question.trim() === "") {
    alert("Please enter a question");
    return;
  }

  // 👉 Razorpay Payment Link (इथे तुझी खरी link टाक)
  const paymentLink = "https://rzp.io/rzp/OPuKcBe";

  // User ला payment page वर redirect करा
  window.location.href = paymentLink;
}
