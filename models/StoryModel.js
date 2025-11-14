import mongoose from "mongoose";

const storySchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "MovieRate" },
    story: { type: String, required: true },
    viewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "MovieRate" }],
    isVideo: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: { createdAt: false, updatedAt: true },
  }
);
storySchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });
export const Story = mongoose.model("Story", storySchema);

