const express = require("express");
const router = express.Router();

// get function from admin controller
const {
  updateAdmin,
  getAdmin,
  registerAdmin,
  authAdmin,
} = require("../controller/adminController");

// get function from client controller
const {
  singleClient,
  getClients,
  totalClients,
} = require("../controller/clientController");

const {
  getComptes,
  acceptCompte,
  cancelCompte,
  singleCompte,
  totalComptes,

} = require('../controller/CompteController')

//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// admin routes
router.route("/login").post(authAdmin);
router.route("/registerAdmin").post(registerAdmin);
router.route("/update/:id").put(protect, updateAdmin);
router.route("/getAdmin").get(protect, getAdmin);


// Create route for client
router.route("/singleClient/:id").get(singleClient);
router.route("/totalClients").get(protect, totalClients);
router.route("/getClients").get(protect, getClients);


// Create route for Comptes
router.route("/getComptes").get(protect, getComptes);
router.route("/totalComptes").get(protect, totalComptes);
router.route("/singleCompte/:id").get(protect, singleCompte);
router.route("/acceptCompte/:id").put(protect, acceptCompte);
router.route("/cancelCompte/:id").put(protect, cancelCompte);



// export route file
module.exports = router;
