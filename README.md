# datamitra
Data and AI Solutions Platform

## Website MVP

This repository now includes a simple one-page lead generation website for Datamitra.

### Files
- `index.html`: Page structure and content.
- `styles.css`: Site styling.
- `script.js`: Contact form handling.
- `docs/specification.md`: MVP product specification.

### Configure Form Submission
1. Open `script.js`.
2. Set `FORM_ENDPOINT` to your form provider endpoint URL.
	- Example providers: Formspree, custom serverless endpoint, Google Apps Script webhook.
3. Commit and redeploy.

If `FORM_ENDPOINT` is not set, the form will show a clear configuration message and users can use the fallback email link.

### Run Locally
Because this is a static site, you can preview it with any local server.

Example using Python:

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

### Deploy to GitHub Pages
1. Push changes to `main`.
2. In GitHub repository settings, enable Pages.
3. Select source: deploy from branch `main` and root folder `/`.
4. Save and wait for deployment.
5. Verify:
	- Mobile and desktop layout
	- CTA links
	- Contact form success/error behavior
