const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    //name of the product
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    //trim the tittle for efficent searching of products
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    //product's description,specification
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    //price
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    //catergory id 
    category: {
      type: ObjectId,
      ref: "Category",
    },
    // subcategory id
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    color: {
      type: String,
      enum: ["Black", "Brown", "Silver", "White", "Blue"],
    },
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS","Other"],
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
