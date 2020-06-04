const endPoint = "http://localhost:8080/locations";
const mainTable = document.getElementById("main");
const sortBtn = document.getElementById("sort-btn");

let ascOrder = true;

/*************************************************
 * Utility Functions
 *************************************************/

/**
 * Sorts the main table in ascending or descending
 * order based on the asc parameter. If asc is truthy,
 * the table will be sorted in ascending order.
 */
const sortTable = () => {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    let rows = mainTable.rows;

    for (let i = 1; i < rows.length - 1; i++) {
      const a = rows[i].innerText.toLowerCase();
      const b = rows[i + 1].innerText.toLowerCase();
      swapRequired = ascOrder ? a > b : a <= b;

      if (swapRequired) {
        mainTable.insertBefore(rows[i + 1], rows[i]);
        sorted = false;
        break;
      }
    }
  }

  const order = ascOrder ? "Z-A \u2191" : "A-Z \u2193";
  sortBtn.textContent = `Sort ${order}`;
};

/*************************************************
 * Network Functions
 *************************************************/

/**
 * Fetches location data from API end point.
 */
const getLocations = () => {
  return fetch(endPoint)
    .then((res) => res.json().then((location) => location))
    .catch((e) => console.error(e));
};

/*************************************************
 * Content Creation
 *************************************************/

/**
 * Generates a new html table row which is inserted
 * onto the end of the main table.
 */
const addCityElem = (city) => {
  const tr = document.createElement("tr");
  const content = document.createTextNode(city);
  tr.appendChild(content);
  mainTable.appendChild(tr);
};

/**
 * Builds an html table populated with
 * city names based on fetched data.
 */
const buildCityTable = () => {
  getLocations().then((locations) => {
    locations.forEach((location) => addCityElem(location.city));
    sortTable();
  });
};

/*************************************************
 * Main Execution
 *************************************************/

// Handle Click Events
sortBtn.addEventListener("click", () => {
  ascOrder = !ascOrder;
  sortTable(ascOrder);
});

// Build Main Table
buildCityTable();
