const express = require("express");
const router = express.Router();

// get function from client controller
const {
    registerClient,
    authClient,
    getClient,
    updateClient,
   
} = require("../controller/clientController");

//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// Client routes
router.route("/login").post(authClient);
router.route("/registerAdmin").post(registerClient);
router.route("/update/:id").put(protect, updateClient);
router.route("/getClient").get(protect, getClient);

// export route file
module.exports = router;
