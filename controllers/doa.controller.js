const Validator = require('fastest-validator');
const models = require('../models');

function save(req, res) {
    const doas = {
      doa: req.body.doa,
      ayat: req.body.ayat,
      latin: req.body.latin,
      terjemah: req.body.terjemah
    };

    const schema = {
      doa: { type: "string", optional: false, max: "100" },
      ayat: { type: "string", optional: false, max: "1000" },
      latin: { type: "string", optional: false, max: "1000" },
      terjemah: { type: "string", optional: false, max: "1000" },
    };

    const v = new Validator();
    const validationResponse = v.validate(doas, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Doa.create(doas).then(result => {
        res.status(201).json({
            message: "Doa added successfully",
            doas: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function show(req, res) {
    const id = req.params.id;

    models.Doa.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    })
}

function index(req, res) {
    models.Doa.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function update(req, res) {
    const id = req.params.id;
    const updatedDoas = {
        doa: req.body.doa,
        ayat: req.body.ayat,
        latin: req.body.latin,
        terjemah: req.body.terjemah,
    };

    const schema = {
      doa: { type: "string", optional: false, max: "100" },
      ayat: { type: "string", optional: false, max: "1000" },
      latin: { type: "string", optional: false, max: "1000" },
      terjemah: { type: "string", optional: false, max: "1000" },
    };

    const v = new Validator();
    const validationResponse = v.validate(updatedDoas, schema);

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResponse,
      });
    }

    models.Doa.update(updatedDoas, {where: {id:id}})
        .then((result) => {
        res.status(200).json({
            message: "Doa updated successfully",
            doas: updatedDoas,
        });
        })
        .catch((error) => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
        });
}

function destroy (req, res){
    const id = req.params.id;
    
    models.Doa.destroy({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Doa deleted successfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}