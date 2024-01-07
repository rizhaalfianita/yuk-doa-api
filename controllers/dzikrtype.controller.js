const Validator = require("fastest-validator");
const models = require("../models");

function save(req, res) {
  const dzikrTypes = {
    tipeDzikr: req.body.tipeDzikr,
  };

  const schema = {
    tipeDzikr: { type: "string", optional: false, max: "100" },
  };

  const v = new Validator();
  const validationResponse = v.validate(dzikrTypes, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }

  models.DzikrType.create(doaTypes)
    .then((result) => {
      res.status(201).json({
        message: "Dzikr Type added successfully",
        dzikrTypes: result,
      });
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
  const updatedDzikrTypes = {
    tipeDzikr: req.body.tipeDzikr,
  };

  const schema = {
    tipeDzikr: { type: "string", optional: false, max: "100" },
  };

  const v = new Validator();
  const validationResponse = v.validate(updatedDzikrTypes, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }

  models.DzikrType.update(updatedDzikrTypes, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Dzikr Type updated successfully",
        dzikrTypes: updatedDzikrTypes,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        error: error,
      });
    });
}

function show(req, res) {
  const id = req.params.id;

  models.DzikrType.findByPk(id, {
    include: [models.Dzikr],
  })
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function index(req, res) {
  models.DzikrType.findAll()
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

function destroy(req, res) {
  const id = req.params.id;

  models.DoaType.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Dzikr Type deleted successfully",
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
  update: update,
  show: show,
  index: index,
  destroy: destroy
};
