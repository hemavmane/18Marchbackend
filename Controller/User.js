const UserInfoModal = require("../Modal/user");


exports.AddUserInfo = async (req, res) => {
    let { phone, email, username, message } = req.body;

    try {
        let user = new UserInfoModal({
            phone,
            email,
            username,
            message
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



exports.getuserInfo = async (req, res) => {
    try {
        let userData = await UserInfoModal.find({});

        if (userData) {
            return res.status(200).json({ data: userData });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: "Internal Error" });
    }
};



