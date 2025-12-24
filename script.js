
function loadQuestions(){
let lang=document.getElementById("lang").value;
let box=document.getElementById("questionBox");
box.innerHTML="";
data[lang].forEach(d=>{
box.innerHTML+=`<h3>${d.q}</h3><p>${d.a}</p>`;
});
}
loadQuestions();

function saveEmail(){
let e=document.getElementById("email").value;
if(!e.includes("@")){alert("Enter valid email");return;}
localStorage.setItem("lead_"+Date.now(),e);
document.getElementById("emailMsg").innerText="Thanks! You will receive updates.";
}
function loadSEO(){
let box=document.getElementById("questionBox");
seoKeywords.forEach(k=>{
box.innerHTML+=`<p>🔥 ${k} — Learn with certificate</p>`;
});
}
loadSEO();
