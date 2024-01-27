const { db } = require("../../untils");

async function listProperties() {
  try {
    const data = db.collection("list-properties");
    const result = await data.find({}).toArray();
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
async function createProperties(value) {
  try {
    const data = db.collection("list-properties");
    const result = await data.insertOne(value);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
async function updateProperties(value) {
  try {
    const data = db.collection("list-properties");
    const result = await data.findOneAndUpdate(value);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
async function deleteProperties(value) {
  try {
    const data = db.collection("list-properties");
    const result = await data.deleteOne(value);
    console.log("value", value);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
module.exports = {
  deleteProperties,
  createProperties,
  updateProperties,
  listProperties,
};
