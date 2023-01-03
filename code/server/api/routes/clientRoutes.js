const express = require("express");
const router = express.Router();

// get function from client controller
const {
   
} = require("../controller/clientController");

//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// Client routes
router.route("/login").post(authAdmin);
router.route("/registerAdmin").post(registerAdmin);
router.route("/update/:id").put(protect, updateAdmin);
router.route("/getAdmin").get(protect, getAdmin);

// export route file
module.exports = router;
