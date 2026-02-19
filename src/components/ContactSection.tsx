import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_LINK = "https://wa.me/447404062008";

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    type: "",
    amount: "",
    country: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.type) {
      toast({
        title: t("contact.name"),
        description: "Please fill in the required fields.",
        variant: "destructive",
      });
      return;
    }

    const msg = `*${t("contact.title")}*\n\n*${t("contact.name")}:* ${form.name}\n*WhatsApp:* ${form.whatsapp}\n*${t("contact.type")}:* ${form.type}\n*${t("contact.amount")}:* ${form.amount}\n*${t("contact.country")}:* ${form.country}\n*Message:* ${form.message}`;
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const inputClasses = "w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground font-sans-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-6 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("contact.label")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            {t("contact.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        {/* Intro text */}
        <p className="text-center text-sm text-muted-foreground font-sans-body max-w-xl mx-auto mb-12 scroll-reveal">
          {t("contact.intro")}
        </p>

        <div className="max-w-xl mx-auto scroll-reveal">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-sans-body text-muted-foreground mb-1.5 tracking-wide uppercase">
                {t("contact.name")} *
              </label>
              <input name="name" value={form.name} onChange={handleChange} required className={inputClasses} />
            </div>

            {/* WhatsApp number */}
            <div>
              <label className="block text-xs font-sans-body text-muted-foreground mb-1.5 tracking-wide uppercase">
                {t("contact.whatsapp_number")}
              </label>
              <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+237" className={inputClasses} />
            </div>

            {/* Type */}
            <div>
              <label className="block text-xs font-sans-body text-muted-foreground mb-1.5 tracking-wide uppercase">
                {t("contact.type")} *
              </label>
              <select name="type" value={form.type} onChange={handleChange} required className={inputClasses}>
                <option value="" disabled>—</option>
                <option value="payment">{t("contact.type.payment")}</option>
                <option value="info">{t("contact.type.info")}</option>
                <option value="other">{t("contact.type.other")}</option>
              </select>
            </div>

            {/* Amount + Country row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-sans-body text-muted-foreground mb-1.5 tracking-wide uppercase">
                  {t("contact.amount")}
                </label>
                <input name="amount" value={form.amount} onChange={handleChange} placeholder="ex: 500 EUR" className={inputClasses} />
              </div>
              <div>
                <label className="block text-xs font-sans-body text-muted-foreground mb-1.5 tracking-wide uppercase">
                  {t("contact.country")}
                </label>
                <input name="country" value={form.country} onChange={handleChange} className={inputClasses} />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-sans-body text-muted-foreground mb-1.5 tracking-wide uppercase">
                {t("contact.message")}
              </label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={`${inputClasses} resize-none`} />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 text-sm font-bold tracking-widest hover:bg-primary/90 transition-colors rounded-sm"
            >
              {t("contact.submit")}
            </button>
          </form>

          {/* WhatsApp link */}
          <div className="mt-8 text-center scroll-reveal">
            <p className="text-sm text-muted-foreground mb-3 font-sans-body">{t("contact.whatsapp")}</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
