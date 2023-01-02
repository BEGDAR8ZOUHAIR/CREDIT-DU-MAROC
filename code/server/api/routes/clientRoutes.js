const express = require("express");
const router = express.Router();

// get function from client controller
const {
    singleClient,
    getClients,
    totalClients,
} = require("../controller/clientController");

//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// Create route for client
router.route("/singleClient/:id").get(singleClient);
router.route("/totalClients").get(protect, totalClients);
router.route("/getClients").get(protect, getClients);

// export route file
module.exports = router;
