const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./user");
const DetailsModel = require("./detalhe");
const DataModel = require("./data");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

//for stripe
require("dotenv").config();
const stripe = require("stripe");

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(cors());

//app.use('/payment', payment);

mongoose.connect(
  "mongodb+srv://christian2:christian2@beatstore.todsx.mongodb.net/Events?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//set requests

app.post("/payment", async (req, res) => {
  const { token = {}, amount = 0 } = req.body;

  if (!Object.keys(token).length || !amount) {
    res.status(400).json({ sucess: false });
  }
  const { id: customerId } = await stripe.customes
    .create({
      email: token.email,
      source: token.id,
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
  if (!customerId) {
    res.status(500).json({ sucess: false });
  }
  const invoiceId = `${token.email}-${Math.random().toString()}-${
    Date.now().toString
  }`;

  const charge = await stripe.charges
    .create(
      {
        amount: amount * 100,
        currency: "USD",
        customer: customerId,
        receipt_email: token.email,
        description: "Book",
      },
      { idempotencyKey: invoiceId }
    )
    .catch((e) => {
      console.log(e);
      return null;
    });

  if (!charge) {
    res.status(500).json({ sucess: false });
    return;
  }

  res.status(201).json({ sucess: true });
  res.json("Your payment was successful");
});

app.post("/setDetails", async (req, res) => {
  const details = DetailsModel.create({
    timeInicio: req.body.timeInicio,
    timeFim: req.body.timeFim,
    place: req.body.place,
    imageNumber: req.body.imageNumber,
    resolution: req.body.resolution,
    type: req.body.type,
    price: req.body.price,
  });
  try {
    details.save = () => {};
    res.json("saved on database");
  } catch (err) {
    res.json("Error while saving ", err);
  }
});

app.get("/loginTest", async (req, res) => {
  const user = UserModel.create({
    email: "email test",
    password: "password test",
  });
  try {
    user.save = () => {};
    res.json("Login tested");
  } catch (err) {
    res.json("error", err);
  }
});

app.post("/setData", async (req, res) => {
  const details = DataModel.create({
    Nome: req.body.Nome,
    Apelido: req.body.Apelido,
    Sexo: req.body.Sexo,
    Idade: req.body.Idade,
    Ocupacao: req.body.Ocupacao,
    Endereco: req.body.Endereco,
  });
  try {
    details.save = () => {};
    res.json("saved on database");
  } catch (err) {
    res.json("Error while saving ", err);
  }
});

app.get("/detailsTest", async (req, res) => {
  const details = DetailsModel.create({
    timeInicio: "timeInicio test",
    timeFim: "TimeFim test",
    place: "Place test",
    imageNumber: "ImageNumber test",
    resolution: "Resolution test",
    type: "Type test",
    price: "Price test",
  });
  try {
    details.save = () => {};
    res.json("Details tested");
  } catch (err) {
    res.json("error", err);
  }
});

app.post("/login", async (req, res) => {
  const userExists = await UserModel.findOne({ email: req.body.email });
  const hashedPassword = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync()
  );
  if (!userExists) {
    const user = await UserModel.create({
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      user.save = () => {};
      console.log("New user created");
    } catch (err) {
      console.log("Error while creating user", err);
    }
  } else {
    const passwordMatches = bcrypt.compareSync(
      req.body.password,
      userExists.password
    );
    if (!passwordMatches) {
      console.log("incorret password");
    } else {
      console.log("logged in");
    }
  }
});

//get requests
app.get("/getDetails", (req, res) => {
  const details = DetailsModel.find({}, (err, found) => {
    if (err) {
      res.json("Error while retrieving data" + err);
    } else {
      res.json(found);
    }
  });
});

app.get("/getData", (req, res) => {
  const data = DataModel.find({}, (err, found) => {
    if (err) {
      res.json("Error while retrieving data" + err);
    } else {
      res.json(found);
    }
  });
});

app.get("/logs", (req, res) => {
  const user = UserModel.find({}, (err, found) => {
    if (err) {
      res.json("Error while retrieving logs" + err);
    } else {
      res.json(found);
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listenting on port ${PORT}...`));
