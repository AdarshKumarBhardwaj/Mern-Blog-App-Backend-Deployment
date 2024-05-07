import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [10, "Blog title must contain at least 10 characters!"],
    maxLength: [70, "Blog title cannot exceed 70 charactes!"],
  },
  mainImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  intro: {
    type: String,
    required: true,
    minLength: [100, "Blog intro must contain at least 100 characters!"],
  },
  paraOneImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraOneDescription: {
    type: String,
    minLength: [100, "Blog intro must contain at least 100 characters!"],
  },
  paraOneTitle: {
    type: String,
    minLength: [10, "Blog title must contain at least 10 characters!"],
  },
  paraTwoImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraTwoDescription: {
    type: String,
    minLength: [100, "Blog intro must contain at least 100 characters!"],
  },
  paraTwoTitle: {
    type: String,
    minLength: [10, "Blog title must contain at least 10 characters!"],
  },
  paraThreeImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraThreeDescription: {
    type: String,
    minLength: [100, "Blog intro must contain at least 100 characters!"],
  },
  paraThreeTitle: {
    type: String,
    minLength: [10, "Blog title must contain at least 10 characters!"],
  },
  category: {
    type: String,
    require: true,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  authorName: {
    type: String,
    require: true,
  },
  authorAvatar: {
    type: String,
    require: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

export const Blog = mongoose.model("Blog", blogSchema);
