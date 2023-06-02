import express from 'express';
import bodyParser from 'body-parser';
//const express = require('express');
const app = express();
const port = 3000;

// Example array to perform CRUD operations on
let data = [];

// Middleware to parse incoming JSON data
app.use(express.json());

// GET all items
app.get('/persons', (req, res) => {
  res.json(data);
});
app.get('/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = data.find(p => p.id === id);

  if (!person) {
    return res.status(404).send('Person not found');
  }

  res.send(person);
});

app.post('/persons', (req, res) => {
  const person = req.body;
  person.id = data.length + 1;
  data.push(person);
  res.json(person);
});

app.put('/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPerson = req.body;
  const index = data.findIndex(person => person.id === id);
  data[index] = { id, ...updatedPerson };
  res.json(data[index]);
});

app.delete('/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(person => person.id !== id);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});