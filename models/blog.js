import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: String,
    content: String,
    // id : Number
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
