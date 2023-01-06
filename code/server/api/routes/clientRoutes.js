const express = require("express");
const router = express.Router();

// get function from client controller
const {
    registerClient,
    authClient,
    getClient,
    updateClient,
   
} = require("../controller/clientController");

const { newCompte } = require("../controller/compteController");

//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// Client routes
router.route("/login").post(authClient);
router.route("/registerClient").post(registerClient);
router.route("/update/:id").put(protect, updateClient);
router.route("/getClient/:id").get(protect, getClient);

// Create route for Comptes
router.route("/newCompte").post(protect, newCompte);

// export route file
module.exports = router;
