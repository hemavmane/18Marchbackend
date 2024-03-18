const BannerModel = require("../Modal/banner");

class AddBanner {
     addBanner = async (req, res) => {
        try {
            if (req.file) {
                let file = req.file.filename;  
                let Data = new BannerModel({
                    BannerImag: file
                });
                let ProductData = await Data.save();
                if (ProductData) {
                    return res.status(200).json({ data: "Registered Successfully" });
                }
            } else {
                return res.status(400).json({ error: "No file provided" });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ err: "Internal Error" });
        }
    };


    getBanner = async (req, res) => {
        try {
            let userData = await BannerModel.find({});

            if (userData) {
                return res.status(200).json({ data: userData });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ err: "Internal Error" });
        }
    };
    deletebaner = async (req,res) =>{
        let id = req.params.id
        try {
            let data = await BannerModel.findByIdAndDelete({_id:id})
            if (data) {
                return res.status(200).json({ data: "Deleted Succesfully" });
              }
        } catch (error) {
            console.error(err);
      return res.status(500).json({ err: "Internal Error" });
        }
    }
}

module.exports = new AddBanner();
