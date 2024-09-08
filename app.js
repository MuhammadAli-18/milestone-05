// Function to download the resume as PDF
function downloadResumeAsPDF() {
    var jsPDF = window.jspdf.jsPDF; // Get jsPDF from global window object
    var doc = new jsPDF();
    // Get the resume content
    var name = document.getElementById('name').innerText;
    var email = document.getElementById('email').innerText;
    var phone = document.getElementById('phone').innerText;
    var education = document.getElementById('education').innerText;
    var experience = document.getElementById('experience').innerText;
    var skills = document.getElementById('skills').innerText;
    // Add the content to the PDF
    doc.text("Name: ".concat(name), 10, 10);
    doc.text("Email: ".concat(email), 10, 20);
    doc.text("Phone: ".concat(phone), 10, 30);
    doc.text("Education:", 10, 40);
    doc.text(education, 10, 50);
    doc.text("Work Experience:", 10, 60);
    doc.text(experience, 10, 70);
    doc.text("Skills:", 10, 80);
    doc.text(skills, 10, 90);
    // Save the PDF with the name of the user
    doc.save("".concat(name, "_resume.pdf"));
}
// Attach event listener to the button
var downloadButton = document.getElementById('download-btn');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadResumeAsPDF);
}
