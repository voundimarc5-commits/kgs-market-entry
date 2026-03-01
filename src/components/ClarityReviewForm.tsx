import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, CheckCircle, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/447404062008";

const ClarityReviewForm = () => {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const canSubmit = name && email.includes("@") && projectType && description;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const msg = `Project Clarity Review Request\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nTarget Country: ${country}\n${budget ? `Budget: ${budget}\n` : ""}Description: ${description}`;

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setProjectType("");
    setCountry("");
    setBudget("");
    setDescription("");
  };

  const selectClasses =
    "w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground font-sans-body focus:outline-none focus:border-primary/50 transition-colors appearance-none";
  const inputClasses =
    "w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground font-sans-body placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors";
  const labelClasses =
    "block text-[10px] font-sans-body text-muted-foreground mb-1.5 tracking-widest uppercase";

  if (submitted) {
    return (
      <div id="clarity-form" className="w-full max-w-lg mx-auto animate-fade-in-up">
        <div className="border border-primary/20 rounded-sm bg-card/80 backdrop-blur-sm p-8 md:p-10 text-center">
          <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-primary" />
          </div>
          <h3 className="font-serif-display text-2xl font-bold text-foreground mb-3">
            {t("clarity.success_title")}
          </h3>
          <p className="text-sm text-muted-foreground font-sans-body mb-8 leading-relaxed max-w-sm mx-auto">
            {t("clarity.success_text")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-bold tracking-wider hover:bg-primary/90 transition-colors rounded-sm"
            >
              {t("clarity.another")}
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-sans-body text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors rounded-sm"
            >
              <MessageCircle size={16} />
              {t("clarity.contact_us")}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="clarity-form" className="w-full max-w-lg mx-auto animate-fade-in-up animation-delay-400">
      <div className="border border-primary/20 rounded-sm bg-card/80 backdrop-blur-sm p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center">
            <Send size={16} className="text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif-display text-xl font-semibold text-foreground">
            {t("clarity.form_title")}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground font-sans-body mb-6 leading-relaxed">
          {t("clarity.form_helper")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className={labelClasses}>{t("clarity.name")} *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClasses}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelClasses}>{t("clarity.email")} *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputClasses}
              required
            />
          </div>

          {/* Project Type */}
          <div>
            <label className={labelClasses}>{t("clarity.project_type")} *</label>
            <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className={selectClasses} required>
              <option value="" disabled>—</option>
              <option value="realestate">{t("clarity.type.realestate")}</option>
              <option value="business">{t("clarity.type.business")}</option>
              <option value="digital">{t("clarity.type.digital")}</option>
              <option value="other">{t("clarity.type.other")}</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className={labelClasses}>{t("clarity.country")}</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={inputClasses}
            />
          </div>

          {/* Budget */}
          <div>
            <label className={labelClasses}>{t("clarity.budget")}</label>
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={inputClasses}
            />
          </div>

          {/* Description */}
          <div>
            <label className={labelClasses}>{t("clarity.description")} *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("clarity.description_placeholder")}
              rows={3}
              className={inputClasses + " resize-none"}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 text-sm font-bold tracking-widest hover:bg-primary/90 transition-all duration-300 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {t("clarity.submit")}
          </button>
          <p className="text-[9px] text-muted-foreground/50 font-sans-body mt-1 text-center leading-relaxed">
            {t("clarity.submit_note")}
          </p>
        </form>

        {/* Compliance disclaimer */}
        <p className="text-[10px] text-muted-foreground/50 font-sans-body mt-4 leading-relaxed text-center">
          {t("clarity.disclaimer")}
        </p>
      </div>
    </div>
  );
};

export default ClarityReviewForm;
