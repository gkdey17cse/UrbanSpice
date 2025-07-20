# Urban Spice – A End to End Restaurant Application

**Urban Spice** is a full-stack restaurant website that combines elegant design with rich interactive features. It includes a fully functional frontend and backend built using modern web technologies. This project provides users with a seamless experience from exploring the menu to booking tables and placing orders with integrated online payment functionality.

**Deployed Links:**

* Static version: [https://gkdey17cse.github.io/UrbanSpice/index.html](https://gkdey17cse.github.io/UrbanSpice/index.html)
* Full-stack version: [https://urban-spice.vercel.app](https://urban-spice.vercel.app)

---

## Features

* Fully responsive user interface designed using Tailwind CSS.
* Dynamic page rendering using EJS templating with Node.js and Express.
* Integrated `Razorpay payment gateway` for secure online payments.
* Real-time `live billing` system on the order page.
* Interactive scroll-based animations using `Wow.js` and `Animate.css`.
* Visual content sliders using Owl Carousel for menu highlights and testimonials.
* Smooth form validation using `jQuery` Validate for booking, contact, and order forms.
* Dynamic menu filtering and meal-type switching with JavaScript.
* Multiple EJS views including homepage, about, FAQs, menu, order now, book table, contact, testimonials, and success/error pages.
* 404 page for invalid routes with user-friendly messaging.
* Organized modular structure with routing, public assets, and views.

---

## Directory Structure

```
ROOT/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── public/
│   ├── css/
│   │   ├── input.css
│   │   ├── tailwind.css
│   │   └── animate.css
│   ├── js/
│   │   ├── about.js
│   │   ├── chefsDetails.js
│   │   ├── faqs.js
│   │   ├── menuComplete.js
│   │   ├── menuHero.js
│   │   ├── menuIndex.js
│   │   └── testimonials.js
│   └── assets/
│       ├── data/
│       └── Image/
├── views/
│   ├── about.ejs
│   ├── booktable.ejs
│   ├── contact.ejs
│   ├── faqs.ejs
│   ├── index.ejs
│   ├── menu.ejs
│   ├── ordernow.ejs
│   ├── ordersuccess.ejs
│   ├── pagenotfound.ejs
│   ├── paymentsucess.ejs
│   └── testimonials.ejs
├── routes/
│   └── index.js
├── server.js
├── .gitignore
├── Readme.md
```

---

## How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Build Tailwind CSS

```bash
npx tailwindcss -i ./public/css/input.css -o ./public/css/tailwind.css --watch
```

Or run the build script:

```bash
npm run build
```

### 3. Start Development Server

```bash
npm run dev
```

This will use `nodemon` and start the server from `server.js`.

---

## Technologies Used

### Frontend

* **HTML5** for content structure
* **Tailwind CSS** for utility-first responsive design
* **JavaScript** and **jQuery** for dynamic client-side interaction
* **Animate.css** and **Wow\.js** for smooth animation effects
* **Owl Carousel** for responsive sliders and carousels

### Backend

* **Node.js** for server-side runtime
* **Express.js** for routing and HTTP request handling
* **EJS (Embedded JavaScript Templates)** for rendering dynamic HTML views
* **Razorpay** for secure payment gateway integration

---

## Website Preview

![Urban Spice Preview](/public/assets/Image/thumbnail.jpg)

---

## Author

**Gour Krishna Dey**

- Indraprastha Institute of Information Technology Delhi

© 2025 Gour Krishna Dey. All rights reserved.
