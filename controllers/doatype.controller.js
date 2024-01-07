const Validator = require("fastest-validator");
const models = require("../models");

function save(req, res) {
  const doaTypes = {
    tipeDoa: req.body.tipeDoa,
  };

  const schema = {
    tipeDoa: { type: "string", optional: false, max: "100" },
  };

  const v = new Validator();
  const validationResponse = v.validate(doas, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }

  models.DoaType.create(doaTypes)
    .then((result) => {
      res.status(201).json({
        message: "Doa Type added successfully",
        doaTypes: result,
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
  const updatedDoaTypes = {
    tipeDoa: req.body.tipeDoa,
  };

  const schema = {
    tipeDoa: { type: "string", optional: false, max: "100" },
  };

  const v = new Validator();
  const validationResponse = v.validate(updatedDoas, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }

  models.DoaType.update(updatedDoaTypes, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Doa Type updated successfully",
        doaTypes: updatedDoaTypes,
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

  models.DoaType.findByPk(id, {
    include: [models.Doa],
  })
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        error: error,
      });
    });
}

function index(req, res) {
  models.DoaType.findAll()
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
        message: "Doa Type deleted successfully",
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
  destroy: destroy,
};
