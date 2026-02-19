const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from SAP BTP CI/CD Demo!demo1secondpush"
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


