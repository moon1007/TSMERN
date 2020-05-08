const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");
const filePath = "./13100262.csv";

/**
 * Database Layer
 * Input file conversion from CSV to JSON
 * with Try and Catch to verity existance of the input file in path
 */
try {
  if (FileSystem.existsSync(filePath)) {
    console.log("File IO & Convert CSV to JSON");
    console.log("File is ready");
    CSVToJSON()
      .fromFile(filePath)
      .then(source => {
        let firstRow = source[0];
        let dbKeys = Object.keys(firstRow);

        var stdObj = [];

        source.forEach((e, idx) => {
          // Trims spaces in key names to avoid constraints from JSON file
          // Reference : https://jetrockets.pro/blog/rmvzzosmz9-rename-the-key-name-in-the-javascript-object
          const renameKey = (object, key, newKey) => {
            const obj = clone(object);
            const targetKey = obj[key];

            delete obj[key];
            obj[newKey] = targetKey;

            return obj;
          };
          const clone = obj => Object.assign({}, obj);

          // Two Key names with space convert into one word
          e = renameKey(e, "Age group", "AgeGroup");
          e = renameKey(e, "Student response", "StudentResponse");

          stdObj.push(e);
        });

        console.log(stdObj[0]); // print fist object for checking purpose

        FileSystem.writeFile("db.json", JSON.stringify(stdObj), function(err) {
          if (err) throw err;
          console.log("complete");
        });
      });
  } else {
    console.log("No file in the path");
  }
} catch (err) {
  console.err(err);
}
