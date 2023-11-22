function displayGrades() {
  const registrationId = document.getElementById("registrationId").value;

  const grades = getGrades(registrationId);

  if (grades) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p><h3>Grades for Registration ID ${registrationId}:</p></h3><br>`;

    for (const [subject, grade] of Object.entries(grades)) {
      resultDiv.innerHTML += `<p>${subject}: ${grade}</p>`;
    }
  } else {
    alert("Grades not found for the given Registration ID.");
  }
}

function getGrades(registrationId) {
  const gradeData = {
    2101020153: {
      "Programming using C": "O",
      "Introduction to Mechanical Engineering": "E",
      "Mathematics-I": "A",
      Physics: "E",
    },
    2101020438: {
      "Programming using C": "E",
      "Introduction to Mechanical Engineering": "B",
      "Mathematics-I": "A",
      Physics: "O",
    },
    2101020572: {
      "Programming using C": "A",
      "Introduction to Mechanical Engineering": "O",
      "Mathematics-I": "B",
      Physics: "E",
    },
    2101020815: {
      "Programming using C": "B",
      "Introduction to Mechanical Engineering": "A",
      "Mathematics-I": "O",
      Physics: "A",
    },
    2101020999: {
      "Programming using C": "O",
      "Introduction to Mechanical Engineering": "O",
      "Mathematics-I": "A",
      Physics: "A",
    },
  };

  return gradeData[registrationId];
}
