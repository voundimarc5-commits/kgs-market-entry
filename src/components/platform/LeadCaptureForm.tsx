import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(200),
  market: z.string().trim().min(1, "Market of interest is required").max(200),
});

const LeadCaptureForm = ({ opportunityTitle }: { opportunityTitle: string }) => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", market: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-lg p-10 text-center glow-gold">
        <CheckCircle size={40} className="text-primary mx-auto mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">Thank you for your interest</h3>
        <p className="text-sm text-muted-foreground">Our team will contact you shortly about this opportunity.</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-lg p-8 glow-gold">
      <h3 className="text-lg font-bold text-foreground mb-1">Need help entering this market?</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Our team can help you navigate this opportunity. Fill in your details below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { key: "name", label: "Full Name", placeholder: "John Doe" },
          { key: "email", label: "Email", placeholder: "john@company.com", type: "email" },
          { key: "company", label: "Company", placeholder: "Your company name" },
          { key: "market", label: "Market of Interest", placeholder: "e.g. Nigeria, Kenya, Morocco..." },
        ].map(({ key, label, placeholder, type }) => (
          <div key={key}>
            <label className="block text-xs font-medium text-foreground mb-1.5">{label}</label>
            <input
              type={type || "text"}
              placeholder={placeholder}
              value={formData[key as keyof typeof formData]}
              onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
              className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
            {errors[key] && <p className="text-xs text-destructive mt-1">{errors[key]}</p>}
          </div>
        ))}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(43_65%_55%/0.3)] transition-all duration-300"
        >
          <Send size={14} /> Contact KGS Market Entry
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
