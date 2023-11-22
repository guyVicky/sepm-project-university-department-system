const researchData = {
  P001: {
    title: "Enhancing Sustainable Agriculture Practices",
    abstract:
      "This project focuses on implementing sustainable agricultural practices to improve crop yield while minimizing environmental impact.",
    status: "Ongoing",
    startDate: "2023-01-01",
    endDate: "2024-12-31",
    funding: "National Agriculture Foundation",
    collaborators: ["Dr. A. Patel", "Dr. S. Khan"],
    updates: [
      { date: "2023-03-15", description: "Project officially launched." },
      {
        date: "2023-06-01",
        description: "Completed first phase of data collection.",
      },
    ],
  },
  P002: {
    title: "Machine Learning for Medical Diagnosis",
    abstract:
      "Developing machine learning models to assist in early medical diagnosis, particularly in the field of cardiology.",
    status: "Completed",
    startDate: "2021-05-01",
    endDate: "2022-04-30",
    funding: "Health Research Council",
    collaborators: ["Dr. M. Gupta", "Dr. R. Sharma"],
    publications: [
      {
        title: "A Machine Learning Approach to Early Heart Disease Detection",
        authors: ["Dr. S. Singh", "Dr. R. Sharma"],
        year: 2022,
        journal: "Journal of Medical Informatics",
      },
      {
        title: "Improving Diagnostic Accuracy with Ensemble Learning",
        authors: ["Dr. A. Patel", "Dr. M. Gupta"],
        year: 2023,
        conference: "International Conference on Health Informatics",
      },
    ],
  },

  P003: {
    title: "Urban Sustainability and Green Infrastructure",
    abstract:
      "Analyzing the impact of green infrastructure on urban sustainability and proposing strategies for implementing eco-friendly practices in cities.",
    status: "Planning",
    startDate: "2023-08-01",
    endDate: null,
    funding: "City Planning Commission",
    collaborators: ["Dr. N. Verma", "Dr. K. Singh"],
    updates: [
      { date: "2023-08-15", description: "Project planning initiated." },
      { date: "2023-10-01", description: "Research team formed." },
    ],
  },
};

function getResearch() {
  const projectID = document.getElementById("projectID").value;
  if (projectID in researchData) {
    generateProjectTable(projectID);
  }
}

function generateProjectTable(projectId) {
  const tableContainer = document.getElementById("table-container");

  if (!researchData[projectId]) {
    console.error(`Project with ID ${projectId} not found.`);
    return;
  }

  const projectData = researchData[projectId];

  const table = document.createElement("table");
  table.classList.add("project-table");

  const tbody = document.createElement("tbody");

  Object.entries(projectData).forEach(([key, value]) => {
    const row = document.createElement("tr");

    const keyCell = document.createElement("td");
    keyCell.textContent = key;
    row.appendChild(keyCell);

    const valueCell = document.createElement("td");

    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        // Format publications as a list
        const publicationsList = document.createElement('ul');
        value.forEach(publication => {
            const listItem = document.createElement('li');
            listItem.textContent = Object.entries(publication).map(([prop, val]) => `${prop}: ${val}`).join(', ');
            publicationsList.appendChild(listItem);
        });
        valueCell.appendChild(publicationsList);
    } else {
        // Display other values as is
        valueCell.textContent = value;
    }


    row.appendChild(valueCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}
