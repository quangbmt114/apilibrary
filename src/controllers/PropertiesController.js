const PropertiesService = require("../services/PropertiesService");
const { ObjectId } = require("mongodb");
async function createProperties(req, res) {
  try {
    const Properties = await PropertiesService.createProperties(req.body);
    return res
      .status(201)
      .json({ ...Properties, status: 201, message: "create success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function updateProperties(req, res) {
  try {
    const Properties = await PropertiesService.updateProperties(req.body);
    return res.status(201).json(Properties);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function deleteProperties(req, res) {
  const id = req.params.id;
  console.log("id", id);
  try {
    const Properties = await PropertiesService.deleteProperties({
      _id: new ObjectId(id),
    });
    return res.status(201).json(Properties);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function listProperties(req, res) {
  try {
    const Properties = await PropertiesService.listProperties();
    console.log(Properties);
    return res.status(201).json(Properties);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {
  createProperties,
  updateProperties,
  deleteProperties,
  listProperties,
};
