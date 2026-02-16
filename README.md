# QR Code Generator | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)](js/app.js)
[![HTML5](https://img.shields.io/badge/HTML-5-orange)](index.html)
[![APIVerve | QR Code Generator](https://img.shields.io/badge/APIVerve-QR_Code_Generator-purple)](https://apiverve.com/marketplace/qrcodegenerator?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial)

A simple, browser-based QR code generator built with vanilla HTML, CSS, and JavaScript. Generate QR codes from any URL, text, or data in seconds.

![Screenshot](https://raw.githubusercontent.com/apiverve/qr-generator-html-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial)** - no credit card required.

---

## Features

- Generate QR codes from URLs, text, phone numbers, emails, or any string
- Choose between PNG and SVG output formats
- Adjustable margin/padding around the QR code
- One-click download of generated QR codes
- Clean, responsive UI that works on desktop and mobile
- Zero dependencies - pure HTML, CSS, and JavaScript
- No build step required - just open in browser

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/qr-generator-html-tutorial.git
   cd qr-generator-html-tutorial
   ```

2. **Add your API key**

   Open `js/app.js` and replace the placeholder with your API key:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

3. **Open in browser**

   Double-click `index.html` or run a local server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

4. **Generate a QR code**

   Enter any URL or text, choose your options, and click "Generate QR Code".

## Project Structure

```
qr-generator-html-tutorial/
├── css/
│   └── styles.css      # Styling and layout
├── js/
│   └── app.js          # API integration and application logic
├── index.html          # Main HTML file
├── screenshot.jpg      # Preview image
├── LICENSE             # MIT license
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

This tutorial demonstrates how to integrate with a REST API using vanilla JavaScript:

1. **User enters content** - URL, text, or any data to encode
2. **Form submission** - JavaScript captures the input and options
3. **API request** - A POST request is sent to the APIVerve endpoint with your API key
4. **Response handling** - The API returns a URL to the generated QR code image
5. **Display result** - The QR code is displayed and available for download

### The API Call

```javascript
const response = await fetch('https://api.apiverve.com/v1/qrcodegenerator', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  },
  body: JSON.stringify({
    value: 'https://example.com',
    format: 'png',
    margin: 0
  })
});
```

## API Reference

**Endpoint:** `POST https://api.apiverve.com/v1/qrcodegenerator`

**Headers:**

| Header | Value |
|--------|-------|
| `Content-Type` | `application/json` |
| `x-api-key` | Your API key |

**Request Body:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | The content to encode (URL, text, etc.) |
| `format` | string | No | Output format: `png` or `svg` (default: `png`) |
| `margin` | integer | No | Margin around QR code in pixels (default: `0`) |

**Example Request:**

```json
{
  "value": "https://github.com",
  "format": "png",
  "margin": 0
}
```

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "id": "abc123",
    "format": "png",
    "type": "url",
    "correction": "M",
    "size": 256,
    "margin": 0,
    "expires": 1702425600000,
    "downloadURL": "https://storage.apiverve.com/qr/abc123.png"
  }
}
```

## Use Cases

QR codes are useful for:

- **Marketing** - Link to websites, landing pages, or promotions
- **Business cards** - Share contact information (vCard)
- **Payments** - Encode payment URLs or cryptocurrency addresses
- **WiFi sharing** - Generate WiFi network credentials
- **Event tickets** - Encode ticket IDs for scanning
- **Product packaging** - Link to manuals, reviews, or registration
- **Restaurant menus** - Contactless menu access

## Customization Ideas

Want to extend this tutorial? Here are some ideas:

- Add color customization (foreground and background colors)
- Add logo/image overlay in the center of the QR code
- Add batch generation for multiple URLs
- Save generation history to localStorage
- Add QR code scanning/reading functionality

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial):

- [Barcode Generator](https://apiverve.com/marketplace/barcodegenerator?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial) - Generate various barcode formats
- [QR Code Reader](https://apiverve.com/marketplace/qrcodereader?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial) - Decode QR codes from images
- [URL Shortener](https://apiverve.com/marketplace/urlshortener?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial) - Create short URLs for your QR codes

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial) - Browse 300+ APIs
- [QR Code Generator API](https://apiverve.com/marketplace/qrcodegenerator?utm_source=github&utm_medium=tutorial&utm_campaign=qr-generator-html-tutorial) - API details
