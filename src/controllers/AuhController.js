const AuthService = require("../services/AuthService");
const { db } = require("../../untils");
async function Login(req, res) {
  const { email, password } = req.body;
  try {
    const loginResult = await AuthService.Login({ email, password });
    console.log("loginResult", loginResult);
    if (loginResult !== null) {
      return res.json({
        status: "OK",
        message: "Login successful",
        access_token: loginResult.access_token,
      });
    } else {
      return res.status(404).json({
        message: "sai email hoặc password",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const data = db.collection("account");
    const result = await data.findOne({ email });
    console.log("result", result);
    if (result) {
      return res.status(402).json({ message: "email is existed" });
    }
    const user = await AuthService.createUser(req.body);
    console.log("user", user);
    return res
      .status(201)
      .json({ ...user, status: 201, message: "create user success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = {
  Login,
  createUser,
};
