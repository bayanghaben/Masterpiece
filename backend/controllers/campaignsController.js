const campaign = require("../models/campaignSchema");
//Create New Campaigne
exports.createNewCampaigne = async (req, res) => {
  try {
    const newCampaign = await campaign.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Campaigne created successfully",
      data: {
        Campaign: newCampaign,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};

// @@get all Campaignes:
exports.getQueryCampaigns = async (req, res) => {
  try {
    //build query
    const queryObj = { ...req.query };
    const excludedFeilds = ["sort", "feild", "page", "limit"];
    excludedFeilds.forEach((el) => delete queryObj[el]);
    // To allow implement the sort and pagination
    const queryCampaigns = campaign.find(queryObj);
    //execute query
    const Campaigns = await queryCampaigns;
    res.json({
      status: "success",
      results: Campaigns.length,
      data: {
        Campaigns,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//get single Campaign
exports.getCampaign = async (req, res) => {
  try {
    const singleCampaign = await campaign.findById(req.params.id);
    res.status(201).json({
      status: "success",

      data: {
        singleCampaign,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// update campaign
exports.updateCampaign = async (req, res) => {
  try {
    const Campaign = await campaign.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",

      data: {
        Campaign,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//delete Campaign
exports.deleteCampaign = async (req, res) => {
  try {
    const Campaign = await campaign.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: {
        Campaign,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// @@get all Campaigns
exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await campaign.find();
    res.status(201).json({
      status: "success",
      results: campaigns.length,
      data: {
        campaigns,
      },
    });
  } catch (err) {
    res.status(502).json({
      message: err.message,
    });
  }
};
