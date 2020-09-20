const app = require("./app");
const dbConnect = require("./utils/db");
const config = require("./config.json");
// connect to the database
dbConnect();
app.listen(config.PORT, () => {
  console.log(`App is running on port 3001`);
});
