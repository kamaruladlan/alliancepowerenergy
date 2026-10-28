# Alliance Power & Energy — GitHub Pages edition

Website: https://kamaruladlan.github.io/alliancepower-energy/

## Update the existing repository

1. Extract `alliance-website-github-pages.zip`.
2. In the `alliancepower-energy` repository, choose Add file > Upload files.
3. Upload the CONTENTS of the extracted folder, including `assets/` and `.nojekyll`, at the repository root. Replace the earlier files. Do not upload the ZIP itself or nest everything in an extra folder.
4. Commit to the branch selected by GitHub Pages (normally `main`). The existing Pages configuration can remain `main` / `(root)`.
5. Wait for the deployment to finish, then refresh the live website.

## Changes in this edition

- Canonical URLs, social-sharing URLs, and image URLs point to the GitHub Pages address above.
- Normal pages allow indexing. The error page remains noindex.
- Sitemap URLs match this site, and the 404 page is excluded.
- `.nojekyll` disables Jekyll processing for these plain HTML files.
- Error-page links and assets use the `/alliancepower-energy/` project prefix so they also work for nested missing URLs.

The project-folder robots file is not the origin's authoritative robots file. Crawlers normally read `https://kamaruladlan.github.io/robots.txt`. The HTML noindex setting has been removed from normal pages. Indexing is not guaranteed; the sitemap can be submitted through Google Search Console after ownership verification.

## Contact behaviour

The enquiry form prepares an email or WhatsApp message for the visitor to review and send. No website mail server, lead database or analytics account is connected. No test enquiry has been sent.

The static package includes nine main pages plus privacy and error pages. Capability photos are illustrative and do not establish equipment ownership or completed project history. Confirm company copy and image permissions before using the site as the company's official presence.

No DNS, email settings or existing company-domain hosting have been changed. Migrating `alliancepower-energy.com` is a separate step. Legacy-path redirects require a separate implementation; a CSV of URL mappings does not itself create redirects.
