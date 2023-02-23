const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express();
app.use(express.json());

const costumers = [];

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = costumers.some((customer) => customer.cpf === cpf);

  if (customerAlreadyExists) {
    return res.status(400).json({ error: "Customer already exists!" })
  }

  const id = uuidv4();

  costumers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });

  return res.status(201).end();
});

app.listen(3333);