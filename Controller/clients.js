const ClientModal = require("../Modal/clients");

exports.AddClient = async (req, res) => {
    let {
      ClientName,
       phone,
      email,
      Address,
    } = req.body;
    let file = req.file?.filename
    try {
      let user = new ClientModal({
        phone,
        email,
        ClientName,
        Address,
        profile: file
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
  exports.getclient = async (req, res) => {
    try {
      let userData = await ClientModal.find({});

      if (userData) {
        return res.status(200).json({ data: userData });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Internal Error" });
    }
  };

  

  exports.deleteclient = async (req,res) =>{
    let id = req.params.id
    try {
        let data = await ClientModal.findByIdAndDelete({_id:id})
        if (data) {
            return res.status(200).json({ data: "Deleted Succesfully" });
          }
    } catch (error) {
        console.error(err);
  return res.status(500).json({ err: "Internal Error" });
    }
}