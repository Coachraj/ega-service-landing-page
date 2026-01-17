import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    companyName: { type: String, required: true },
    employees: { type: String, required: true },
    revenue: { type: String },
    website: { type: String, required: true },

    status: {
      type: String,
      enum: ["new", "email_pending", "emailed"],
      default: "new",
    },

  },
  { timestamps: true }
);

export default mongoose.model("Lead", LeadSchema);