const Libro = require("../models/libro");

var libroController = {};

//Mostar todos los alumnos
libroController.mostar = (req, res) => {
  Libro.aggregate([{
    $lookup:{
      "from":"editorial",
      "foreignField": "_id",
      "localField": "Editorial",
      "as": "Editorial2"
    }
  }]).exec((err, Libro) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log("The INDEX");
    console.log(Libro);
    return res.render("admin_buscar", {
      Libro: Libro,
    });
  });
};

//Registrar Libro
libroController.crear = (req, res, next) => {
  console.log("Registrando Libro");
  const libro = new Libro({
    Nombre: req.body.nombre,
    Autor: "",
    Editorial: "",
    LugarEdicion: req.body.lugarEd,
    FechaEdicion: req.body.fechaEd,
    AñoEntrada: req.body.anioEn,
    UnidadesDisponibles: req.body.unidadesD,
    TotalUnidades: req.body.totalUn,
    NumPag: req.body.numPag,
    NumInventario: req.body.numIn,
    AnaquelCharola: "",
    Clasificacion: "",
    Observaciones: req.body.observaciones,
    Descripcion: req.body.descripcion,
    Foto: "",
  });
  libro.save(function (err, libro) {
    if (err) {
      return res.status(500).json({
        message: "Error al crear el Libro",
      });
    }
    res.redirect("/administrar/admin_buscar");
  });
};

module.exports = libroController;
