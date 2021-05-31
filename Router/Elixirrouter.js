const express = require("express");
const Mongoose  = require("mongoose");

const {
  getalldata,
  getsingledata,
  createdata,
  updatedata,
  deletedata,
} = require("../Controller/Elixircontroller");


const router = express.Router();

router.route("/alldata").get(getalldata);
router.route("/singledata").get(getsingledata);
router.route("/createdata").post(createdata);
router.route("/updatedata").put(updatedata);
router.route("/deletedata").delete(deletedata);

module.exports = router;