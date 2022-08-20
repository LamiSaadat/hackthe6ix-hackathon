const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const app = require("./app");

// LISTEN ON PORT
const port = process.env.PORT || 80800;
app.listen(port, () => {
  console.log(`Listening on port: ${port} 🚀🚀`);
});
