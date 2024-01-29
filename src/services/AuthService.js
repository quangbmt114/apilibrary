const { db } = require("../../untils");
const { generalAccessToken } = require("./JwtService");
async function createUser(value) {
  const data = db.collection("account");
  return await data.insertOne({
    ...value,
    createAt: new Date(),
    updateAt: new Date(),
  });
}
async function Login(value) {
  const data = db.collection("account");
  const result = await data.findOne(value);
  // console.log("result", value);
  if (result !== null) {
    const access_token = await generalAccessToken({
      ...result,
    });
    return {
      status: "OK",
      message: "SUCCESS",
      access_token,
    };
  } else {
    return result;
  }
}
module.exports = {
  createUser,
  Login,
};
