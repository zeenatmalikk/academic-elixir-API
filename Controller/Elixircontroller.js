const elixirmodel = require("../Model/ElixirModel");

exports.getalldata = async (req, res) => {
  try {
    const alldata = await elixirmodel.find();
    res.status(200).json({ success: true, show: alldata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getsingledata = async (req, res) => {
  try {
    const singledata = await elixirmodel.findById();
    res.status(200).json({ success: true, show: singledata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.updatedata = async (req, res) => {
  try {
    const dataupdate = await elixirmodel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, show: dataupdate });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.createdata = async (req, res) => {
  try {
    const newdata = await elixirmodel.create(req.body);
    res.status(200).json({ success: true, show: newdata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.deletedata = async (req, res) => {
  try {
    const singledata = await elixirmodel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, show: singledata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
