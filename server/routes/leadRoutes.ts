import express from "express";
import Lead from "../models/Lead.ts";
import axios from "axios";

const router = express.Router();

router.post("/leads", async (req, res) => {
  try {
    // 1. Save lead in MongoDB
    const lead = await Lead.create(req.body);

    // 2. Send lead to n8n webhook
    await axios.post(
      "https://vrtgroup.app.n8n.cloud/webhook/06a19216-a1a5-48b8-8e2f-c3036cc51719",
      {
        lead_id: lead._id,
        name: lead.name,
        email: lead.email,
        companyName: lead.companyName,
        employees: lead.employees,
        revenue: lead.revenue,
        website: lead.website,
        status: lead.status,
        createdAt: lead.createdAt,
      }
    );

    // 3. Respond to frontend
    res.status(201).json(lead);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save lead" });
  }
});

export default router;