function fetchStudentInfo() {
  const registrationNumber = document.getElementById("registrationNumber").value;

  const studentData = {
    2101020153: {
        name: "Ravi Kumar",
        address: "22, Krishna Nagar, New Delhi",
        registeredCourse: "B. Tech"
    },
    2101020438: {
        name: "Sneha Sharma",
        address: "45, Ganga Vihar, Mumbai",
        registeredCourse: "B. Tech"
    },
    2101020572: {
        name: "Amit Patel",
        address: "78, Tulsi Nagar, Ahmedabad",
        registeredCourse: "B. Tech"
    },
    2101020815: {
        name: "Deepika Gupta",
        address: "12, Yamuna Colony, Jaipur",
        registeredCourse: "B. Tech"
    },
    2101020999: {
        name: "Rahul Singh",
        address: "34, Ganges Street, Kolkata",
        registeredCourse: "B. Tech"
    },
    2101021123: {
        name: "Neha Verma",
        address: "56, Brahmaputra Road, Guwahati",
        registeredCourse: "B. Tech"
    },
    2101021255: {
        name: "Vikas Sharma",
        address: "89, Sarayu Enclave, Lucknow",
        registeredCourse: "B. Tech"
    },
    2101021388: {
        name: "Pooja Kapoor",
        address: "67, Godavari Heights, Pune",
        registeredCourse: "B. Tech"
    },
    2101021444: {
        name: "Rajiv Mishra",
        address: "90, Narmada Nagar, Bhopal",
        registeredCourse: "B. Tech"
    },
    2101021577: {
        name: "Kavita Singh",
        address: "43, Indus Street, Chandigarh",
        registeredCourse: "B. Tech"
    },
    2101021666: {
        name: "Arjun Sharma",
        address: "76, Yamuna Road, Noida",
        registeredCourse: "B. Tech"
    },
    2101021789: {
        name: "Ananya Das",
        address: "21, Saraswati Nagar, Kolkata",
        registeredCourse: "B. Tech"
    },
    2101021890: {
        name: "Sanjay Tiwari",
        address: "54, Tapti Residency, Surat",
        registeredCourse: "B. Tech"
    },
    2101021947: {
        name: "Meera Reddy",
        address: "32, Krishna Colony, Hyderabad",
        registeredCourse: "B. Tech"
    },
    2101022001: {
        name: "Rohan Sharma",
        address: "65, Ganges Apartments, Bangalore",
        registeredCourse: "B. Tech"
    },
};
  

  if (registrationNumber in studentData)
      displayStudentInfo(studentData[registrationNumber]);
  else
    alert("Not present")
}

function displayStudentInfo(studentData) {
  const studentInfoContainer = document.getElementById("studentInfo");
  studentInfoContainer.innerHTML = "";

  for (const [property, value] of Object.entries(studentData)) {
    const infoElement = document.createElement("p");
    infoElement.innerHTML = `<strong>${property}:</strong> ${value}`;
    studentInfoContainer.appendChild(infoElement);
  }
}
