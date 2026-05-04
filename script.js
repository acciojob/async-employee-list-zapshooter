//your JS code here. If required.

// Async function to fetch and sort employees by age
async function loadAndSortEmployees() {
  try {
    // Fetch the JSON file asynchronously
    const response = await fetch('./employees.json');

    // Check if the response is OK (status 200–299)
    if (!response.ok) {
      throw new Error(`Failed to load employees.json: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON body asynchronously
    const data = await response.json();

    // Sort employees by age in ascending order (non-destructive copy)
    const sortedEmployees = [...data.employees].sort((a, b) => a.age - b.age);

    // Log the sorted list to the console
    console.log('Employees sorted by age (ascending):');
    console.log(sortedEmployees);

    // Also render a simple table on the page for visibility
    renderTable(sortedEmployees);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Helper: render the sorted list as an HTML table
function renderTable(employees) {
  const table = document.createElement('table');
  table.innerHTML = `
    <caption>Employees — Sorted by Age (Ascending)</caption>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      ${employees.map((emp, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${emp.name}</td>
          <td>${emp.age}</td>
          <td>${emp.department}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
  document.body.appendChild(table);
}

// Run on page load
loadAndSortEmployees();