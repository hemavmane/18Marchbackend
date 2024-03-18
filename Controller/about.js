const AboutModal = require("../Modal/Aboutus");


exports.AddAbout = async (req, res) => {
  let {
    phone,
    email,
    OfficeAddress,
  } = req.body;
  let file = req.file?.filename
  try {
    let user = new AboutModal({
      phone,
      email,
      OfficeAddress,
      images: file
    });

    let userData = await user.save();

    if (userData) {
      return res.status(200).json({ data: userData, message: "Contact info added successfully" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ err: "Internal Error" });
  }
};
exports.getAbout = async (req, res) => {
  try {
    let userData = await AboutModal.find({});

    if (userData) {
      return res.status(200).json({ data: userData });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ err: "Internal Error" });
  }
};