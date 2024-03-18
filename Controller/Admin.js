const AuthModel = require("../Modal/Admin");

class Authentication {
  addUser = async (req, res) => {
    let { username, password, email, status } = req.body;

    try {
      let user = new AuthModel({
        username,
        password,
        email, status
      });

      let userData = await user.save();

      if (userData) {
        return res.status(200).json({ data: "Registered Successfully" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Internal Error" });
    }
  };


  Login = async (req, res) => {
    const { password, email, status } = req.body;

    try {
      if (!email) {
        return res.status(400).json({ error: "Please enter your email" });
      }

      if (!password) {
        return res.status(400).json({ error: "Please enter your password" });
      }

      const user = await AuthModel.findOneAndUpdate({ email, status });

      if (user.password !== password) {
        return res.status(404).json({ error: "User not found or invalid password" });
      }



      return res.status(200).json({ success: "Login successful", user, });
    } catch (error) {
      console.error("Something went wrong", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  getsignout = async (req, res) => {
    let id = req.params.id;
    try {
      const data = await AuthModel.findOneAndUpdate(
        { _id: id },
        { status: "offline" }
      );
      if (!data) {
        return res.status(403).json({
          error: "Cannot able to find the user",
        });
      } else {
        return res.json({ success: "Sign Out Successful" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  getuser = async (req, res) => {
    try {
      let userData = await AuthModel.find({});

      if (userData) {
        return res.status(200).json({ data: userData });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Internal Error" });
    }
  };
}

module.exports = new Authentication();
