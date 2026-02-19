import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LegalNotice = () => {
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
          {t("legalnotice.title")}
        </h1>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-sans-body">
          <p>{t("legalnotice.intro")}</p>

          <div>
            <p className="font-medium text-foreground">{t("legalnotice.entity_label")}</p>
            <p>Kora Global Systems LLC</p>
          </div>

          <div>
            <p className="font-medium text-foreground">{t("legalnotice.jurisdiction_label")}</p>
            <p>{t("legalnotice.jurisdiction")}</p>
          </div>

          <div>
            <p className="font-medium text-foreground">{t("legalnotice.nature_label")}</p>
            <p>{t("legalnotice.nature")}</p>
          </div>

          <div>
            <p className="font-medium text-foreground">{t("legalnotice.not_label")}</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>{t("legalnotice.not1")}</li>
              <li>{t("legalnotice.not2")}</li>
              <li>{t("legalnotice.not3")}</li>
              <li>{t("legalnotice.not4")}</li>
            </ul>
          </div>

          <p>{t("legalnotice.thirdparty")}</p>

          <div>
            <p className="font-medium text-foreground">Contact</p>
            <a href="mailto:contact@koraglobalsystems.com" className="text-primary hover:underline">
              contact@koraglobalsystems.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
