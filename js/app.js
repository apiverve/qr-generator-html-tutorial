/**
 * QR Code Generator, an APIVerve template.
 *
 * Turn a URL or text into a QR code you can download. The page calls /api/qr (api/qr.js),
 * which holds your API key and calls the QR Code Generator API:
 * https://apiverve.com/marketplace/qrcodegenerator
 */

/**
 * Generate a QR code from the form inputs
 */
async function generateQR() {
  // Get form values
  const content = document.getElementById('content').value.trim();
  const margin = document.getElementById('margin').value;

  // Get DOM elements
  const btn = document.getElementById('generateBtn');
  const error = document.getElementById('error');
  const result = document.getElementById('result');
  const qrImage = document.getElementById('qrImage');
  const downloadLink = document.getElementById('downloadLink');

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
    // Your server route adds the key and calls APIVerve
    const response = await fetch('/api/qr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: content, margin: Number(margin) })
    });

    const data = await response.json();

    if (response.ok) {
      qrImage.src = data.downloadURL;
      downloadLink.href = data.downloadURL;
      result.classList.add('show');
    } else {
      showError(data.error || 'Failed to generate QR code');
    }
  } catch (err) {
    showError('Couldn’t reach the server. Try again.');
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
