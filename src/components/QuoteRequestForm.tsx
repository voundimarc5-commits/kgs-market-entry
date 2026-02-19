import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/447404062008";

const currencies = [
  { code: "USD", fr: "USD – Dollar américain", en: "USD – US Dollar" },
  { code: "EUR", fr: "EUR – Euro", en: "EUR – Euro" },
  { code: "GBP", fr: "GBP – Livre sterling", en: "GBP – British Pound" },
  { code: "CHF", fr: "CHF – Franc suisse", en: "CHF – Swiss Franc" },
  { code: "CAD", fr: "CAD – Dollar canadien", en: "CAD – Canadian Dollar" },
  { code: "XAF", fr: "XAF – Franc CFA (CEMAC)", en: "XAF – Central African CFA Franc" },
  { code: "XOF", fr: "XOF – Franc CFA (UEMOA)", en: "XOF – West African CFA Franc" },
];

const paymentMethods = [
  { value: "bank_transfer", fr: "Virement bancaire", en: "Bank transfer" },
  { value: "card", fr: "Carte", en: "Card" },
  { value: "mobile_money", fr: "Mobile Money", en: "Mobile money" },
  { value: "digital_wallet", fr: "Portefeuille numérique", en: "Digital wallet" },
  { value: "cash_based", fr: "Solution en espèces (si applicable)", en: "Cash-based solution (where applicable)" },
  { value: "not_sure", fr: "Pas encore sûr", en: "Not sure yet" },
];

const clientTypes = {
  fr: ["Particulier", "Entreprise / Organisation"],
  en: ["Individual", "Business / Organisation"],
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
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [clientType, setClientType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [purpose, setPurpose] = useState("");

  const canSubmit = amount && parseFloat(amount) > 0 && fromCurrency && toCurrency && email.includes("@");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const dirLabel = direction === "send"
      ? (lang === "fr" ? "envoyer" : "send")
      : (lang === "fr" ? "que le destinataire reçoive" : "recipient receives");

    const msg = lang === "fr"
      ? `Demande de devis — Je souhaite ${dirLabel} ${amount} ${fromCurrency} → ${toCurrency}. Email: ${email}${clientType ? `. Type: ${clientType}` : ""}${urgency ? `. Urgence: ${urgency}` : ""}${paymentMethod ? `. Méthode: ${paymentMethods.find(m => m.value === paymentMethod)?.fr}` : ""}${purpose ? `. Contexte: ${purpose}` : ""}`
      : `Quote request — I want to ${dirLabel} ${amount} ${fromCurrency} → ${toCurrency}. Email: ${email}${clientType ? `. Type: ${clientType}` : ""}${urgency ? `. Urgency: ${urgency}` : ""}${paymentMethod ? `. Method: ${paymentMethods.find(m => m.value === paymentMethod)?.en}` : ""}${purpose ? `. Context: ${purpose}` : ""}`;

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setDirection("send");
    setAmount("");
    setFromCurrency("");
    setToCurrency("");
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

          {/* From / To Currency */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClasses}>{t("quote.from")} *</label>
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className={selectClasses} required>
                <option value="" disabled>—</option>
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>{c[lang]}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClasses}>{t("quote.to")} *</label>
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className={selectClasses} required>
                <option value="" disabled>—</option>
                {currencies.map((c) => (
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

          {/* Payment method (static list, optional) */}
          <div>
            <label className={labelClasses}>{t("quote.payment_method")}</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className={selectClasses}>
              <option value="">—</option>
              {paymentMethods.map((m) => (
                <option key={m.value} value={m.value}>{m[lang]}</option>
              ))}
            </select>
            <p className="text-[9px] text-muted-foreground/50 font-sans-body mt-1 leading-relaxed">
              {t("quote.payment_method_note")}
            </p>
          </div>
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
          <p className="text-[9px] text-muted-foreground/50 font-sans-body mt-1 text-center leading-relaxed">
            {t("quote.submit_note")}
          </p>
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
