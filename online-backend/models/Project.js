const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    longDescription: {
        type: String,
    },
    category: {
      type: String,
      required: true,
      enum: ["Web Development", "App Development", "UI/UX", "AI / ML"],
    },
    techStack: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
      default: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    },
    demoLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    rating: {
      type: Number,
      default: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    trending: {
        type: Boolean,
        default: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
