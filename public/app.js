const endPoint = "http://localhost:8080/cities";
const mainTable = document.getElementById("main");
const sortBtn = document.getElementById("sort-btn");

let ascOrder = true;

/*************************************************
 * Utility Functions
 *************************************************/

const sortTable = (asc = true) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    let rows = mainTable.rows;

    for (let i = 1; i < rows.length - 1; i++) {
      const a = rows[i].innerText.toLowerCase();
      const b = rows[i + 1].innerText.toLowerCase();
      swapRequired = asc ? a > b : a <= b;

      if (swapRequired) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        sorted = false;
        break;
      }
    }
  }
};

/*************************************************
 * Network Functions
 *************************************************/

/**
 * Fetches location data from API end point
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
 * @param {State, city} location
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
  getLocations().then((locations) =>
    locations.forEach((location) => {
      addCityElem(location.city);
    })
  );
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
