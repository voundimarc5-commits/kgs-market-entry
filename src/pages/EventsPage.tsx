import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import EventCard from "@/components/platform/EventCard";
import { events } from "@/data/mockData";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import fintechConference from "@/assets/fintech-conference.jpg";

const EventsPage = () => {
  const { t } = useLanguage();

  return (
    <PlatformLayout>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={fintechConference} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4 border border-primary/20">
              <Calendar size={12} />
              {t("events.badge")}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-3">
              {t("events.title")} <span className="text-gradient-gold">{t("events.title_highlight")}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              {t("events.desc")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 section-divider">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((evt, i) => (
              <ScrollReveal key={evt.id} delay={i * 80}>
                <EventCard event={evt} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default EventsPage;
