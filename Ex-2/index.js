const express = require("express");
const PORT = 4000;
const app = express();
const {adminAuth, userAuth} = require("./middleware/auth")
app.use("/admin", adminAuth);
// app.use("/user", );
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/admin/apple", (req, res) => {
  const a = 10;
  const b = 15;
  res.send(`The secret Data is ${a + b}`);
});

app.get("/admin/FBI", (req, res) => {
  const data = "abarackatabara";
  res.send(`The secret data is ${data}`);
});
app.get("/user/login", (req, res) => {
  res.send("User Login success");
});
app.use("/user", userAuth);
app.get("/user",(req,res)=>{
    res.send("User Authotication success")
})
app.listen(PORT, () => {
  console.log(`Server started in localhost:${PORT}`);
});
