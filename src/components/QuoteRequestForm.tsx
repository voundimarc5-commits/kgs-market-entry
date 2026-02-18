import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/447404062008";

const countries = [
  { code: "CM", fr: "Cameroun", en: "Cameroon" },
  { code: "GA", fr: "Gabon", en: "Gabon" },
  { code: "CI", fr: "Côte d'Ivoire", en: "Côte d'Ivoire" },
  { code: "SN", fr: "Sénégal", en: "Senegal" },
  { code: "FR", fr: "France", en: "France" },
  { code: "GB", fr: "Royaume-Uni", en: "United Kingdom" },
  { code: "US", fr: "États-Unis", en: "United States" },
  { code: "CA", fr: "Canada", en: "Canada" },
  { code: "CH", fr: "Suisse", en: "Switzerland" },
];

const paymentMethodsByCountry: Record<string, string[]> = {
  CM: ["mobile_money", "bank_transfer", "card", "cash_deposit", "not_sure"],
  GA: ["mobile_money", "bank_transfer", "card", "cash_deposit", "not_sure"],
  CI: ["mobile_money", "bank_transfer", "card", "cash_deposit", "not_sure"],
  SN: ["mobile_money", "bank_transfer", "card", "cash_deposit", "not_sure"],
  FR: ["bank_transfer", "card", "digital_wallet", "not_sure"],
  GB: ["bank_transfer", "card", "digital_wallet", "not_sure"],
  US: ["bank_transfer", "card", "digital_wallet", "not_sure"],
  CA: ["bank_transfer", "card", "digital_wallet", "not_sure"],
  CH: ["bank_transfer", "card", "digital_wallet", "not_sure"],
};

const paymentMethodLabels: Record<string, Record<string, string>> = {
  bank_transfer: { fr: "Virement bancaire", en: "Bank transfer" },
  card: { fr: "Carte (débit/crédit)", en: "Card (debit/credit)" },
  mobile_money: { fr: "Mobile Money", en: "Mobile money" },
  cash_deposit: { fr: "Dépôt espèces", en: "Cash deposit" },
  digital_wallet: { fr: "Portefeuille numérique", en: "Digital wallet" },
  not_sure: { fr: "Pas encore sûr", en: "Not sure yet" },
};

const clientTypes = {
  fr: ["Particulier", "Entreprise", "Organisation"],
  en: ["Individual", "Business", "Organisation"],
};

const urgencyOptions = {
  fr: ["Flexible", "Sous 24–48 heures", "Urgent"],
  en: ["Flexible", "Within 24–48 hours", "Time-sensitive"],
};

