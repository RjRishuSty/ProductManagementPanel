const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: 3,
      maxlength: 150,
    },
    seoUrlName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    discountPrice: {
      type: Number,
      min: 0,
      validate: {
        validator: function (value) {
          return value < this.price;
        },
        message: "Discount price must be less than actual price",
      },
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    unit: {
      type: [String],
      required: true,
      enum: ["liter", "kg", "gram", "packet", "bag"],
    },
    category: {
      type: String,
      required: true,
      index: true,
    },

    subCategory: {
      type: String,
      index: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    images: {
      type: [String],
      validate: {
        validator: (arr) => true, // allow empty array
        message: "At least one product image is required",
      },
      default: [],
    },

    isOrganic: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true }
);

productSchema.index({ name: "text", description: "text" });
productSchema.index({ category: 1, subCategory: 1 });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
