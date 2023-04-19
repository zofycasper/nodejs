const path = require("path");
const fs = require("fs").promises;
const http = require("http");

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return data;
    } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
        return null;
    }
}

function serverError(res) {
    res.statusCode = 500;
    res.end("Internal Server Error");
}

const server = http.createServer(async (req, res) => {
    if (req.url === "/") {
        const index = await readFile("index.html");
        if (index) {
            res.end(index);
        } else serverError(res);
    }
    // Add more route handling logic here for other pages

    if (req.url === "/about") {
        const about = await readFile("about.html");
        if (about) {
            res.end(about);
        } else serverError(res);
    }

    if (req.url === "/contact-me") {
        const contact = await readFile("contact-me.html");
        if (contact) {
            res.end(contact);
        } else serverError(res);
    } else {
        res.statusCode = 404;
        const notFound = await readFile("404.html");
        if (notFound) {
            res.end(notFound);
        } else serverError(res);
    }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
});
