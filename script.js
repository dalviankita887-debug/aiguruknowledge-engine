function payNow() {
  const question = document.getElementById("question").value;

  if (question.trim() === "") {
    alert("Please type a question first");
    return;
  }

  document.getElementById("result").innerText =
    "✅ Payment received (demo)\n\n🤖 AI Answer:\nThis is a demo answer. Real AI answer will come here automatically.";
}
