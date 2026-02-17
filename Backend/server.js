<<<<<<< HEAD
require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
=======
require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
>>>>>>> 97d6a8b9c8949fdabad2be4eca703e5ef61b3f65
});