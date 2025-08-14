const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validatelisting} = require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer=require("multer");
const {storage} =require("../cloudConfig.js");
const upload=multer({storage});


//Index Route &//Create Route
router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.single("listing[image]"),
    validatelisting,
    wrapAsync(listingController.createListing)
);


//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);


router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validatelisting,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,wrapAsync(listingController.destroyListing));



// //Show Route
// router.get("/:id", wrapAsync(listingController.showListing));


//Edit Route
router.get("/:id/edit",isLoggedIn, wrapAsync(listingController.renderEditForm));



//Update Route
// router.put("/:id", isLoggedIn,isOwner,validatelisting,wrapAsync(listingController.updateListing));



// Delete Route
// router.delete("/:id",isLoggedIn,wrapAsync(listingController.destroyListing));

module.exports=router;
