const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.post("/getStudentInfo", async (req, res) => {
  try {
    const { duke_card_number } = req.body;
    console.log(duke_card_number);
    console.log(process.env.DUKE_AUTH_TOKEN);
    var options = {
      params: {
        identifierAttribute: "USR_UDF_DUKECARDNBR",
        attributes: "USR_LOGIN,USR_UDF_UID,USR_UDF_DISPLAYNAME",
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${process.env.DUKE_AUTH_TOKEN}`,
      },
      //   data: {
      //     identifiers: duke_card_number,
      //   },
    };

    const response = await axios.post(
      "https://idms-web-ws.oit.duke.edu/idm-ws/user/findByIdentifiers",
      { identifiers: duke_card_number },
      options
    );

    res.send(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
