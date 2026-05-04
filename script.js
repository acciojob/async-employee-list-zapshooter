async function loadAndSortEmployees() {
  try {
    const response = await fetch('./employees.json');

    if (!response.ok) {
      throw new Error(`Failed to load employees.json: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Sort by age ascending (stable, non-destructive)
    const sortedEmployees = [...data.employees].sort((a, b) => a.age - b.age);

    // ✅ Must call console.log with ONLY the array — no extra label argument
    console.log(sortedEmployees);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

loadAndSortEmployees();