const QuoteRequestForm = () => {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [direction, setDirection] = useState<"send" | "receive">("send");
  const [amount, setAmount] = useState("");
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [clientType, setClientType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [purpose, setPurpose] = useState("");

  const availableMethods = useMemo(() => {
    const methods = new Set<string>();
    if (fromCountry && paymentMethodsByCountry[fromCountry]) {
      paymentMethodsByCountry[fromCountry].forEach((m) => methods.add(m));
    }
    if (toCountry && paymentMethodsByCountry[toCountry]) {
      paymentMethodsByCountry[toCountry].forEach((m) => methods.add(m));
    }
    return Array.from(methods);
  }, [fromCountry, toCountry]);

  const canSubmit = amount && parseFloat(amount) > 0 && fromCountry && toCountry && email.includes("@");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const fromLabel = countries.find((c) => c.code === fromCountry)?.[lang] || fromCountry;
    const toLabel = countries.find((c) => c.code === toCountry)?.[lang] || toCountry;
    const dirLabel = direction === "send"
      ? (lang === "fr" ? "envoyer" : "send")
      : (lang === "fr" ? "que le destinataire reçoive" : "recipient receives");

    const msg = lang === "fr"
      ? `Demande de devis — Je souhaite ${dirLabel} ${amount} EUR de ${fromLabel} vers ${toLabel}. Email: ${email}${clientType ? `. Type: ${clientType}` : ""}${urgency ? `. Urgence: ${urgency}` : ""}${purpose ? `. Contexte: ${purpose}` : ""}`
      : `Quote request — I want to ${dirLabel} ${amount} EUR from ${fromLabel} to ${toLabel}. Email: ${email}${clientType ? `. Type: ${clientType}` : ""}${urgency ? `. Urgency: ${urgency}` : ""}${purpose ? `. Context: ${purpose}` : ""}`;

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setDirection("send");
    setAmount("");
    setFromCountry("");
    setToCountry("");
    setEmail("");
    setPaymentMethod("");
    setClientType("");
    setUrgency("");
    setPurpose("");
  };

  const selectClasses =
    "w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground font-sans-body focus:outline-none focus:border-primary/50 transition-colors appearance-none";
  const inputClasses =
    "w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground font-sans-body placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors";
  const labelClasses =
    "block text-[10px] font-sans-body text-muted-foreground mb-1.5 tracking-widest uppercase";

  if (submitted) {
    return (
      <div id="quote-form" className="w-full max-w-lg mx-auto animate-fade-in-up">
        <div className="border border-primary/20 rounded-sm bg-card/80 backdrop-blur-sm p-8 md:p-10 text-center">
          <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-primary" />
          </div>
          <h3 className="font-serif-display text-2xl font-bold text-foreground mb-3">
            {t("quote.success_title")}
          </h3>
          <p className="text-sm text-muted-foreground font-sans-body mb-8 leading-relaxed max-w-sm mx-auto">
            {t("quote.success_text")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-bold tracking-wider hover:bg-primary/90 transition-colors rounded-sm"
            >
              {t("quote.another")}
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-sans-body text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors rounded-sm"
            >
              <MessageCircle size={16} />
              {t("quote.contact_us")}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="quote-form" className="w-full max-w-lg mx-auto animate-fade-in-up animation-delay-400">
      <div className="border border-primary/20 rounded-sm bg-card/80 backdrop-blur-sm p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center">
            <Send size={16} className="text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif-display text-xl font-semibold text-foreground">
            {t("quote.form_title")}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground font-sans-body mb-6 leading-relaxed">
          {t("quote.form_helper")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Direction */}
          <div>
            <label className={labelClasses}>{t("quote.direction")}</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setDirection("send")}
                className={`flex-1 py-2.5 text-sm font-sans-body rounded-sm border transition-colors ${
                  direction === "send"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {t("quote.direction_send")}
              </button>
              <button
                type="button"
                onClick={() => setDirection("receive")}
                className={`flex-1 py-2.5 text-sm font-sans-body rounded-sm border transition-colors ${
                  direction === "receive"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {t("quote.direction_receive")}
              </button>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className={labelClasses}>{t("quote.amount")} *</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1 000"
              min="0"
              className={inputClasses}
              required
            />
          </div>

          {/* From / To */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClasses}>{t("quote.from")} *</label>
              <select value={fromCountry} onChange={(e) => { setFromCountry(e.target.value); setPaymentMethod(""); }} className={selectClasses} required>
                <option value="" disabled>—</option>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>{c[lang]}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClasses}>{t("quote.to")} *</label>
              <select value={toCountry} onChange={(e) => { setToCountry(e.target.value); setPaymentMethod(""); }} className={selectClasses} required>
                <option value="" disabled>—</option>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>{c[lang]}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className={labelClasses}>{t("quote.email")} *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputClasses}
              required
            />
          </div>

          {/* Optional section divider */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] text-muted-foreground/60 font-sans-body tracking-widest uppercase">
              {t("quote.optional")}
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Payment method (dynamic) */}
          {availableMethods.length > 0 && (
            <div>
              <label className={labelClasses}>{t("quote.payment_method")}</label>
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className={selectClasses}>
                <option value="">—</option>
                {availableMethods.map((m) => (
                  <option key={m} value={m}>{paymentMethodLabels[m]?.[lang] || m}</option>
                ))}
              </select>
            </div>
          )}

          {/* Client type */}
          <div>
            <label className={labelClasses}>{t("quote.client_type")}</label>
            <select value={clientType} onChange={(e) => setClientType(e.target.value)} className={selectClasses}>
              <option value="">—</option>
              {clientTypes[lang].map((ct) => (
                <option key={ct} value={ct}>{ct}</option>
              ))}
            </select>
          </div>

          {/* Urgency */}
          <div>
            <label className={labelClasses}>{t("quote.urgency")}</label>
            <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className={selectClasses}>
              <option value="">—</option>
              {urgencyOptions[lang].map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>

          {/* Purpose */}
          <div>
            <label className={labelClasses}>{t("quote.purpose")}</label>
            <textarea
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder={t("quote.purpose_placeholder")}
              rows={2}
              className={inputClasses + " resize-none"}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 text-sm font-bold tracking-widest hover:bg-primary/90 transition-all duration-300 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {t("quote.submit")}
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Compliance disclaimer */}
        <p className="text-[10px] text-muted-foreground/50 font-sans-body mt-4 leading-relaxed text-center">
          {t("quote.disclaimer")}
        </p>
      </div>
    </div>
  );
};

export default QuoteRequestForm;
