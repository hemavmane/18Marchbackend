const ProduceModel = require("../Modal/Product");


class AddProduct {
  addProduct = async (req, res) => {
    let {
      productName,
      description,
      price,
      manufacturer,
      category,
      specifications,
    } = req.body;


    let file = req.file;

    try {
      let Data = new ProduceModel({

        productName,
        description,
        imageURL: file.filename,
        price,
        manufacturer,
        category,
        specifications,
      });
      console.log(Data, "Data")

      let ProductData = await Data.save();

      if (ProductData) {
        return res.status(200).json({ data: "Registered Successfully" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Internal Error" });
    }
  };
  updateProduct = async (req, res) => {
    try {
      const productid = req.params.id;
      const {
        productName,
        description,
        price,
        manufacturer,
        category,
        specifications } = req.body;
      const file = req.file?.filename;

      const findProduct = await ProduceModel.findOne({
        _id: productid,
      });
      if (!findProduct) {
        return res.json({ error: "No such record found" });
      }

      findProduct.productName = productName || findProduct.productName;
      findProduct.description = description || findProduct.description;
      findProduct.price = price || findProduct.price;
      findProduct.manufacturer = manufacturer || findProduct.manufacturer;
      findProduct.category = category || findProduct.category;
      findProduct.specifications = specifications || findProduct.specifications;
      if (file) {
        findProduct.imageURL = file;
      }

      const updateCategory = await ProduceModel.findOneAndUpdate(
        { _id: productid },
        findProduct,
        { new: true }
      );
      return res.json({
        message: "Updated successfully",
        date: updateProduct,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ error: "Unable to update the Product" });
    }
  }

  trash = async (req, res) => {
    let id = req.params.id
    try {
      let userData = await ProduceModel.findByIdAndDelete({ _id: id });

      if (userData) {
        return res.status(200).json({ data: "Deleted Succesfully" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Internal Error" });
    }
  };
  getProduct = async (req, res) => {
    try {
      let userData = await ProduceModel.find({});

      if (userData) {
        return res.status(200).json({ data: userData });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Internal Error" });
    }
  };
  getbyid = async (req, res) => {
    let id = req.params.id
    try {
      let userData = await ProduceModel.findOne({ _id: id });

      if (userData) {
        return res.status(200).json({ data: userData });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Internal Error" });
    }
  };

  
  
}

module.exports = new AddProduct();
