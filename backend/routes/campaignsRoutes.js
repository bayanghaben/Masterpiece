const {
  getAllCampaigns,
  createNewCampaigne,
  getCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaignsController");
const express = require("express");

const router = express.Router();
router.route("/").get(getAllCampaigns).post(createNewCampaigne);
router
  .route("/:id")
  .get(getCampaign)
  .patch(updateCampaign)
  .delete(deleteCampaign);
module.exports = router;
