//XML http request Samples

var request = new XMLHttpRequest();
request.open("GET","https://www.google.com");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
}


/*
const fetch = require('node-fetch'); // Use this line if you are running the code in Node.js
const fs = require('fs');

const urls = ['https://www.google.com', 'https://www.yahoo.com', 'https://www.amazon.com'];

// Function to download content from a URL and save it as an HTML file
const downloadAndSave = (url, filename) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      fs.writeFileSync(filename, data);
      console.log(`Downloaded and saved ${url} as ${filename}`);
    })
    .catch(error => {
      console.error(`Error downloading ${url}:`, error);
    });
};

// Use Promise.all to handle multiple fetch requests
Promise.all(urls.map((url, index) => downloadAndSave(url, `output${index + 1}.html`)))
  .then(() => {
    console.log('All downloads completed.');
  })
  .catch(error => {
    console.error('Error during downloads:', error);
  });
*/