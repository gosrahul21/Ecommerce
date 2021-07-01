const Coupon = require("../models/coupon");

// create, remove, list

exports.create = async (req, res) => {
  try {
    
    const { name, expiry, discount } = req.body.coupon;
    //create the coupoun and save in db
    res.send(await new Coupon({ name, expiry, discount }).save());
  } catch (err) {
    console.log(err);
  }
};

exports.update = async(req,res) => {
  try{
    //get coupounId 
    const couponId = req.params.couponId;
    await Coupon.findByIdAndUpdate(couponId,req.body);
    res.send(await Coupon.findOne({id:couponId}))
    

  }catch(err){
    res.status(404).send(err);
  }
}

exports.remove = async (req, res) => {
  try {
    res.json(await Coupon.findByIdAndDelete(req.params.couponId).exec());
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};

exports.list = async (req, res) => {
  try {
    //fetch all the coupouns and return them  as array in incresing order of their date
    //the one which arrived recently will be seen first
    res.json(await Coupon.find({}).sort({ createdAt: -1 }).exec());
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};
