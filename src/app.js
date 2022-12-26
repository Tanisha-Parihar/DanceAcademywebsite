
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const User=require("./models/userdance");
require("./db/conn");
const port = process.env.PORT || 8004;


const partialspath = path.join(__dirname, "../templates/partials");
const templtaepath = path.join(__dirname, "../templates/views");
const staticpath = path.join(__dirname, "../public");

app.use("./css",express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("./js",express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("./jq",express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views", templtaepath);

app.use(express.static(staticpath));
hbs.registerPartials(partialspath);

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/contact", async(req, res) => {
  try{
        // res.send(req.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
  }catch(e){
    res.status(500).send(e);
  }
})

app.get("/*", (req, res) => {
  res.send("error 404 page could not be found")
})

app.listen(port, () => {
  console.log(`server is listening on the port http://localhost:${port}`);
})