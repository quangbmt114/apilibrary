const { db } = require("../../untils");
const { ObjectId } = require("mongodb");
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
    console.log(value._id);
    const data = db.collection("list-properties");
    const result = await data.findOneAndUpdate(
      {
        _id: new ObjectId(value._id),
      },
      {
        $set: {
          title: value.title,
          image: value.image,
          price: value.price,
          description: value.description,
        },
      }
    );
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
