# QR Code Generator | APIVerve Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML-no_build-E34F26)](index.html)
[![APIVerve | QR Code Generator](https://img.shields.io/badge/APIVerve-QR_Code_Generator-purple)](https://apiverve.com/marketplace/qrcodegenerator?utm_source=github&utm_medium=template&utm_campaign=qr-generator-html-tutorial)

Turn a URL or any text into a QR code image you can download and print.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fapiverve%2Fqr-generator-html-tutorial&project-name=qr-code-generator&repository-name=qr-code-generator&env=APIVERVE_API_KEY&envDescription=Your%20APIVerve%20API%20key.%20Free%20to%20create%2C%20no%20card%20needed.&envLink=https%3A%2F%2Fdashboard.apiverve.com%2Fsignup%3Fapi%3Dqrcodegenerator%26utm_source%3Dvercel%26utm_medium%3Dtemplate%26utm_campaign%3Dqr-generator-html-tutorial)

![QR Code Generator with a code for apiverve.com](https://raw.githubusercontent.com/apiverve/qr-generator-html-tutorial/main/screenshot.png)

---

### Get your free API key

This template needs an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com/signup?api=qrcodegenerator&utm_source=github&utm_medium=template&utm_campaign=qr-generator-html-tutorial)**, no credit card required.

---

## Deploy in one click

Click **Deploy with Vercel** above. Vercel copies this repo to your GitHub account, asks for your `APIVERVE_API_KEY`, and gives you a live URL about a minute later.

## Run it locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/apiverve/qr-generator-html-tutorial.git
   cd qr-generator-html-tutorial
   ```

2. **Add your API key**
   ```bash
   cp .env.example .env
   ```
   Then open `.env` and set `APIVERVE_API_KEY`.

3. **Start it**
   ```bash
   npm run dev
   ```

4. **Open** `http://localhost:3000`

`npm run dev` serves the page and runs the `api/` functions together, the same way Vercel does, so you don't need the Vercel CLI.

## How it works

1. The page (`index.html`) calls `POST /api/qr`.
2. `api/qr.js` checks the input, then calls QR Code Generator. Your API key stays on the server and never reaches the browser.
3. The page shows the result.

```
├── api/qr.js            # Vercel function: checks input, calls APIVerve with your key
├── lib/apiverve.js      # Shared by api/: key check, rate limit, the APIVerve call
├── lib/dev-api.js       # Runs api/ locally (Vercel ignores it)
├── dev.mjs              # `npm run dev`: serves the page and api/ on localhost
├── index.html           # The page
├── js/app.js            # The page's JavaScript
├── css/styles.css
├── .env.example         # Copy to .env and add your key
└── package.json
```

### The API call

```javascript
const res = await fetch('https://api.apiverve.com/v1/qrcodegenerator', {
  method: 'POST',
  headers: { 'x-api-key': process.env.APIVERVE_API_KEY, 'Content-Type': 'application/json' },
  body: JSON.stringify({ value: 'https://example.com', margin: 0, format: 'png' })
});
const { data } = await res.json();
// data.downloadURL → a PNG of the QR code
```

The download link the API returns expires, so save the image if you need to keep it. SVG output and custom colors are available on paid plans.

## Before you share your URL

Once deployed, anyone who finds your URL can use it on your API key. Each visitor can make 10 requests a minute, which is fine for a demo. The limit is kept in memory, so it isn't shared between serverless instances. For production:

- Put the page behind your own sign-in, or
- Move the limit to a shared store such as [Upstash Redis](https://upstash.com/), or
- Call the route only from your own backend.

## Ideas to extend it

- Print a QR code on each order's packing slip that links to its tracking page
- Make codes for Wi-Fi details or contact cards (paid plans)
- Read codes back with the [QR Code Reader](https://github.com/apiverve/qr-reader-html-tutorial) template

## API reference

- [QR Code Generator](https://apiverve.com/marketplace/qrcodegenerator?utm_source=github&utm_medium=template&utm_campaign=qr-generator-html-tutorial): `POST https://api.apiverve.com/v1/qrcodegenerator`
- [Full documentation](https://docs.apiverve.com?utm_source=github&utm_medium=template&utm_campaign=qr-generator-html-tutorial)

## Tech stack

- Plain HTML, CSS and JavaScript: no framework and no build step
- **Vercel Functions** in `api/` for the server side (Node.js 20+)
- Deploys to Vercel as-is: the page is served as static files, and each file in `api/` becomes a function

## License

MIT. See [LICENSE](LICENSE).
