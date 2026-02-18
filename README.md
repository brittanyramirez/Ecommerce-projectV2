# Blush & Britt — E-Commerce v2 (Portfolio Project)

Blush & Britt is a full stack, responsive beauty eCommerce web application designed to deliver a modern, elegant online shopping experience.

This second iteration transforms the original static beauty storefront into a dynamic full stack application powered by a MySQL database, Node/Express backend, and React (Vite) frontend architecture.

## Live Demo
 my deployed link will go here 


## Technologies Used
Frontend

- React.js (Vite) – Fast, component-based UI architecture

- JavaScript (ES6+) – Dynamic rendering and interaction logic

- React Router – Seamless client-side navigation

- Fetch API – Retrieves product data from backend

- Tailwind CSS (CDN) – Responsive styling and modern UI design

## Backend

- Node.js – JavaScript runtime environment

- Express.js – RESTful API server

- MySQL – Relational database storing product data

- dotenv – Environment variable management


### Features
## Home Page

- Full width Hero Video :  Modern beauty-focused visual branding

- Auto Rotating Product Slider : Highlights featured products

- Scroll Indicator : Guides users through page flow

- Category Tiles : Quick access to Blush, Gloss, and Skin Tint collections

- Marketing Gallery Page  Collage style promotional visuals

## Products Page 
- Dynamic Product Rendering : Products fetched directly from MySQL database

- 12 Professional Beauty Products including:

- Blush

- Lip Gloss

- Skin Tint

- Functional Filters:

- Product Type

- Minimum Price

- Maximum Price

- Apply Filter Button : User controlled filtering

- Add to Cart Button : Confirmation feedback ("Added to Cart")

- Back to Top Button : Improved user navigation

- Responsive Grid Layout : Optimized for all screen sizes

## Contact Page

- Clean Contact Form with:

- Name

- Email

- Message

- Custom JavaScript Validation

- Inline error messaging (no browser alerts)

- Responsive layout for desktop, tablet, and mobile

## Global Components

- Reusable Navbar Component

- Clickable Logo linking to Home

- Hover animations

- Active page highlighting

- Reusable Footer Component

- Logo display

- Social media links

- Contact navigation

- Fully Responsive Design across devices

### Setup and Installation 

1. Clone Repository 
run in terminal : git clone <your-repo-url>
cd bb-ecommerceV2
2. Install dependencies 
In two separate terminals 
run: cd client then npm install 
next terminal: cd server and npm install 
3. Setup Environment Variables
- create a .env file inside the server folder: 
4. Create your Database:
CREATE DATABASE blush_britt;
USE blush_britt;
* create a products table with fields:
- id (INT, AUTO_INCREMENT, PRIMARY KEY)

- name (VARCHAR)

- description (TEXT)

- price (DECIMAL)

- type (VARCHAR)

- imageUrl (VARCHAR)
5. Run application 
server: cd server , node index.js 
Client: cd client , npm run dev
6. Visit : http://localhost:5173

### Lessons Learned

- Through Blush & Britt V2, I strengthened my understanding of:

- Full stack architecture (React + Node + MySQL)

- Environment variable configuration

- REST API filtering logic

- Dynamic rendering from database data

- Debugging database inconsistencies

- Component based UI structure

- Responsive beauty focused design
