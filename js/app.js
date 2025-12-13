/**
 * QR Code Generator - Tutorial Example
 *
 * A simple example using the APIVerve QR Code Generator API.
 * https://apiverve.com/marketplace/qrcodegenerator
 */

// ============================================
// CONFIGURATION - Add your API key here
// Get a free key at: https://dashboard.apiverve.com
// ============================================
const API_KEY = 'your-api-key-here';

// API endpoint
const API_URL = 'https://api.apiverve.com/v1/qrcodegenerator';

/**
 * Generate a QR code from the form inputs
 */
async function generateQR() {
  // Get form values
  const content = document.getElementById('content').value.trim();
  const margin = document.getElementById('margin').value;
  const format = document.getElementById('format').value;

  // Get DOM elements
  const btn = document.getElementById('generateBtn');
  const error = document.getElementById('error');
  const result = document.getElementById('result');
  const qrImage = document.getElementById('qrImage');
  const downloadLink = document.getElementById('downloadLink');

  // Validate API key
  if (API_KEY === 'your-api-key-here') {
    showError('Add your API key to js/app.js first');
    return;
  }

  // Validate content
  if (!content) {
    showError('Please enter content for the QR code');
    return;
  }

  // Reset UI state
  error.classList.remove('show');
  result.classList.remove('show');
  btn.disabled = true;
  btn.textContent = 'Generating...';

  try {
    // Make API request
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({
        value: content,
        format: format,
        margin: margin
      })
    });

    const data = await response.json();

    // Handle successful response
    if (data.status === 'ok' && data.data) {
      qrImage.src = data.data.downloadURL;
      downloadLink.href = data.data.downloadURL;
      downloadLink.download = `qr-code.${format}`;
      result.classList.add('show');
    } else {
      // Handle API error
      showError(data.error || 'Failed to generate QR code');
    }
  } catch (err) {
    // Handle network error
    showError('Request failed. Check your API key and try again.');
    console.error('API Error:', err);
  } finally {
    // Reset button state
    btn.disabled = false;
    btn.textContent = 'Generate QR Code';
  }
}

/**
 * Display an error message
 */
function showError(message) {
  const error = document.getElementById('error');
  error.textContent = message;
  error.classList.add('show');
}

// Allow Enter key to submit the form
document.getElementById('content').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') generateQR();
});
