# Shubham Pandey — Portfolio

A responsive static portfolio built with plain HTML, CSS, and JavaScript. No build step, framework, or package installation is required.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server.

## Publish with GitHub Pages

1. Push the files in this folder to your GitHub repository.
2. Open the repository’s **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the branch you pushed (usually `main`) and the `/(root)` folder, then save.
5. In **Settings → Pages**, enable **Enforce HTTPS** after the site is published, and visit its `https://` URL.

The resume PDF and a warm, optimized crop of the supplied portrait are in `public/` and linked using relative URLs, so they work for both a user site and a project site. Project illustrations are not screenshots, and live demo links were not supplied.

## Contact form

The contact form submits directly to `pandeyshubham9397@gmail.com` through FormSubmit. On the first real submission, FormSubmit sends a confirmation email to that inbox; confirm it to activate delivery. FormSubmit processes the submitted name, email address, and message. Do not test by sending a submission unless you want to activate the form.

## Local security

The browser’s “Not secure” warning when this site is opened at a LAN address such as `http://192.168.1.6:5500` is caused by the development server using plain HTTP; it is not a site-code vulnerability. Static files cannot enable HTTPS themselves. Use HTTPS on the production host (for example, GitHub Pages with **Enforce HTTPS** enabled). Avoid entering sensitive information on a plain-HTTP connection.

## Add creative video examples

The creative section includes three video showcase cards. Add a public `https://` video URL to a card’s `data-video-url` attribute in `index.html`; its **Watch** link will appear automatically. YouTube, Vimeo, or another publicly accessible video page can be linked this way. GitHub Pages is static hosting, so it links to a hosted video rather than accepting video uploads.
