const fs = require("fs");
const fileSource = process.argv[2];
const fileDestination = process.argv[3];

if (!fileSource) throw new Error("File Source Required");
if (!fileDestination) throw new Error("File Destination Required");

fs.copyFile(fileSource, fileDestination, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`File ${fileSource} has been copied as ${fileDestination}`);
});
