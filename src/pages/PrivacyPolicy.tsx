import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          {t("legal.back")}
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-8 tracking-wide">
          {t("privacy.title")}
        </h1>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed font-sans-body">
          {[1, 2, 3, 4, 5].map((n) => (
            <section key={n}>
              <h2 className="text-base font-semibold text-foreground mb-3">
                {t(`privacy.s${n}.title`)}
              </h2>
              <div className="space-y-2 whitespace-pre-line">
                {t(`privacy.s${n}.text`)}
              </div>
              {t(`privacy.s${n}.list`) !== `privacy.s${n}.list` && (
                <ul className="list-disc list-inside space-y-1 mt-2">
                  {t(`privacy.s${n}.list`).split("\n").map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
