const Tesseract = require('tesseract.js');
const path = require('path');

function extractTextFromImage(imagePath) {
  return new Promise((resolve, reject) => {
    Tesseract.recognize(
      imagePath,
      'eng',
      {
        logger: m => console.log(m) // Log progress
      }
    ).then(({ data: { text } }) => {
      resolve(text);
    }).catch(err => {
      reject(err);
    });
  });
}

// Example usage
const imagePath = path.resolve(__dirname, 'C:/Users/User/Desktop/invoice1.png');
extractTextFromImage(imagePath)
  .then(text => {
    console.log('Extracted Text:', text);
  })
  .catch(err => {
    console.error('Error extracting text:', err);
  });