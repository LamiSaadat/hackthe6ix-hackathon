# Wealthsimple for All!

**_Wealthsimple for All seeks to break down the barriers to financial literacy by making an inclusive, easy-to-use, platform for those looking to learn more about investing._**

This project was created over for Hack the 6ix Wealthsimple challenge over a 36 hour period. Wealthesimple for all was made using create-react-app, react-router, and SASS for the front end, a Node/Express backend API, and Knex to query a MySQL database.

## :running: Run Locally

Follow these steps to run a local instance of Wealthsimple for All.

<!-- Run Locally -->

### Installation

# Installation

Follow these steps to run a local instance of Wealthsimple for All:  
(You'll need node, npm, and MySQL already installed.)

1. Clone or download this repo.

#### Set up the backend

2. Create a new database in MySQL called `wealthsimple_database`.
3. Install server dependencies:

   Run `npm install` from inside the server directory.

   ```bash
   $ cd server
   $ npm install
   ```

4. Run migrations
   ```bash
   $ npm run migrate
   ```
5. Run seeds
   ```bash
   $ npm run seed
   ```
6. Start the server:
   ```bash
   $ node index.js
   ```

#### Set up the frontend

7. Install client dependencies:

   Run `npm install` from inside the client directory.

   ```bash
   $ cd ../client
   $ npm install
   ```

8. Start the React app:
`bash $ npm start `
<!-- TechStack -->

## :space_invader: Tech Stack

- React
- React Router
- SASS
- Node.js
- Express
- MySQL

<!-- Roadmap -->

## :compass: Roadmap

- [ ] Implement an translating API
- [ ] Increase educational information
