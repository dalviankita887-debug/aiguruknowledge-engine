
function loadFreeLesson() {
  document.getElementById("freeContent").innerHTML =
    courseData.freeDemo.content;
}

function loadPaidCourse() {
  let html = "";
  courseData.paidCourse.modules.forEach(m => {
    html += `<h2>${m.title}</h2>${m.content}`;
  });
  document.getElementById("paidContent").innerHTML = html;
}

// Paid content intentionally locked
