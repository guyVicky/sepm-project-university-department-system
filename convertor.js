const fs = require("fs");

data = {
  2101020153: {
      name: "Ravi Kumar",
      address: "22, Krishna Nagar, New Delhi",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101020438: {
      name: "Sneha Sharma",
      address: "45, Ganga Vihar, Mumbai",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101020572: {
      name: "Amit Patel",
      address: "78, Tulsi Nagar, Ahmedabad",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101020815: {
      name: "Deepika Gupta",
      address: "12, Yamuna Colony, Jaipur",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101020999: {
      name: "Rahul Singh",
      address: "34, Ganges Street, Kolkata",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021123: {
      name: "Neha Verma",
      address: "56, Brahmaputra Road, Guwahati",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021255: {
      name: "Vikas Sharma",
      address: "89, Sarayu Enclave, Lucknow",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021388: {
      name: "Pooja Kapoor",
      address: "67, Godavari Heights, Pune",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021444: {
      name: "Rajiv Mishra",
      address: "90, Narmada Nagar, Bhopal",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021577: {
      name: "Kavita Singh",
      address: "43, Indus Street, Chandigarh",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021666: {
      name: "Arjun Sharma",
      address: "76, Yamuna Road, Noida",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021789: {
      name: "Ananya Das",
      address: "21, Saraswati Nagar, Kolkata",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021890: {
      name: "Sanjay Tiwari",
      address: "54, Tapti Residency, Surat",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101021947: {
      name: "Meera Reddy",
      address: "32, Krishna Colony, Hyderabad",
      registeredCourse: "B. Tech (Computer Science)"
  },
  2101022001: {
      name: "Rohan Sharma",
      address: "65, Ganges Apartments, Bangalore",
      registeredCourse: "B. Tech (Computer Science)"
  },
};

fs.writeFileSync("data/students_data.json", JSON.stringify(data, null, 2));

console.log("JSON file 'students_data.json' has been created.");
