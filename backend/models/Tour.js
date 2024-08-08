import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  descSummary: {
    type: String,
    required: true,
  },
  descPopularSpots: {
    type: String,
    required: true,
  },
  history: [
    {
      type: String,
      required: true,
    },
  ],
});

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: [descriptionSchema],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    popular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
