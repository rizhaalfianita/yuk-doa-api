const Validator = require("fastest-validator");
const models = require("../models");

function save(req, res) {
  const dzikrs = {
    dzikr: req.body.dzikr,
    ayat: req.body.ayat,
    latin: req.body.latin,
    terjemah: req.body.terjemah,
    dzikrTypeID: req.body.dzikrTypeID,
  };

  const schema = {
    dzikr: { type: "string", optional: false, max: "100" },
    ayat: { type: "string", optional: true, max: "1000" },
    latin: { type: "string", optional: true, max: "1000" },
    terjemah: { type: "string", optional: true, max: "1000" },
    dzikrTypeID: { type: "number", optional: false, max: "10" },
  };

  const v = new Validator();
  const validationResponse = v.validate(dzikrs, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }

  models.DzikrType.findByPk(req.body.dzikrTypeID).then((result) => {
    if (result !== null) {
      models.Dzikr.create(dzikrs)
        .then((result) => {
          res.status(201).json({
            message: "Dzikr added successfully",
            dzikrs: result,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "Something went wrong!",
            error: error,
          });
        });
    } else {
      res.status(500).json({
        message: "Invalid type ID!",
      });
    }
  });
}

function show(req, res) {
  const id = req.params.id;

  models.Dzikr.findByPk(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function index(req, res) {
  models.Dzikr.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        error: error,
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatedDoas = {
    dzikr: req.body.dzikr,
    ayat: req.body.ayat,
    latin: req.body.latin,
    terjemah: req.body.terjemah,
    dzikrTypeID: req.body.dzikrTypeID,
  };

  const schema = {
    dzikr: { type: "string", optional: false, max: "100" },
    ayat: { type: "string", optional: false, max: "1000" },
    latin: { type: "string", optional: false, max: "1000" },
    terjemah: { type: "string", optional: false, max: "1000" },
    dzikrTypeID: { type: "number", optional: false, max: "10" },
  };

  const v = new Validator();
  const validationResponse = v.validate(updatedDoas, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }

  models.Dzikr.update(updatedDoas, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Dzikr updated successfully",
        dzikrs: updatedDoas,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        error: error,
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.Dzikr.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Dzikr deleted successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        error: error,
      });
    });
}

module.exports = {
  save: save,
  show: show,
  index: index,
  update: update,
  destroy: destroy,
};
