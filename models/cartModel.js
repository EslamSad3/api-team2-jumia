const mongoose = require("mongoose");
// 1- Create Schema

const cartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        price: Number,
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    totalPrice: Number,
    // totalPriceAfterDiscount: Number,
    discount: Number,
  },
  { timestamps: true }
);

cartSchema.pre(/^find/, function () {
  this.populate({ path: `cartItems.product`, select: "name , imageCover" });
});

module.exports = mongoose.model("Cart", cartSchema);
