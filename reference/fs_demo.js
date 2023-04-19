const { error } = require("console");
const fs = require("fs");
const path = require("path");

// // Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
//     if (error) throw error;
//     console.log("Folder created...");
// });

// // Create and write to file
// fs.writeFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     "Hello world!",
//     (error) => {
//         if (error) throw error;
//         console.log("File created...");
//     }
// );

// // Append file
// fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     " I love JavaScript!",
//     (error) => {
//         if (error) throw error;
//         console.log("File content added...");
//     }
// );

// Read file
fs.readFile(
    path.join(__dirname, "/test", "hello.txt"),
    "utf8",
    (error, data) => {
        if (error) throw error;
        console.log(data);
    }
);
