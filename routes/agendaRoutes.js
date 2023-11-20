// routes/agendaRoutes.js
const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://www.raydelto.org/agenda.php");
    const contactos = response.data;
    res.send(contactos);
  } catch (error) {
    res.status(500).send({ error: "No se pudieron obtener los contactos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoContacto = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
    };

    const response = await axios.post(
      "http://www.raydelto.org/agenda.php",
      nuevoContacto
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: "No se pudo almacenar el contacto" });
  }
});

module.exports = router;