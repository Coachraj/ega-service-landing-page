import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export const EMPLOYEE_RANGES = [
  "1–10",
  "11–19",
  "20–34",
  "35–57",
  "58–95",
  "96–160",
  "161–500",
];

export const REVENUE_RANGES = [
  "<$500K",
  "$500K–$1M",
  "$1M–$5M",
  "$5M–$10M",
  "$10M+",
];

const API_URL = "http://localhost:5050/api/leads";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    companyName: "",
    employees: "",
    revenue: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      await res.json();

      alert("submitted successfully!");

      // ✅ reset form
      setForm({
        name: "",
        email: "",
        companyName: "",
        employees: "",
        revenue: "",
        website: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .lead-form-wrapper {
          max-width: 520px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 36px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.15);
          font-family: Inter, system-ui, sans-serif;
        }

        .lead-form-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 8px;
          color: #0f172a;
        }

        .lead-form-subtitle {
          color: #475569;
          margin-bottom: 32px;
          font-size: 15px;
        }

        .lead-form-group {
          margin-bottom: 20px;
        }

        .lead-form-group label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 6px;
          color: #0f172a;
        }

        .lead-form-group input,
        .lead-form-group select {
          width: 100%;
          padding: 14px 16px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-size: 15px;
          outline: none;
          transition: all 0.2s ease;
          background: #fff;
        }

        .lead-form-group input:focus,
        .lead-form-group select:focus {
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220,38,38,0.15);
        }

        .lead-form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='gray'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 18px;
        }

        .lead-form-button {
          width: 100%;
          margin-top: 28px;
          padding: 16px;
          background: #dc2626;
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .lead-form-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>

      <form className="lead-form-wrapper" onSubmit={handleSubmit}>
        <h2 className="lead-form-title">Get Started Today</h2>
        <p className="lead-form-subtitle">
          Join our exclusive program and transform your business
        </p>

        <div className="lead-form-group">
          <label>Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="lead-form-group">
          <label>Email Address *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="lead-form-group">
          <label>Company Name *</label>
          <input name="companyName" value={form.companyName} onChange={handleChange} required />
        </div>

        <div className="lead-form-group">
          <label>Number of Employees *</label>
          <select name="employees" value={form.employees} onChange={handleChange} required>
            <option value="">Select range</option>
            {EMPLOYEE_RANGES.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="lead-form-group">
          <label>Revenue Range (Optional)</label>
          <select name="revenue" value={form.revenue} onChange={handleChange}>
            <option value="">Select range</option>
            {REVENUE_RANGES.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="lead-form-group">
          <label>Website *</label>
          <input name="website" value={form.website} onChange={handleChange} />
        </div>

        <button className="lead-form-button" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}