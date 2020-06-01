# Getting Started:
Please start by cloning the repository onto your machine.

Run ```npm install``` to install the dependencies.

Start the local server on your machine using ```node server.js```

# Project Instructions:
For this project you will be building a very simple application to test your skills in JavaScript. You will be using a small local server utilizing Node.js and Express. All of the necessary dependencies to complete this project are already added to it, please do not add any additional dependencies. 

The project will be a simple table that displays cities in the State of Oregon. There is an array (data.json) at the root of the project with all of the city data, this is the data you will be using for the project. You may notice that some of the cities are not in Oregon, any city that is not in Oregon should not show up on your table. Rules for completing the project have been outlined below.

* All city data for Oregon should be displayed in a table.
* This can be done using the HTML table or if you prefer you can build out your own table.
* All HTML should appear in the index.html file inside of the public folder.
* City data needs to be grabbed by sending a request to an endpoint you will be responsible for building. The endpoint should be built inside of the server.js file using Express.
* The city data returned from your Express endpoint should be supplied by the data.json file found at the root of the project.
* City data should be grabbed using a fetch request from the app.js file found in the public folder.
* Only cities in Oregon should be displayed in the table.
* The table must be able to be sorted both in alphabetical order and reverse alphabetical order using a button on click.
* All logic for sorting the table and gathering the data should be written in the app.js file found in the public folder.
* There is no need to worry about styling for this project but if you would like to add some feel free to.
* There should be no additional dependencies added to the project.
* Please use Es6+ syntax for all JavaScript.

# Solution Endpoints

- Main Page: http://localhost:8080
- City Data: http://localhost:8080/locations

