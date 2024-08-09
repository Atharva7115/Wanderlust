const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const { isLoggedIn ,isOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js")
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({storage })
const validateListing = (req, res, next) => {
    let {error}= listingSchema.validate(req.body)
  if(error) {
    let errMsg = error.details.map((el) => 
      el.message).join(",");
    throw new ExpressError(400,errMsg)
  } else {
    next()
  }
  }
  //index
  router.get("/" ,wrapAsync(listingController.index));
  //new 
  router.get("/new" ,isLoggedIn ,listingController.renderNewForm)
  //Create Route
  router.post("/",isLoggedIn, upload.single("listing[image][url]"),validateListing, wrapAsync(listingController.createListing));
  
  //show route
  router.get("/:id" ,wrapAsync( listingController.showListing));
  //edit
  router.get("/:id/edit" , isLoggedIn,isOwner,listingController.renderEditForm
  )
  
  //Update route
  router.put("/:id" ,isLoggedIn,isOwner, upload.single("listing[image][url]"),validateListing, wrapAsync(listingController.updateListing))
  

  //delete
  router.delete("/:id" ,isLoggedIn,isOwner,listingController.destroyListing)

  module.exports = router;