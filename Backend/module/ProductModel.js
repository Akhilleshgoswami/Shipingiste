import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please Enter product Name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "please Enter product Description"],
    },
    price: {
      type: Number,
      required: [true, "please Enter product Price"],
      maxlength: [8, "Price can not excced 8 characters"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "please Enter product Category"],
    },
    Stock: {
      type: Number,
      required: [true, "please Enter product Stock"],
      maxlength: [4, "Stock can not excced 4 characters"],
      default: 1,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        reating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
