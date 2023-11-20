// server.js
const express = require("express");
const agendaRoutes = require("./routes/agendaRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/contactos", agendaRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Algo salió mal!" });
});

app.listen(port, () => {
  console.log(Corriendo en puerto ${port});
});