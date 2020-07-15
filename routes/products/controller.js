const { Product } = require("../../models");
module.exports = {
  addProduct: async (req, res) => {
    try {
      const results = await Product.create({
        ...req.body,
      });

      res.send({
        message: `Add data Success`,
        result: results,
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const results = await Product.find();

      res.send({
        results: results,
      });
    } catch (error) {
      res.send(error);
    }
  },

  updateProducts: async (req, res) => {
    const { id } = req.params;

    console.log(id);
    try {
      const results = await Product.findByIdAndUpdate(id, {
        $set: { ...req.body },
      });

      res.send({
        message: `Update data succcess`,
        results: results,
      });
    } catch (error) {
      res.send(error);
    }
  },

  deleteProducts: async (req, res) => {
    const { id } = req.params;

    try {
      const results = await Product.deleteOne({ _id: id });
      res.send({
        message: `Delete data succcess`,
        results: results,
      });
    } catch (error) {
      res.send(error);
    }
  },

  getProductName: async (req, res) => {
    const { type } = req.params;

    try {
      const result = await Product.find({
        type: { $regex: type, $options: "i" },
      });

      res.send({ result: result });
    } catch (error) {
      res.send(error);
    }
  },
};
