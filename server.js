
const http = require('http');
const path = require('path');
const fs = require('fs');

const filePath = path.resolve(__dirname, 'todo.html');

http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.write('Internal Server Error');
      res.end();
      console.error('Error reading the file:', err);
      return;
    }

    // Set the content type to HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Send the HTML file content
    res.write(data);
    
    // You can add additional content if needed
   
    // End the response
    res.end();
  });

  console.log('server running....');
}).listen(8080, () => {
  console.log('Server is listening on port 8080');
});