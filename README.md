# Mustafai Organization of India Foundation — Website

A responsive, animated static website prepared for GitHub Pages.

## Publish on GitHub Pages
1. Extract this ZIP.
2. Upload **all files and folders inside** the extracted folder to the root of your GitHub repository. Do not upload the outer folder itself.
3. Keep `index.html` at repository root and keep `assets/` with both image files.
4. Open **Settings → Pages**. Choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then Save.
5. Wait for GitHub Pages to finish deployment. Open the published URL shown in Settings → Pages.

## Donate Now button — current behavior
The official UPI ID has not been provided, so the Donate Now button opens a WhatsApp chat to the foundation’s phone number (+91 75420 01085) with a pre-filled request for official donation details. It does **not** pretend to take a payment.

When the foundation has a verified UPI ID, open `config.js` and replace the empty `upiId` value with that exact ID. The button will then open a UPI payment intent. Test it on a phone with a UPI app installed before announcing donations.

## Contact details included
- Email: mustafaiorganizationofindia@gmail.com
- Phone / WhatsApp: +91 75420 01085
- Instagram: https://www.instagram.com/mustafai.organization.official/
- CIN: U88900BR2025NPL079085
- Registration number: 79085
- Registered address: C/O MD Sattar, Village Barauna, Tola-Bharara, Kanti, Muzaffarpur, Bihar – 843109, India

## SEO note
`robots.txt` and `sitemap.xml` are included. After GitHub Pages is live, replace the sample URL in `sitemap.xml` with the exact published URL and add the matching canonical URL to `index.html` if desired.

## Footer credit
The bottom-center credit reads: **Website Designed & Developed by AZ Digital Solutions**.
