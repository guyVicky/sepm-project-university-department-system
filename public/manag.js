document.addEventListener("DOMContentLoaded", function () {
  const studentFormContainer = document.getElementById(
    "student-form-container"
  );
  const studentForm = document.createElement("form");
  studentForm.innerHTML = `
      <label for="student-name">Student Name:</label>
      <input type="text" id="student-name" name="studentName" required>
      <label for="student-address">Address:</label>
      <input type="text" id="student-address" name="studentAddress" required>
      <label for="registered-course">Registered Course:</label>
      <input type="text" id="registered-course" name="registeredCourse" required>
      <button type="submit" onclick="submitStudentForm()">Submit</button>
    `;
  studentFormContainer.appendChild(studentForm);
});

function submitStudentForm() {
  const studentName = document.getElementById("student-name").value;
  const studentAddress = document.getElementById("student-address").value;
  const registeredCourse = document.getElementById("registered-course").value;

  console.log(
    `Student Name: ${studentName}, Address: ${studentAddress}, Registered Course: ${registeredCourse}`
  );

  alert("Student details submitted successfully!");
}
