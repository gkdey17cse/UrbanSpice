## Directory Structure 
```bash
ROOT/
│   package.json
│   tailwind.config.js
│   postcss.config.js
│
├── public/
│   ├── css/
│   │   tailwind.css
│   │   (your compiled CSS)
│   ├── js/
│   │   (your JS files)
│   └── assets/
│       (all images / pdf and others)
│
├── views/
│   ├── partials/
│   │   header.ejs
│   │   footer.ejs
│   ├── about.ejs
│   ├── menu.ejs
│   ├── contact.ejs
│   ├── order.ejs
│   ├── bookatable.ejs
│   ├── faqs.ejs
│   ├── testimonials.ejs
│   └── index.ejs
│
├── routes/
│   └── index.js
│
└── server.js
```

- To build the tailwind css
```bash
npx tailwindcss -i ./src/input.css -o ./public/css/tailwind.css --watch
```