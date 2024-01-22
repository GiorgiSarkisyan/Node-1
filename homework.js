// პირველი დავალება
const moment = require("moment");

const date1 = moment("2024-01-22");
const date2 = moment("2024-09-01");

const differenceInDays = date2.diff(date1, "days");

console.log(differenceInDays);

// მეორე დავალება
const fs = require("fs");

function checkIfFileExists(filePath) {
  try {
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      console.log(`'${filePath}' საღოლ იპოვე`);
    } else {
      console.error(`'${filePath}' საღოლ ვერ იპოვე`);
    }
  } catch (error) {
    console.error(`'${filePath}' არ არსებობს.`);
  }
}

checkIfFileExists("example.js");
// მესამე დავალება => server.js
