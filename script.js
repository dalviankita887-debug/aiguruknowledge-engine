
async function getAnswer() {
  const q = document.getElementById("userQuestion").value.trim();
  const box = document.getElementById("answerBox");
  if (!q) { box.innerHTML = "❗Please type your question."; return; }

  box.innerHTML = "🔄 Processing your question…";

  // Fake small delay
  await new Promise(r => setTimeout(r, 1500));

  // Payment step
  const upi = "9307529851-2@ibl";
  const amount = 5;
  const intent = `upi://pay?pa=${upi}&pn=AI Guru Answer&am=${amount}&cu=INR&tn=Answer Payment`;

  box.innerHTML = `
  💰 To unlock your answer, please pay ₹${amount} using UPI.<br><br>
  <a href="${intent}" style="color:#00ff99;font-weight:bold;">Click to Pay via UPI</a><br><br>
  After payment, click below:<br>
  <button onclick="showAnswer('${q}')">✅ I Have Paid</button>`;
}

async function showAnswer(q) {
  const res = await fetch("data.json");
  const data = await res.json();
  const lower = q.toLowerCase();
  let ans = data[lower];
  if (!ans) ans = "🤖 Sorry, this answer is not in the database yet.";
  document.getElementById("answerBox").innerHTML = `<b>Answer:</b><br>${ans}`;
}
