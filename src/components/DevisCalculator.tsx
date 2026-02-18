import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Calculator } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/447404062008";

const countries = {
  fr: [
    { code: "EU", label: "Europe" },
    { code: "CM", label: "Cameroun" },
    { code: "CI", label: "Côte d'Ivoire" },
    { code: "SN", label: "Sénégal" },
    { code: "GA", label: "Gabon" },
    { code: "CG", label: "Congo" },
    { code: "CD", label: "RD Congo" },
    { code: "US", label: "États-Unis" },
    { code: "CA", label: "Canada" },
    { code: "GB", label: "Royaume-Uni" },
    { code: "MA", label: "Maroc" },
    { code: "OTHER", label: "Autre" },
  ],
  en: [
    { code: "EU", label: "Europe" },
    { code: "CM", label: "Cameroon" },
    { code: "CI", label: "Ivory Coast" },
    { code: "SN", label: "Senegal" },
    { code: "GA", label: "Gabon" },
    { code: "CG", label: "Congo" },
    { code: "CD", label: "DR Congo" },
    { code: "US", label: "United States" },
    { code: "CA", label: "Canada" },
    { code: "GB", label: "United Kingdom" },
    { code: "MA", label: "Morocco" },
    { code: "OTHER", label: "Other" },
  ],
};

const DevisCalculator = () => {
  const { lang, t } = useLanguage();
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const countryList = countries[lang];

  const estimate = useMemo(() => {
    const val = parseFloat(amount);
    if (!val || val <= 0 || !from || !to) return null;

    // Illustrative fee tiers (NOT real rates — purely indicative)
    let feePercent = 3.5;
    if (val > 5000) feePercent = 2.8;
    if (val > 10000) feePercent = 2.2;
    if (val > 50000) feePercent = 1.5;

    // Corridor adjustments (illustrative)
    const sameRegion = (from === "EU" && to === "EU") || (from === "US" && to === "CA");
    if (sameRegion) feePercent *= 0.7;

    const africaCodes = ["CM", "CI", "SN", "GA", "CG", "CD", "MA"];
    const crossContinent = (africaCodes.includes(to) && !africaCodes.includes(from)) ||
                           (africaCodes.includes(from) && !africaCodes.includes(to));
    if (crossContinent) feePercent *= 1.15;

    const fee = Math.max(val * (feePercent / 100), 15); // Minimum 15
    return {
      fee: Math.round(fee * 100) / 100,
      percent: Math.round(feePercent * 10) / 10,
    };
  }, [amount, from, to]);

  const handleSubmit = () => {
    const fromLabel = countryList.find(c => c.code === from)?.label || from;
    const toLabel = countryList.find(c => c.code === to)?.label || to;
    const msg = lang === "fr"
      ? `Bonjour, je souhaite envoyer ${amount} EUR de ${fromLabel} vers ${toLabel}. Pouvez-vous m'accompagner ?`
      : `Hello, I would like to send ${amount} EUR from ${fromLabel} to ${toLabel}. Can you assist me?`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const selectClasses = "w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground font-sans-body focus:outline-none focus:border-primary/50 transition-colors appearance-none";

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in-up animation-delay-400">
      <div className="border border-primary/20 rounded-sm bg-card/80 backdrop-blur-sm p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center">
            <Calculator size={16} className="text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif-display text-xl font-semibold text-foreground">
            {t("devis.title")}
          </h3>
        </div>

        <div className="space-y-4">
          {/* Amount */}
          <div>
            <label className="block text-[10px] font-sans-body text-muted-foreground mb-1.5 tracking-widest uppercase">
              {t("devis.amount")} (EUR)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1 000"
              min="0"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground font-sans-body placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* From / To */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-sans-body text-muted-foreground mb-1.5 tracking-widest uppercase">
                {t("devis.from")}
              </label>
              <select value={from} onChange={(e) => setFrom(e.target.value)} className={selectClasses}>
                <option value="" disabled>—</option>
                {countryList.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-sans-body text-muted-foreground mb-1.5 tracking-widest uppercase">
                {t("devis.to")}
              </label>
              <select value={to} onChange={(e) => setTo(e.target.value)} className={selectClasses}>
                <option value="" disabled>—</option>
                {countryList.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          {estimate && (
            <div className="border border-primary/20 rounded-sm p-4 bg-secondary/50 animate-fade-in-up">
              <p className="text-[10px] font-sans-body text-muted-foreground tracking-widest uppercase mb-2">
                {t("devis.result_label")}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif-display text-3xl font-bold text-primary">
                  {estimate.fee.toLocaleString(lang === "fr" ? "fr-FR" : "en-US")}
                </span>
                <span className="text-sm text-muted-foreground font-sans-body">EUR</span>
                <span className="text-xs text-muted-foreground/60 font-sans-body ml-auto">
                  ~{estimate.percent}%
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground/50 font-sans-body mt-2 leading-relaxed">
                {t("devis.note")}
              </p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={!estimate}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 text-sm font-bold tracking-widest hover:bg-primary/90 transition-all duration-300 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {t("devis.cta")}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevisCalculator;
